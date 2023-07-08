import { Profile } from '@/components/ui';
import AboutMe from '@/components/ui/about/AboutMe';

function AboutPage() {
  return (
    <>
      <Profile />
      {/* @ts-expect-error Async Server Component */}
      <AboutMe />
    </>
  );
}

export default AboutPage;
