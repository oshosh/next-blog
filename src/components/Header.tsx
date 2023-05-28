import Link from 'next/link';

function Header() {
  return (
    <header className='flex justify-between items-center p-4'>
      <Link href='/'>
        <h1 className='font-bold text-3xl'>OSH's Blog</h1>
      </Link>
      <nav className='flex space-x-4'>
        <Link href='/'>home</Link>
        <Link href='/about'>about</Link>
        <Link href='/posts'>posts</Link>
        <Link href='/contact'>contact</Link>
      </nav>
    </header>
  );
}

export default Header;
