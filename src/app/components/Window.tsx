"use client";
import React, { ReactNode } from "react";
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
  if (display)
    return (
      <Draggable handle=".header" bounds="parent" defaultClassName="absolute">
        <div className="window">
          <div
            className="header bg-navGrey flex-col p-2 border-2 border-t-white border-l-white border-r-grey border-b-grey"
            style={{ width: "100%" }}
          >
            <div className="flex-grow items-center gap-2 justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src={require("../../assets/magnifyingGlass.png")}
                  alt={`magnifyingGlass`}
                  height={28}
                  className="bg-darkTeal border-2 border-t-white border-l-white border-r-black border-b-black"
                />
                <div
                  className="flex-grow bg-darkBlue px-4 border-2 border-t-white border-l-white border-r-black border-b-black"
                  style={{ color: "white" }}
                >
                  Liam Connolly / ©
                </div>
                <button onClick={onClose}>
                  <Image
                    src={require("../../assets/x.png")}
                    alt={`close`}
                    height={16}
                    className=""
                  />
                </button>
              </div>
            </div>
            <div className="flex-row">
              <div style={{ color: "black", fontWeight: "bold" }}>{title}</div>
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
