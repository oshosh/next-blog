type Props = {
  selectItem: string;
  handleClick: (item: string) => void;
};
function Categories({ selectItem, handleClick }: Props) {
  return (
    <div className='flex flex-col items-center p-7 '>
      <div className='font-bold text-xl underline underline-offset-8 decoration-blue-500'>
        Category
      </div>

      <ul>
        {['All Posts', 'my story', 'frontend', 'backend', 'javascript'].map((item) => (
          <li
            key={item}
            onClick={(_) => handleClick(item)}
            className={`hover:text-blue-700 ${selectItem === item ? 'text-cyan-500' : ''}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
