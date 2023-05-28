import Image from 'next/image';
import { Posts } from 'service/posts';

interface Props {
  cardItem: Posts;
}
function PostsCardItem({ cardItem }: Props) {
  const { category, path, title } = cardItem;

  return (
    <>
      <div className='flex flex-col items-center w-full'>
        <Image width={999} height={200} alt={category} src={`/images/posts/${path}.png`} />
        <div>{title}</div>
      </div>
    </>
  );
}

export default PostsCardItem;
