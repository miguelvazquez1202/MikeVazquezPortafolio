import sgMail from '@sendgrid/mail';
import type { InsertContactMessage } from '@shared/schema';

// Initialize SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
} else {
  console.warn('SENDGRID_API_KEY not found in environment variables');
}

export async function sendContactNotification(contactData: InsertContactMessage): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY) {
    console.error('SendGrid API key not configured');
    return false;
  }

  const { firstName, lastName, email, serviceType, message } = contactData;

  // Email to Mike Vázquez (notification)
  const notificationEmail = {
    to: 'miguelvazquez1202@gmail.com',
    from: 'no-reply@mikevazquez.com', // Using a domain-based sender
    subject: `Nuevo mensaje de contacto - ${serviceType}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #ffc20f; padding: 20px; border-radius: 8px 8px 0 0;">
          <h1 style="color: #2e2e2e; margin: 0; font-size: 24px;">Nuevo Mensaje de Contacto</h1>
        </div>
        
        <div style="background-color: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #e0e0e0;">
          <h2 style="color: #2e2e2e; margin-top: 0;">Detalles del Cliente</h2>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #2e2e2e;">Nombre:</strong> ${firstName} ${lastName}
          </div>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #2e2e2e;">Email:</strong> 
            <a href="mailto:${email}" style="color: #ffc20f; text-decoration: none;">${email}</a>
          </div>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #2e2e2e;">Tipo de Servicio:</strong> ${serviceType}
          </div>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #2e2e2e;">Mensaje:</strong>
            <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 8px; border-left: 4px solid #ffc20f;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
            <p style="color: #666; font-size: 14px; margin: 0;">
              Este mensaje fue enviado desde tu sitio web de portafolio.<br>
              Puedes responder directamente a ${email}
            </p>
          </div>
        </div>
      </div>
    `,
  };

  // Confirmation email to the client
  const confirmationEmail = {
    to: email,
    from: 'no-reply@mikevazquez.com',
    subject: 'Mensaje recibido - Mike Vázquez Fotografía',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #ffc20f; padding: 20px; border-radius: 8px 8px 0 0;">
          <h1 style="color: #2e2e2e; margin: 0; font-size: 24px;">¡Gracias por tu mensaje!</h1>
        </div>
        
        <div style="background-color: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #e0e0e0;">
          <p style="color: #2e2e2e; font-size: 16px; line-height: 1.6;">
            Hola ${firstName},
          </p>
          
          <p style="color: #2e2e2e; font-size: 16px; line-height: 1.6;">
            Gracias por contactarme respecto a <strong>${serviceType}</strong>. 
            He recibido tu mensaje y me pondré en contacto contigo muy pronto para discutir tu proyecto.
          </p>
          
          <div style="background-color: white; padding: 20px; border-radius: 4px; margin: 20px 0; border-left: 4px solid #ffc20f;">
            <p style="color: #2e2e2e; margin: 0; font-size: 14px;">
              <strong>Tu mensaje:</strong><br>
              ${message.replace(/\n/g, '<br>')}
            </p>
          </div>
          
          <p style="color: #2e2e2e; font-size: 16px; line-height: 1.6;">
            Mientras tanto, puedes revisar más de mi trabajo en mi 
            <a href="https://www.instagram.com/mikevazquez12" style="color: #ffc20f; text-decoration: none;">Instagram</a>.
          </p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
            <p style="color: #2e2e2e; font-size: 16px; margin-bottom: 10px;">
              <strong>Mike Vázquez</strong><br>
              Fotógrafo y Filmmaker<br>
              <a href="mailto:miguelvazquez1202@gmail.com" style="color: #ffc20f; text-decoration: none;">miguelvazquez1202@gmail.com</a><br>
              <a href="tel:+525537264582" style="color: #ffc20f; text-decoration: none;">+52 55 3726 4582</a>
            </p>
          </div>
        </div>
      </div>
    `,
  };

  try {
    // Send both emails
    await Promise.all([
      sgMail.send(notificationEmail),
      sgMail.send(confirmationEmail)
    ]);
    
    console.log('Contact emails sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending contact emails:', error);
    return false;
  }
}