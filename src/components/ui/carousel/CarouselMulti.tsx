'use client';
import Carousel from 'react-multi-carousel';
import { RESPONSIVE } from './constants';

type Props = { children: React.ReactNode };

function CarouselMulti({ children }: Props) {
  return (
    <Carousel
      infinite
      autoPlay
      autoPlaySpeed={1000}
      arrows={false}
      responsive={RESPONSIVE}
      itemClass='m-2'
    >
      {children}
    </Carousel>
  );
}

export default CarouselMulti;
