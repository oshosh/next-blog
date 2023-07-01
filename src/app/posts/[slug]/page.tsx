import PostMarkdownContent from '@/components/post/components/PostMarkdownContent';
import PostNavigator from '@/components/post/components/PostNavigator';
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

  const currentIndex = posts.findIndex((post) => post.path === slug);

  const previousPage = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPage = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  const pageInfo = {
    previousPage,
    nextPage,
  };

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
