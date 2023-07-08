import { Content } from '@/components/post/@types';

interface Props {
  info: Content;
}

function AboutCard({ info }: Props) {
  const { title, contents } = info;

  return (
    <div className='pt-1 flex flex-col items-center'>
      <h2 className='text-xl font-bold'>{title}</h2>
      {contents.map((item, index) => {
        return <span key={item + index}>{item}</span>;
      })}
    </div>
  );
}

export default AboutCard;
