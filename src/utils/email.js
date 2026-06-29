// import axios from 'axios';
import { Resend } from 'resend';



const resend_url = "https://api.resend.com"

const auth = {
        Authorization: `Bearer ${import.meta.env.VITE_RESEND_AUTH}`,
        'User-Agent': 'my-app/1.0',
        'Content-Type': 'application/json',
        
        "from": "Acme <onboarding@resend.dev>",
        "to": ["delivered@resend.dev"],
        // "subject": "hello world",
        // "html": "<p>it works!</p>"
    }
 
export const send_email = async ( payload ) => {

    console.log('payload', payload)
    const resend = new Resend(import.meta.env.VITE_RESEND_AUTH);
    
    const { data, error } = await resend.emails.send({
        from: 'SpringVoxSupport <support@springvoxsl.com>',
        to: ['ladisamuel@gmail.com', ],
        subject: 'Checking hello world',
        html: '<p>it works!</p>',
    });

    console.log('resp', data)
    console.log('resp error', error)
    
}