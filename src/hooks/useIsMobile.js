import {useEffect, useState} from 'react';
import useWindowSize from '@/hooks/useWindowSize';

function useIsMobile(width) {
  const [isMobile, setIsMobile] = useState(false);
  const windowSize = useWindowSize();

  useEffect(() => {
    const {width} = windowSize;
    (width < width) ? setIsMobile(true) : setIsMobile(false);

  }, [windowSize]);

  useEffect(() => {
    console.log(isMobile);
  }, [isMobile]);

  return isMobile;
}


export default useIsMobile;