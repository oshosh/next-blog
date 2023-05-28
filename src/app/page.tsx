import Posts from '@/components/Posts';
import Profile from '@/components/Profile';
import { getPosts } from 'service/posts';

async function HomePage() {
  const posts = (await getPosts()).reverse();

  return (
    <>
      <Profile />
      <Posts posts={posts} />
    </>
  );
}

export default HomePage;
