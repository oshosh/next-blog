'use client';
import Carousel from 'react-multi-carousel';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function CarouselMulti({ children }: { children: React.ReactNode }) {
  return (
    <Carousel ssr infinite autoPlay autoPlaySpeed={1000} arrows={false} responsive={responsive}>
      {children}
    </Carousel>
  );
}

export default CarouselMulti;
