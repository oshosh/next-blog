import Image from 'next/image';
import Link from 'next/link';
import { Posts } from 'service/posts';
import PostCardWrapper from './PostCardWrapper';
import PostItem from './PostItem';

interface Props {
  cardItem: Posts;
}

function PostsCard({ cardItem }: Props) {
  const { category, path } = cardItem;

  return (
    <>
      <PostCardWrapper>
        <Link href={`/posts/${path}`}>
          <article className='rounded-md overflow-hidden shadow-lg'>
            <Image width={999} height={200} alt={category} src={`/images/posts/${path}.png`} />
            <PostItem cardItem={cardItem} />
          </article>
        </Link>
      </PostCardWrapper>
    </>
  );
}

export default PostsCard;
