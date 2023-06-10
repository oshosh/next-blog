import { getPosts } from 'service/posts';
import PostsCard from './PostsCard';

async function PostContent() {
  const posts = await getPosts();
  const filterPosts = posts.filter(({ featured }) => featured);

  return (
    <section>
      <h2 className='text-xl font-bold mb-2'>Featured Posts</h2>
      {/* @ts-expect-error Async Server Component */}
      <PostsCard posts={filterPosts} />
    </section>
  );
}

export default PostContent;
