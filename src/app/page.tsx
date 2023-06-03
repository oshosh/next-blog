import CarouselPost from '@/components/like/CarouselPost';
import PostFeature from '@/components/post/PostFeature';
import Profile from '@/components/Profile';

async function HomePage() {
  return (
    <>
      <Profile />
      {/* https://github.com/vercel/next.js/issues/42292 */}
      {/* @ts-expect-error Async Server Component */}
      <PostFeature />
      {/* @ts-expect-error Async Server Component */}
      <CarouselPost />
    </>
  );
}

export default HomePage;
