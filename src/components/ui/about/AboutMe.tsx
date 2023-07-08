import { getInfo } from 'service/posts';
import AboutCard from './AboutCard';

async function AboutMe() {
  const { who, career, skills } = await getInfo();

  return (
    <div className='mt-8 rounded-xl h-auto bg-slate-100 py-4 flex justify-center'>
      <div className='pt-1 flex flex-col items-center'>
        <AboutCard info={who} />
        <AboutCard info={career} />
        <AboutCard info={skills} />
      </div>
    </div>
  );
}

export default AboutMe;
