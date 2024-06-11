"use client";
import React from "react";
import Image from "next/image";

interface DesktopIconProps {
  name: string;
  imageLink: string;
  onClick: () => void;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({
  name,
  imageLink,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="tems-center justify-center text-center text-white"
      style={{ fontSize: "16px" }}
    >
      <Image src={imageLink} alt={`${name}-image`} width={64} height={64} />
      {name}
    </button>
  );
};

export default DesktopIcon;
