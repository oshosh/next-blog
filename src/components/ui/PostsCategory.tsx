'use client';
import { useState } from 'react';
import { Posts } from 'service/posts';
import Categories from '../category/Categories';
import { PostCardGridWrapper } from '../post';
import PostItem from '../post/components/PostItem';

type Props = {
  posts: Posts[];
};

function PostsCategory({ posts }: Props) {
  const [selectItem, setSelectItem] = useState('All Posts');
  const [filterPost, setFilterPost] = useState<Posts[]>(posts);

  const handleClick = (selectCategoryItem: string) => {
    const filterPosts = posts.filter(({ category }) => category === selectCategoryItem);

    if (selectCategoryItem !== 'All Posts') setFilterPost(filterPosts);
    else setFilterPost(posts);

    setSelectItem(selectCategoryItem);
  };

  return (
    <>
      <div className='flex'>
        <PostCardGridWrapper>
          {filterPost.map((post) => {
            return <PostItem key={post.title} {...post} />;
          })}
        </PostCardGridWrapper>

        <Categories selectItem={selectItem} handleClick={handleClick} />
      </div>
    </>
  );
}

export default PostsCategory;
