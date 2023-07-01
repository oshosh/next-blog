import { Posts } from '@/components/post/@types';

function useNavigatorData(posts: Posts[], slug: string) {
  const currentIndex = posts.findIndex((post) => post.path === slug);
  const previousPage = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPage = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  const pageInfo = {
    previousPage,
    nextPage,
  };

  return pageInfo;
}

export default useNavigatorData;
