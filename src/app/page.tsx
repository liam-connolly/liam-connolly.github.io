import React from "react";
import Name from "./components/Name";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 min-h-screen items-center justify-center p-24 bg-strokesBlue">
      <Name />

      <Image alt="test" src={require("../assets/globe.gif")} />
    </main>
  );
}
