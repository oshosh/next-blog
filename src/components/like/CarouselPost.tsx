import { getPosts } from 'service/posts';
import PostsCardItem from '../post/PostsCardItem';
import CarouselMulti from './CarouselMulti';

async function CarouselPost() {
  const posts = await getPosts();
  return (
    <section>
      <h2 className='text-xl font-bold mb-2'>You May Like</h2>

      <CarouselMulti>
        {posts.map((post) => {
          return <PostsCardItem key={post.title} cardItem={post} />;
        })}
      </CarouselMulti>
    </section>
  );
}

export default CarouselPost;
