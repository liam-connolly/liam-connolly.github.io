"use client";
import React, { useEffect, useState } from "react";

interface NavbarProps {
  onButtonClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onButtonClick }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleTimeClick = () => {
    setShowDropdown(!showDropdown);
  };

  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div className="absolute h-8 top-0 left-0 w-full bg-navGrey  border-2 border-b-black border-r-black border-t-white border-l-white">
      <button
        className={
          "absolute left-2 top-1 px-2 border-2 border-b-black border-r-black border-t-white border-l-white text-black"
        }
        style={{ fontSize: "11px" }}
        onClick={onButtonClick}
      >
        LIAM CONNOLLY
      </button>
      <button
        className={
          "absolute right-2 top-1 z-10 px-2 border-2 border-b-black border-r-black border-t-white border-l-white text-black"
        }
        style={{ fontSize: "11px" }}
        onClick={handleTimeClick}
      >
        {formattedTime}
        {showDropdown && <div className=" bg-white  shadow-lg">Hello!</div>}
      </button>
    </div>
  );
};

export default Navbar;
