import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-bone">
      Hi! My page is currently under construction
      <Image
        src={require("../assets/patrickConstruction.gif")}
        alt="under construction"
      />
    </main>
  );
}
