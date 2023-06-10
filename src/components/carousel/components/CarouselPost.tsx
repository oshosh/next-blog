import { PostsCard } from '@/components/post';
import { CarouselMulti } from '@/components/ui';
import { getPosts } from 'service/posts';

async function CarouselPost() {
  const posts = await getPosts();

  return (
    <section className='py-8'>
      <h2 className='text-xl font-bold mb-2'>You May Like</h2>

      <CarouselMulti>
        {posts.map((post) => {
          return <PostsCard key={post.title} cardItem={post} />;
        })}
      </CarouselMulti>
    </section>
  );
}

export default CarouselPost;
