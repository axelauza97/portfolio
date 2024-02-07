import formidable from 'formidable';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export const config = {
  api: {
    bodyParser: false // Disabling the built-in body parser
  }
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = formidable({});

    try {
      const [fields, files] = await form.parse(req);
      const data = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['axelauza31@gmail.com'],
        subject: 'Information',
        html:
          '<strong>Information Axel!</strong><br/><div>Email: ' +
          fields.email +
          '</div><br/><div>Body:' +
          fields.body +
          '</div>'
      });
      /*const promise = new Promise((res) =>
        setTimeout(() => {
          res(true);
        }, 2000)
      );
      const data = await promise.then((res) => res);
      console.log(data);*/
      if (data != null) {
        const response = { message: 'Email sent successfully.' };
        res.status(200).json(response);
      } else {
        const response = { message: 'Error email sent.' };
        res.status(400).json(response);
      }
    } catch (err) {
      console.error(err);
      res.writeHead(err.httpCode || 400, { 'Content-Type': 'text/plain' });
      res.end(String(err));
      return;
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
