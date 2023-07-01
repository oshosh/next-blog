import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Nullable, Posts } from '../@types';

interface Props {
  post: Nullable<Posts>;
  isPrevious?: boolean;
  cardSize: string;
}

function NavigatePostCard({ post, isPrevious, cardSize }: Props) {
  const alignmentClass = isPrevious ? 'left' : 'right';

  return (
    <Link href={`/posts/${post?.path}`} className={`${cardSize} relative bg-black`}>
      <Image
        className='object-cover h-36 opacity-40'
        alt={post?.title || ''}
        src={`/images/posts/${post?.path}.png`}
        width={9999}
        height={100}
      />
      <div
        className={`absolute inset-y-0 ${alignmentClass}-0 flex flex-col justify-center ${
          alignmentClass === 'left' ? 'ml-20' : 'mr-20'
        }`}
      >
        {alignmentClass === 'left' ? (
          <FaArrowLeft className='text-2xl text-yellow-500' />
        ) : (
          <FaArrowRight className='text-2xl text-yellow-500' />
        )}
      </div>
      <div
        className={`absolute inset-y-0 ${
          alignmentClass === 'left' ? 'right-0' : 'left-0'
        } flex flex-col justify-center ${alignmentClass === 'left' ? 'mr-20' : 'ml-20'}`}
      >
        <span className='font-bold text-2xl text-white'>{post?.title}</span>
        <span className='font-bold text-xs text-white'>{post?.description}</span>
      </div>
    </Link>
  );
}

export default NavigatePostCard;
