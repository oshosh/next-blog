import { Nullable, Posts } from '../@types';
import NavigatePostCard from './NavigatePostCard';

interface Props {
  page: {
    previousPage: Nullable<Posts>;
    nextPage: Nullable<Posts>;
  };
}

function PostNavigator({ page }: Props) {
  const { previousPage, nextPage } = page;
  const cardSize = previousPage && nextPage ? 'w-3/6' : 'w-full';

  return (
    <div className='flex w-full'>
      {previousPage && (
        <NavigatePostCard post={previousPage} isPrevious={true} cardSize={cardSize} />
      )}
      {nextPage && <NavigatePostCard post={nextPage} isPrevious={false} cardSize={cardSize} />}
    </div>
  );
}

export default PostNavigator;
