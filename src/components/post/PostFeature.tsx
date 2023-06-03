import Grid from '@/components/Grid';
import { getPosts } from 'service/posts';
import PostsCardItem from './PostsCardItem';

async function PostFeature() {
  const posts = await getPosts();
  const filterPosts = posts.filter(({ featured }) => featured);

  return (
    <section>
      <h2 className='text-xl font-bold mb-2'>Featured Posts</h2>

      <Grid>
        {filterPosts.map((post) => {
          return <PostsCardItem key={post.title} cardItem={post} />;
        })}
      </Grid>
    </section>
  );
}

export default PostFeature;
