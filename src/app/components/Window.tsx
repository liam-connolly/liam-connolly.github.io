"use client";
import React, { ReactNode, useEffect, useState } from "react";
import Draggable from "react-draggable";
import Image from "next/image";

interface WindowProps {
  title: string;
  display: boolean;
  children?: ReactNode;
  onClose: () => void;
}

const Window: React.FC<WindowProps> = ({
  title,
  display = false,
  children,
  onClose,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  if (display)
    return (
      <Draggable 
        handle=".header" 
        bounds="parent" 
        defaultClassName="absolute z-50"
        disabled={isMobile}
      >
        <div className="window max-w-[90vw] md:max-w-none">
          <div
            className="header bg-navGrey flex-col p-2 border-2 border-t-white border-l-white border-r-grey border-b-grey"
            style={{ width: "100%" }}
          >
            <div className="flex-grow items-center gap-2 justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src="/magnifyingGlass.png"
                  alt="magnifyingGlass"
                  width={28}
                  height={28}
                  className="bg-darkTeal border-2 border-t-white border-l-white border-r-black border-b-black"
                />
                <div
                  className="flex-grow bg-darkBlue px-2 md:px-4 border-2 border-t-white border-l-white border-r-black border-b-black text-xs md:text-base"
                  style={{ color: "white" }}
                >
                  Liam Connolly / ©
                </div>
                <button onClick={onClose} className="p-1">
                  <Image
                    src="/x.png"
                    alt="close"
                    width={16}
                    height={16}
                    className=""
                  />
                </button>
              </div>
            </div>
            <div className="flex-row">
              <div style={{ color: "black", fontWeight: "bold" }} className="text-sm md:text-base">{title}</div>
            </div>
          </div>
          <div className="content border-l-2 border-r-2 border-b-2 border-l-white border-r-grey border-b-grey">
            {children}
          </div>
        </div>
      </Draggable>
    );
};

export default Window;
