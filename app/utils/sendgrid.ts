import  sendgrid from '@sendgrid/mail';
import toast from 'react-hot-toast';

export async function sendEmail(msg: any): Promise<void>  {
  sendgrid.setApiKey(process.env.NEXT_PUBLIC_NEW_PRO_GENIUS as string);

  try {
    await sendgrid.send(msg);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}


