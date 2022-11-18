import { useRef, useEffect } from "react";

export const useTimeInterval = (cb: any, time: number) => {
  const isFirstStart = useRef(true);
  if (isFirstStart.current) cb();
  isFirstStart.current = false;
  useEffect(() => {
    const runTimeIntervarl = setInterval(() => {
      cb();
    }, time);
    return () => {
      clearInterval(runTimeIntervarl);
    };
  }, []);
};
