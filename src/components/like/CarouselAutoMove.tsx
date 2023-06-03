'use client';

import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import { Posts } from 'service/posts';
import PostsCardItem from '../post/PostsCardItem';
import CarouselSkeleton from './CarouselSkeleton';

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

function CarouselAutoMove() {
  const [featuredPosts, setFeaturedPosts] = useState<Posts[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch('api/post', {
      next: {
        revalidate: 0,
      },
    });

    res.json().then((response) => {
      const { posts }: { posts: Posts[] } = response;

      setFeaturedPosts(posts!);
      setLoading(true);
    });
  };

  if (!isLoading) return <CarouselSkeleton />;

  return (
    <Carousel ssr infinite autoPlay autoPlaySpeed={1000} arrows={false} responsive={responsive}>
      {isLoading &&
        featuredPosts.map((post) => {
          return <PostsCardItem key={post.title} cardItem={post} />;
        })}
    </Carousel>
  );
}

export default CarouselAutoMove;
