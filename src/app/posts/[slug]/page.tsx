import Md from '@/components/md/Md';
import { getMarkdown } from 'service/posts';

interface Props {
  params: {
    slug: string;
  };
}

async function PostPage({ params: { slug } }: Props) {
  const getData = await getMarkdown(slug);

  if (!getData) null;

  return (
    <>
      <div className='bg-gray-100 p-9 rounded-md'>
        <div>{getData?.id}</div>
        <Md markdown={getData?.md?.content}></Md>
      </div>
    </>
  );
}

export default PostPage;
