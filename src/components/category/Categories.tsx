'use client';
import { useMemo } from 'react';

interface Props {
  selectItem: string;
  handleClick: (item: string) => void;
}

function Categories({ selectItem, handleClick }: Props) {
  const selectCategoryStyle = useMemo(
    () => (category: string) => {
      return selectItem === category ? 'text-cyan-500' : '';
    },
    [selectItem]
  );

  return (
    <div className='flex flex-col items-center p-7'>
      <div className='font-bold text-xl underline underline-offset-8 decoration-blue-500'>
        Category
      </div>

      <ul>
        {['All Posts', 'my story', 'frontend', 'backend', 'javascript'].map((category) => (
          <li
            key={category}
            onClick={() => handleClick(category)}
            className={`cursor-pointer hover:text-blue-700 ${selectCategoryStyle(category)}`}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
