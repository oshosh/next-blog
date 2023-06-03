import PostCard from '@/components/post/PostCard';
import PostContent from '@/components/post/PostContent';
import Image from 'next/image';
import Link from 'next/link';
import { Posts } from 'service/posts';

interface Props {
  cardItem: Posts;
}

function PostsCardItem({ cardItem }: Props) {
  const { category, path } = cardItem;

  return (
    <>
      <PostCard>
        <Link href={`/posts/${path}`}>
          <article className='rounded-md overflow-hidden shadow-lg'>
            <Image width={999} height={200} alt={category} src={`/images/posts/${path}.png`} />
            <PostContent cardItem={cardItem} />
          </article>
        </Link>
      </PostCard>
    </>
  );
}

export default PostsCardItem;
