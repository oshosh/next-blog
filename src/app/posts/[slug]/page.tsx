import PostMarkdownContent from '@/components/post/components/PostMarkdownContent';
import { Md } from '@/components/ui';
import { getMarkdown, getPosts } from 'service/posts';

interface Props {
  params: {
    slug: string;
  };
}

async function PostPage({ params: { slug } }: Props) {
  const getData = await getMarkdown(slug);
  const posts = await getPosts();
  const findCurrentContents = posts.find(({ path }) => path === slug);

  if (!getData) return;
  else
    return (
      <>
        <div className='bg-gray-100 p-9 rounded-md'>
          {findCurrentContents && <PostMarkdownContent content={findCurrentContents} />}
          <Md style='mt-5' markdown={getData?.md?.content}></Md>
        </div>
      </>
    );
}

export default PostPage;
