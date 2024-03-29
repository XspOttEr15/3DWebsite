import React, { useState, useEffect } from "react";
import "./styles/Instructions.css";

const Instructions = ({ isVisible, onPlayClick }) => {
  // Initialize the animation class state
  const [animationClass, setAnimationClass] = useState('animate-bounce');

  // Handle click to change animation to animate-ping
  const handleClick = () => {
    setAnimationClass('animate-ping');
  };

  useEffect(() => {
    // If the animation class is animate-ping, set a timeout to revert it back to animate-bounce
    if (animationClass === 'animate-ping') {
      const timer = setTimeout(() => {
        setAnimationClass('animate-bounce');
      }, 1000); // 1000ms = 1 second; adjust this based on the length of your animate-ping

      // Cleanup the timeout if the component is unmounted before the timeout is complete
      return () => clearTimeout(timer);
    }
  }, [animationClass]); // This effect depends on the animationClass state

  return (
    <div onClick={handleClick} className={`instructions-overlay${isVisible ? " visible" : ""}`}>
      <div className="overlay"></div>
      <div className=" animate-pulse text-green-400 text-6xl mb-5 text-center pointer-events-none">
        Click Anywhere to Continue
      </div>
      <svg
        className={`${animationClass} w-12 h-12 m-5  p-1`}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
        
      >
        <path d="M14.5 3 12 7.156 9.857 3H2l10 18L22 3h-7.5ZM4.486 4.5h2.4L12 13.8l5.107-9.3h2.4L12 18.021 4.486 4.5Z" />
      </svg>
    </div>
  );
};

export default Instructions;
