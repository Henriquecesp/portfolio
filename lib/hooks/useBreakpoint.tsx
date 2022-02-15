/**
 * // useWindowDimension.ts
 * * This hook returns the viewport/window height and width
 */

import { useEffect, useState } from 'react';

type BreakPoint = 'xs' | 'sm' | 'md' | 'lg' | '';

const useBreakpoint = (): BreakPoint => {
  const [breakpoint, setBreakpoint] = useState<BreakPoint>('');

  const getDeviceConfig = (width) => {
    if (width < 320) {
      return 'xs';
    } else if (width >= 320 && width < 720) {
      return 'sm';
    } else if (width >= 720 && width < 1024) {
      return 'md';
    } else if (width >= 1024) {
      return 'lg';
    }
  };

  useEffect(() => {
    function handleResize(): void {
      setBreakpoint(getDeviceConfig(window.innerWidth));
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return (): void => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return breakpoint;
};

export default useBreakpoint;