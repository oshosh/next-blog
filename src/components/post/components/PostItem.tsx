import Image from 'next/image';
import Link from 'next/link';
import { Posts } from 'service/posts';

type OmitProps = Omit<Posts, 'featured'>;

function PostItem({ category, title, description, date, path }: OmitProps) {
  return (
    <>
      <Link href={`/posts/${path}`}>
        <article className='rounded-md overflow-hidden shadow-lg'>
          <Image width={999} height={200} alt={category} src={`/images/posts/${path}.png`} />
          <div className='inline-block w-full text-center'>
            <div className='text-end mr-2'>{date}</div>
            <h3 className='text-lg font-bold'>{title}</h3>
            <p className='w-full truncate'>{description}</p>
            <span className='text-sm rounded-lg bg-green-100 px-2 my-2'>{category}</span>
          </div>
        </article>
      </Link>
    </>
  );
}

export default PostItem;
