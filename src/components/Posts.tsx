import { Posts } from 'service/posts';
import PostsCardItem from './PostsCardItem';

interface Props {
  posts: Posts[];
}

function Posts({ posts }: Props) {
  const filterPosts = posts.filter(({ featured }) => featured);

  return (
    <section>
      <h2 className='text-xl font-bold mb-2'>Featured Posts</h2>

      <div className='grid gap-4 xl:grid-cols-4 lg:md:grid-cols-3 sm:grid-cols-2 '>
        {filterPosts.map((post) => {
          return <PostsCardItem key={post.title} cardItem={post} />;
        })}
      </div>
    </section>
  );
}

export default Posts;
