import { Dispatch, SetStateAction, useEffect } from 'react';

function useBackgroundSwap<T>(handler: Dispatch<SetStateAction<T>>, color: T, trigger: boolean) {
  useEffect(() => {
    trigger && handler(color);
  }, [trigger, handler, color])
}

export { useBackgroundSwap }