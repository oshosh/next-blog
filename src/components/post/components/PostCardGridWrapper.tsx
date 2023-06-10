function PostCardGridWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col w-full'>
      <div className='grid gap-4 xl:grid-cols-4 lg:md:grid-cols-3 sm:grid-cols-2'>{children}</div>
    </div>
  );
}

export default PostCardGridWrapper;
