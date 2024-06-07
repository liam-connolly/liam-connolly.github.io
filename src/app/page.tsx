import React from "react";
import Name from "./components/Name";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 min-h-screen items-center justify-center p-24 bg-strokesBlue">
      <Navbar />
      <Name />
    </main>
  );
}
