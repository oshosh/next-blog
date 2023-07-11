const nodemailer = require('nodemailer');

export const user = process.env.EMAIL;
export const pass = process.env.EMAIL_PASS;

export const createTransporter = (email: string) => {
  let transporter;

  if (email.endsWith('@gmail.com')) {
    transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-password',
      },
    });
  } else if (email.endsWith('@naver.com')) {
    transporter = nodemailer.createTransport({
      service: 'naver',
      host: 'smtp.naver.com',
      port: 587,
      auth: {
        user,
        pass,
      },
    });
  }

  return transporter;
};
