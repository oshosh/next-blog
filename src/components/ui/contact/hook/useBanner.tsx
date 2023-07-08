import { Nullable } from '@/components/post/@types';
import { useEffect, useState } from 'react';
import Banner from '../Banner';

const useBanner = () => {
  const [banner, setBanner] = useState<Nullable<Banner>>(null);

  useEffect(() => {
    setTimeout(() => {
      setBanner(null);
    }, 3000);
  }, [banner]);

  return { banner, setBanner };
};

export default useBanner;
