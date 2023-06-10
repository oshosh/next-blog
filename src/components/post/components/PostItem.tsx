import { Posts } from 'service/posts';

interface Props {
  cardItem: Posts;
}

function PostItem({ cardItem }: Props) {
  const { category, title, description, date } = cardItem;

  return (
    <div className='inline-block w-full text-center'>
      <div className='text-end mr-2'>{date}</div>
      <h3 className='text-lg font-bold'>{title}</h3>
      <p className='w-full truncate'>{description}</p>
      <span className='text-sm rounded-lg bg-green-100 px-2 my-2'>{category}</span>
    </div>
  );
}

export default PostItem;
