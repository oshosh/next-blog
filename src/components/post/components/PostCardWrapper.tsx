type Props = { children: React.ReactNode };

function PostCardWrapper({ children }: Props) {
  return <div className='flex flex-col w-full'>{children}</div>;
}

export default PostCardWrapper;
