import Mailjet from 'node-mailjet';
import type { ContactInquiry } from '@shared/schema';

interface EmailParams {
  inquiry: ContactInquiry;
}

export async function sendContactInquiryEmail({ inquiry }: EmailParams): Promise<boolean> {
  try {
    console.log('Starting email send process for inquiry:', inquiry.id);
    
    const apiKey = process.env.MAILJET_API_KEY;
    const apiSecret = process.env.MAILJET_API_SECRET;
    
    if (!apiKey || !apiSecret) {
      console.error('Mailjet API credentials are not set');
      return false;
    }
    
    console.log('Mailjet client configured, proceeding with email send');

    const mailjet = new Mailjet({
      apiKey: apiKey,
      apiSecret: apiSecret
    });

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

    // Send email to both recipients
    const request = mailjet
      .post('send', { version: 'v3.1' })
      .request({
        Messages: [
          {
            From: {
              Email: 'noreply@theplasticsurgeon.io',
              Name: 'Plastic Surgery Specialist'
            },
            To: [
              {
                Email: 'gemma.fowler5@nhs.net',
                Name: 'Gemma Fowler'
              },
              {
                Email: 'ryan@thesurgeon.io',
                Name: 'Ryan Kerstein'
              }
            ],
            Subject: `New Patient Inquiry - ${inquiry.firstName} ${inquiry.lastName}`,
            TextPart: emailContent
          }
        ]
      });

    const result = await request;
    
    console.log('Mailjet response:', JSON.stringify(result.body, null, 2));
    
    if (result.response.status === 200) {
      console.log('Contact inquiry email sent successfully via Mailjet');
      return true;
    } else {
      console.error('Mailjet email send failed with status:', result.response.status);
      return false;
    }

  } catch (error) {
    console.error('Error sending contact inquiry email via Mailjet:', error);
    return false;
  }
}
