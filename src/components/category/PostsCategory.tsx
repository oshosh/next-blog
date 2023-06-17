'use client';
import useFilteredPosts from '@/hooks/useFilteredPosts';
import { Posts } from 'service/posts';
import { PostCardGridWrapper } from '../post';
import PostItem from '../post/components/PostItem';
import Categories from './Categories';

interface Props {
  posts: Posts[];
}

function PostsCategory({ posts }: Props) {
  const { selectItem, filterPosts, handleClick } = useFilteredPosts(posts);

  return (
    <div className='flex'>
      <PostCardGridWrapper>
        {filterPosts.map((post) => (
          <PostItem key={post.title} {...post} />
        ))}
      </PostCardGridWrapper>

      <Categories selectItem={selectItem} handleClick={handleClick} />
    </div>
  );
}

export default PostsCategory;
