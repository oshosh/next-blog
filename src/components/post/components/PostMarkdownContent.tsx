import Image from 'next/image';

interface Props {
  content: {
    title: string;
    description: string;
    path: string;
  };
}
function PostMarkdownContent({ content }: Props) {
  const { title, description, path } = content;

  return (
    <>
      <Image
        className='prose lg:prose-xl w-full max-w-screen-2xl mx-auto object-cover h-72'
        width={999}
        height={100}
        alt={title}
        src={`/images/posts/${path}.png`}
      />
      <h1 className='text-3xl font-bold mt-6'>{title}</h1>
      <h2 className='text-lg font-semibold relative'>
        {description}
        <span className='absolute bottom-[-4px] left-0 w-1/6 h-0.5 bg-blue-400'></span>
      </h2>
    </>
  );
}

export default PostMarkdownContent;
