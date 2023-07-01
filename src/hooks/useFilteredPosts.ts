import { Posts } from '@/components/post/@types';
import { useMemo, useState } from 'react';

interface FilteredPosts {
  selectItem: string;
  filterPosts: Posts[];
  handleClick: (selectCategoryItem: string) => void;
}

function useFilteredPosts(posts: Posts[]): FilteredPosts {
  const [selectItem, setSelectItem] = useState('All Posts');

  const filterPosts = useMemo(() => {
    if (selectItem === 'All Posts') return posts;
    return posts.filter(({ category }) => category === selectItem);
  }, [posts, selectItem]);

  const handleClick = (selectCategoryItem: string) => setSelectItem(selectCategoryItem);

  return {
    selectItem,
    filterPosts,
    handleClick,
  };
}

export default useFilteredPosts;
