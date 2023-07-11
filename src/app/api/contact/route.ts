import { createTransporter, user } from '@/lib/nodemailer';
import { NextResponse } from 'next/server';

export function GET(req: Request) {
  return NextResponse.json('test call', { status: 200 });
}

export async function POST(req: Request) {
  const { from, subject, message } = await req.json();

  if (!from || !subject || !message) {
    return NextResponse.json({ message: 'validate error' }, { status: 400 });
  } else {
    try {
      const transporter = createTransporter(from);

      const mailOptions = {
        from: user,
        to: user,
        subject: '',
        text: '',
      };

      await transporter.sendMail({
        ...mailOptions,
        subject,
        text: message,
      });
      return NextResponse.json({ message: 'success' }, { status: 200 });
    } catch (error: any) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
  }
}
