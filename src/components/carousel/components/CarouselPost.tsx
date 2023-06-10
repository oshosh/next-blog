import PostItem from '@/components/post/components/PostItem';
import { CarouselMulti } from '@/components/ui';
import { getPosts } from 'service/posts';

async function CarouselPost() {
  const posts = await getPosts();
  const filterPosts = posts.filter(({ featured }) => featured);

  return (
    <section className='py-8'>
      <h2 className='text-xl font-bold mb-2'>You May Like</h2>

      <CarouselMulti>
        {filterPosts.map((post) => {
          return <PostItem key={post.title} {...post} />;
        })}
      </CarouselMulti>
    </section>
  );
}

export default CarouselPost;
