import {NextResponse} from 'next/server';
import nodemailer from 'nodemailer';
import {z} from 'zod';

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = formSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {error: 'Invalid input.'},
        {status: 400}
      );
    }

    const {name, email, message} = validation.data;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Sending to yourself
      subject: `New message from ${name} via portfolio`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {message: 'Message sent successfully!'},
      {status: 200}
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {error: 'An error occurred while sending the message.'},
      {status: 500}
    );
  }
}
