"use client";
import React, { useState } from "react";
import Name from "./components/Name";
import Navbar from "./components/Navbar";

export default function Home() {
  const [key, setKey] = useState(0);

  const handleButtonClick = () => {
    setKey((prevKey) => prevKey + 1);
  };

  return (
    <main className="flex flex-col gap-10 min-h-screen items-center justify-center p-24 bg-strokesBlue">
      <Navbar onButtonClick={handleButtonClick} />
      <Name key={key} />
    </main>
  );
}
