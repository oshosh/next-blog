import { FaGithub, FaLinkedin } from 'react-icons/fa';

function ContactMe() {
  return (
    <div className='space-y-2 flex flex-col items-center justify-center'>
      <h2 className='text-3xl font-bold'>Contact Me</h2>
      <span className='text-sm'>dhtpgus7@gmail.com</span>
      <div className='flex space-x-2'>
        <a href='https://github.com/oshosh' target='_blank' rel='noopener noreferrer'>
          <FaGithub className='cursor-pointer text-4xl hover:text-yellow-500' />
        </a>
        <a
          href='https://www.linkedin.com/in/sehyun-oh-462ba723b/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin className='cursor-pointer text-4xl hover:text-yellow-500' />
        </a>
      </div>
    </div>
  );
}

export default ContactMe;
