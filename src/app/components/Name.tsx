"use client";

import React, { useState, useEffect } from "react";
import {
  Press_Start_2P,
  VT323,
  DotGothic16,
  Pixelify_Sans,
  Silkscreen,
} from "next/font/google";

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const vt323 = VT323({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const dotGothic16 = DotGothic16({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const silkscreen = Silkscreen({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const fonts = [
  vt323.className,
  dotGothic16.className,
  pixelifySans.className,
  silkscreen.className,
  pressStart2P.className,
];

interface NameProps {
  key: number;
}

const Name: React.FC<NameProps> = ({ key }) => {
  const [currentFontIndex, setCurrentFontIndex] = useState(0);

  useEffect(() => {
    if (currentFontIndex < fonts.length - 1) {
      const interval = setInterval(() => {
        setCurrentFontIndex((prevIndex) => prevIndex + 1);
      }, 200);

      return () => clearInterval(interval);
    }
  }, [currentFontIndex]);

  return (
    <div
      className={fonts[currentFontIndex]}
      style={{ fontSize: "50px", color: "white" }}
    >
      LIAM CONNOLLY
    </div>
  );
};

export default Name;
