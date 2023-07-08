import ContactMe from '@/components/ui/contact/ContactMe';
import SendEmail from '@/components/ui/contact/SendEmail';

function ContactPage() {
  return (
    <section className='flex flex-col items-center justify-center'>
      <ContactMe />

      <span className='text-3xl font-bold pt-11'>Or Send me an email</span>
      <SendEmail />
    </section>
  );
}

export default ContactPage;
