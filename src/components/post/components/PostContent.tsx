import { getPosts } from 'service/posts';
import PostCardGridWrapper from './PostCardGridWrapper';
import PostsCard from './PostsCard';

async function PostContent() {
  const posts = await getPosts();
  const filterPosts = posts.filter(({ featured }) => featured);

  return (
    <section>
      <h2 className='text-xl font-bold mb-2'>Featured Posts</h2>

      <PostCardGridWrapper>
        {filterPosts.map((post) => {
          return <PostsCard key={post.title} cardItem={post} />;
        })}
      </PostCardGridWrapper>
    </section>
  );
}

export default PostContent;
