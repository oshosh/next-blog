import PostMarkdownContent from '@/components/post/components/PostMarkdownContent';
import PostNavigator from '@/components/post/components/PostNavigator';
import { Md } from '@/components/ui';
import useNavigatorData from '@/hooks/useNavigatePost';
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

  const pageInfo = useNavigatorData(posts, slug);

  if (!getData) return;
  else
    return (
      <>
        <div className='bg-gray-100 p-9 rounded-md'>
          {findCurrentContents && <PostMarkdownContent content={findCurrentContents} />}
          <Md style='mt-5' markdown={getData?.md?.content}></Md>
          <PostNavigator page={pageInfo} />
        </div>
      </>
    );
}

export default PostPage;
