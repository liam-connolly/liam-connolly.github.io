"use client";
import React from "react";

interface NavbarProps {
  onButtonClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onButtonClick }) => {
  return (
    <div className="absolute top-0 left-0 w-full bg-navGrey p-1 border-2 border-b-black border-r-black border-t-white border-l-white">
      <button
        className={
          "px-2 border-2 border-b-black border-r-black border-t-white border-l-white  text-black"
        }
        style={{ fontSize: "12px" }}
        onClick={onButtonClick}
      >
        LIAM CONNOLLY
      </button>
    </div>
  );
};

export default Navbar;
