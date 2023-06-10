import PostsCategory from '@/components/category/PostsCategory';
import { getPosts } from 'service/posts';

async function PostsPage() {
  const posts = await getPosts();

  return <PostsCategory posts={posts} />;
}

export default PostsPage;
