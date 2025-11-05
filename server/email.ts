import { Resend } from 'resend';
import type { ContactInquiry } from '@shared/schema';

let connectionSettings: any;

async function getCredentials() {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=resend',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  if (!connectionSettings || (!connectionSettings.settings.api_key)) {
    throw new Error('Resend not connected');
  }
  return {apiKey: connectionSettings.settings.api_key, fromEmail: connectionSettings.settings.from_email};
}

async function getUncachableResendClient() {
  const credentials = await getCredentials();
  return {
    client: new Resend(credentials.apiKey),
    fromEmail: credentials.fromEmail || 'nonreply@thesurgeon.io'
  };
}

interface EmailParams {
  inquiry: ContactInquiry;
}

export async function sendContactInquiryEmail({ inquiry }: EmailParams): Promise<boolean> {
  try {
    console.log('Starting email send process for inquiry:', inquiry.id);
    
    const { client: resend, fromEmail } = await getUncachableResendClient();
    
    console.log('Resend client configured, proceeding with email send from:', fromEmail);

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
        from: fromEmail,
        to: 'gemma.fowler5@nhs.net',
        subject: `New Patient Inquiry - ${inquiry.firstName} ${inquiry.lastName}`,
        text: emailContent,
      }),
      // Copy to specialist
      resend.emails.send({
        from: fromEmail,
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
