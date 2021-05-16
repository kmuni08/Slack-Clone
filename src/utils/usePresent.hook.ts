import { useEffect, useState } from 'react';
import { MotionValue, useViewportScroll } from 'framer-motion';

/**
 * if current scroll y position is less than or equal offset return: `true`
 * else return: `false`
 * @param elementHeight
 * @param defaultState
 * @param offset
 */
function usePresent(elementHeight: number, defaultState = true, offset = 0.1): [boolean, MotionValue<number>, MotionValue<number>] {

  const [ isPresent, isPresentSetter] = useState(defaultState);
  const { scrollY, scrollYProgress } = useViewportScroll();

  useEffect(() => {
    isPresentSetter(scrollY.get() <= offset);
    const subscription = scrollY.onChange(y => {
      isPresentSetter(y <= elementHeight*offset);
    });
    return () => subscription();
  }, [elementHeight, offset, scrollY]);

  return [ isPresent, scrollY, scrollYProgress ];
}

export { usePresent }