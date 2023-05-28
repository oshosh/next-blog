import Image from 'next/image';
import Link from 'next/link';
import resumePhoto from 'public/images/test.jpg';

function Profile() {
  return (
    <section className='text-center'>
      <div className='flex flex-col items-center justify-center'>
        <div className='overflow-hidden rounded-[60%]'>
          <div className='w-full h-full object-cover'>
            <Image height={250} width={250} priority src={resumePhoto} alt='이력서 사진'></Image>
          </div>
        </div>

        <div className='mt-2 text-center'>
          <h2 className='text-3xl font-bold'>Hi, I'm OSH</h2>
          <h3 className='text-xl font-semibold'>Front-end Engineer</h3>
          <p>Next 13, 자기소개</p>
        </div>

        <Link href='/contact' className='rounded-xl bg-yellow-500 font-bold py-1 px-4 mt-2'>
          Contact Me
        </Link>
      </div>
    </section>
  );
}

export default Profile;
