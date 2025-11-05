import { Resend } from 'resend';
import type { ContactInquiry } from '@shared/schema';

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailParams {
  inquiry: ContactInquiry;
}

export async function sendContactInquiryEmail({ inquiry }: EmailParams): Promise<boolean> {
  try {
    console.log('Starting email send process for inquiry:', inquiry.id);
    
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY environment variable is not set');
      return false;
    }
    
    console.log('Resend API key is configured, proceeding with email send');

    const emailContent = `
New Contact Inquiry Received

Patient Details:
- Name: ${inquiry.firstName} ${inquiry.lastName}
- Email: ${inquiry.email}
- Phone: ${inquiry.phone || 'Not provided'}
- Service Interest: ${inquiry.service || 'General consultation'}

Message:
${inquiry.message}

Inquiry received: ${inquiry.createdAt?.toLocaleString('en-GB', { 
  timeZone: 'Europe/London',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
})}

---
This inquiry was submitted through the Plastic Surgery Specialist website.
    `.trim();

    // Send to both recipients
    const emailPromises = [
      // Primary contact - Gemma Fowler
      resend.emails.send({
        from: 'nonreply@thesurgeon.io',
        to: 'gemma.fowler5@nhs.net',
        subject: `New Patient Inquiry - ${inquiry.firstName} ${inquiry.lastName}`,
        text: emailContent,
      }),
      // Copy to specialist
      resend.emails.send({
        from: 'nonreply@thesurgeon.io',
        to: 'ryan@thesurgeon.io',
        subject: `New Patient Inquiry - ${inquiry.firstName} ${inquiry.lastName}`,
        text: emailContent,
      })
    ];

    const results = await Promise.allSettled(emailPromises);
    
    // Log detailed results for each email
    results.forEach((result, index) => {
      const recipient = index === 0 ? 'gemma.fowler5@nhs.net' : 'ryan@thesurgeon.io';
      if (result.status === 'fulfilled') {
        console.log(`Email to ${recipient} - Success:`, JSON.stringify(result.value, null, 2));
      } else {
        console.error(`Email to ${recipient} - Failed:`, JSON.stringify(result.reason, null, 2));
      }
    });
    
    // Check if at least one email was sent successfully
    const successCount = results.filter(result => result.status === 'fulfilled').length;
    
    if (successCount === 0) {
      console.error('Failed to send emails to any recipients:', results);
      return false;
    }

    if (successCount < results.length) {
      console.warn(`Sent ${successCount} out of ${results.length} emails. Some failed:`, results);
    }

    console.log(`Contact inquiry email sent successfully to ${successCount} recipients`);
    return true;

  } catch (error) {
    console.error('Error sending contact inquiry email:', error);
    return false;
  }
}