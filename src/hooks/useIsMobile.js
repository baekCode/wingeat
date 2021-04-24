import {useEffect, useState} from 'react';
import useWindowSize from '@/hooks/useWindowSize';

function useIsMobile(widthSize) {
  const [isMobile, setIsMobile] = useState(false);
  const windowSize = useWindowSize();

  useEffect(() => {
    const {width} = windowSize;
    (width < widthSize) ? setIsMobile(true) : setIsMobile(false);

  }, [windowSize]);
  return isMobile;
}


export default useIsMobile;