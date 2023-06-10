import { Posts } from 'service/posts';
import PostCardGridWrapper from './PostCardGridWrapper';
import PostItem from './PostItem';

type Props = {
  posts: Posts[];
};

async function PostsCard({ posts }: Props) {
  return (
    <>
      <PostCardGridWrapper>
        {posts.map((post) => {
          return <PostItem key={post.title} {...post} />;
        })}
      </PostCardGridWrapper>
    </>
  );
}

export default PostsCard;
