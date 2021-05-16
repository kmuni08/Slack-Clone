import { useEffect, useState } from 'react';
import { AnimateDown, AnimateUp, AnimationDirection } from '../interfaces';
import { MotionValue } from 'framer-motion';

/**
 * @param transformY: current transformY value on fixed element
 * @param trigger: boolean value to trigger useEffect
 * @return AnimationDirection
 */
const useScrollDirection = (transformY: MotionValue<number>, trigger: boolean) => {
  const [direction, directionSetter] = useState<AnimationDirection>(transformY.get() > 0 ? AnimateUp : AnimateDown);
  useEffect(() => {
    directionSetter(transformY.get() > 0 ? AnimateUp : AnimateDown);
  }, [transformY, trigger])
  
  return direction;
}

export { useScrollDirection }