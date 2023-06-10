import CarouselPost from '@/components/carousel/components/CarouselPost';
import PostContent from '@/components/post/components/PostContent';
import { Profile } from '@/components/ui';

async function HomePage() {
  return (
    <>
      <Profile />
      {/* https://github.com/vercel/next.js/issues/42292 */}
      {/* @ts-expect-error Async Server Component */}
      <PostContent />
      {/* @ts-expect-error Async Server Component */}
      <CarouselPost />
    </>
  );
}

export default HomePage;
