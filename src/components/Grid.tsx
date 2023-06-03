function Grid({ children }: { children: React.ReactNode }) {
  return (
    <div className='grid gap-4 xl:grid-cols-4 lg:md:grid-cols-3 sm:grid-cols-2'>{children}</div>
  );
}

export default Grid;
