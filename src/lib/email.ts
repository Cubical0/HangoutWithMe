import nodemailer from 'nodemailer';

interface EmailData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  source?: string;
  category?: string;
}

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD, // Gmail App Password
    },
  });
};

// Send notification email to admin
export const sendContactNotification = async (data: EmailData) => {
  const transporter = createTransporter();
  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL || 'yuvrajsinghrathore0807@gmail.com',
    subject: `New Contact Form Submission: ${data.subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #333; border-bottom: 2px solid #d946ef; padding-bottom: 10px;">
            🚀 New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #555; margin-bottom: 15px;">Contact Details:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #666; width: 120px;">Name:</td>
                <td style="padding: 8px 0; color: #333;">${data.firstName} ${data.lastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #666;">Email:</td>
                <td style="padding: 8px 0; color: #333;">
                  <a href="mailto:${data.email}" style="color: #d946ef; text-decoration: none;">${data.email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #666;">Subject:</td>
                <td style="padding: 8px 0; color: #333;">${data.subject}</td>
              </tr>
              ${data.source ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #666;">Source Page:</td>
                <td style="padding: 8px 0; color: #333;">
                  <span style="background-color: #f3f4f6; padding: 2px 8px; border-radius: 12px; font-size: 12px; text-transform: capitalize;">
                    ${data.source}
                  </span>
                </td>
              </tr>
              ` : ''}
              ${data.category ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #666;">Category:</td>
                <td style="padding: 8px 0; color: #333;">
                  <span style="background-color: #e5e7eb; padding: 2px 8px; border-radius: 12px; font-size: 12px; text-transform: capitalize;">
                    ${data.category}
                  </span>
                </td>
              </tr>
              ` : ''}
            </table>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #555; margin-bottom: 15px;">Message:</h3>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #d946ef;">
              <p style="margin: 0; line-height: 1.6; color: #333;">${data.message.replace(/\n/g, '<br>')}</p>
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
            <p style="color: #666; font-size: 14px; margin: 0;">
              This email was sent from the Hangout Finance contact form.
            </p>
            <p style="color: #666; font-size: 12px; margin: 5px 0 0 0;">
              Received on ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('❌ Error sending contact notification email:', error);
    throw error;
  }
};

// Send confirmation email to user
export const sendContactConfirmation = async (data: EmailData) => {
  const transporter = createTransporter();
  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: data.email,
    subject: 'Thank you for contacting Hangout Finance!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #d946ef; margin: 0; font-size: 28px;">Hangout Finance</h1>
            <p style="color: #666; margin: 5px 0 0 0;">Thank you for reaching out!</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h2 style="color: #333; margin-bottom: 15px;">Hi ${data.firstName},</h2>
            <p style="color: #555; line-height: 1.6; margin-bottom: 20px;">
              Thank you for contacting us! We've received your message and will get back to you as soon as possible.
            </p>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #d946ef; margin: 20px 0;">
              <h3 style="color: #333; margin: 0 0 10px 0; font-size: 16px;">Your Message Summary:</h3>
              <p style="color: #666; margin: 5px 0; font-size: 14px;"><strong>Subject:</strong> ${data.subject}</p>
              <p style="color: #666; margin: 5px 0; font-size: 14px;"><strong>Message:</strong></p>
              <p style="color: #555; margin: 10px 0 0 0; font-size: 14px; line-height: 1.5;">${data.message.replace(/\n/g, '<br>')}</p>
            </div>
            
            <p style="color: #555; line-height: 1.6; margin: 20px 0;">
              Our team typically responds within 24-48 hours during business days. If your inquiry is urgent, 
              please don't hesitate to reach out to us directly.
            </p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
            <p style="color: #666; font-size: 14px; margin: 0;">
              Best regards,<br>
              <strong style="color: #d946ef;">The Hangout Finance Team</strong>
            </p>
            <div style="margin-top: 20px;">
              <a href="mailto:yuvrajsinghrathore0807@gmail.com" style="color: #d946ef; text-decoration: none; font-size: 14px;">
                📧 yuvrajsinghrathore0807@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('❌ Error sending contact confirmation email:', error);
    throw error;
  }
};