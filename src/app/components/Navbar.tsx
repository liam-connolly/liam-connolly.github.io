import React from "react";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full bg-navGrey p-1 border-2 border-b-black border-r-black border-t-white border-l-white">
      <button
        className={
          "px-2 border-2 border-b-black border-r-black border-t-white border-l-white  text-black"
        }
        style={{ fontSize: "12px" }}
      >
        LIAM CONNOLLY
      </button>
    </div>
  );
};

export default Navbar;
