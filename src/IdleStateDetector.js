import { useEffect, useRef } from "react";

const IdleStateDetector = ({ delay, onIdle, onActive }) => {
  const timeoutId = useRef();

  const startTimer = () => {
    timeoutId.current = setTimeout(() => {
      console.log("user is idle");
      resetTimer();
    }, delay);
  };

  const resetTimer = () => {
    clearTimeout(timeoutId.current);
    onActive && onActive();
    startTimer();
  };

  const setup = () => {
    document.addEventListener("mousemove", resetTimer, false);
    document.addEventListener("mousedown", resetTimer, false);
    document.addEventListener("keypress", resetTimer, false);
    document.addEventListener("DOMMouseScroll", resetTimer, false);
    document.addEventListener("mousewheel", resetTimer, false);
    document.addEventListener("touchmove", resetTimer, false);
    document.addEventListener("pointermove", resetTimer, false);
    startTimer();
  };

  const cleanup = () => {
    document.removeEventListener("mousemove", resetTimer, false);
    document.removeEventListener("mousedown", resetTimer, false);
    document.removeEventListener("keypress", resetTimer, false);
    document.removeEventListener("DOMMouseScroll", resetTimer, false);
    document.removeEventListener("mousewheel", resetTimer, false);
    document.removeEventListener("touchmove", resetTimer, false);
    document.removeEventListener("pointermove", resetTimer, false);
    clearTimeout(timeoutId.current);
  };

  useEffect(() => {
    setup();
    return () => {
      cleanup();
    };
  }, []);

  return null;
};

export default IdleStateDetector;
