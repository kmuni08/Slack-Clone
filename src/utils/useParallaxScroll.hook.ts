import { useSpring, useTransform, useViewportScroll } from 'framer-motion';
import { useEffect, useState } from 'react';

/**
 * configure viewport scroll Y & out put:
 * - animate: boolean (if scroll Y position is current in range of the parallax section)
 * - transformY: MotionValue<number> (an animation transform object base on the current scroll Y)
 * - scrollY: MotionValue<number> (scroll Y object)
 * @param inputRange: regular scroll Y range
 * @param offsetTop: navbar height
 * @param clientHeight: 100vh or min-height of current parallax section
 * @param targetHeight: height of scroll-animated element
 * @param isFinal: whenever the section is final section
 */

function useParallaxScroll(
  inputRange: [number, number],
  offsetTop: number,
  clientHeight: number,
  targetHeight: number,
  isFinal= false
) {
  const [initial, final] = inputRange;

  const [showLeft, showLeftSetter] = useState(false);
  const [showRight, showRightSetter] = useState(false);

  const { scrollY } = useViewportScroll();
  const middleInputRange = (initial + final) / 2;
  const initialOutputY = (clientHeight + targetHeight)/2 + offsetTop;
  const middleOutputY = isFinal && targetHeight > clientHeight ?  -(targetHeight - clientHeight)/2 : 0;
  const finalOutputY = isFinal && targetHeight > clientHeight ? middleOutputY : -(clientHeight + targetHeight)/2;

  console.log(middleOutputY)

  const transformY = useSpring(
    useTransform(
      scrollY,
      [initial, (middleInputRange + initial) / 2, (middleInputRange + final)/ 2, final],
      [initialOutputY, middleOutputY, middleOutputY, finalOutputY],
    ),
    { mass: 10, damping: 100, stiffness: 300, restDelta: 10, restSpeed: 10 }
  );

  useEffect(() => {
    const setAnimate = (y: number = scrollY.get(), transfY: number = transformY.get()) => {
      const isSectionInRange = y >= initial && y < final;
      const isTargetInRange = (transfY <= initialOutputY) && (!isFinal ? (transfY >= finalOutputY) : (transfY >= middleOutputY));
      if (isTargetInRange && isSectionInRange) {
        showLeftSetter(true);
        showRightSetter(true);
        return;
      }
      if (transfY === finalOutputY || transfY === initialOutputY) {
        showRightSetter(false);
      }
      showLeftSetter(false);
    };

    setAnimate();
    const subscription = transformY.onChange(y => setAnimate());
    return () => subscription();
  }, [scrollY, initialOutputY, middleOutputY, finalOutputY, showLeftSetter, showRightSetter, final, initial, transformY, isFinal])

  return { showLeft, showRight, transformY, scrollY };
}

export { useParallaxScroll }