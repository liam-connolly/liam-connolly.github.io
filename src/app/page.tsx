import React from "react";
import Image from "next/image";
import Name from "./components/Name";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-strokesBlue">
      Hi! My page is currently under construction
      <Name />
      <Image
        src={require("../assets/patrickConstruction.gif")}
        alt="under construction"
      />
    </main>
  );
}
