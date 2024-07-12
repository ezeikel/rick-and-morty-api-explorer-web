'use client';

import { useEffect } from 'react';
import { useUIContext } from '@/contexts/ui';

const HeaderHeightMeasurer = () => {
  const { setHeaderHeight } = useUIContext();

  useEffect(() => {
    // measure the height of the header
    const headerElement = document.getElementById('header');
    if (headerElement) {
      const height = headerElement.offsetHeight;
      setHeaderHeight(height);
    }
  }, []);

  return null; // this component doesn't render anything
};

export default HeaderHeightMeasurer;
