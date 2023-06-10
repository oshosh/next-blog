import { Footer, Header } from '@/components/ui';
import { Open_Sans } from 'next/font/google';
import 'react-multi-carousel/lib/styles.css';
import './globals.css';
import Main from './main';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Blog',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={sans.className}>
      <body className='flex flex-col w-full max-w-screen-2xl mx-auto'>
        <Header />
        <Main children={children} />
        <Footer />
      </body>
    </html>
  );
}
