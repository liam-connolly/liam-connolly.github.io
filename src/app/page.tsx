import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-bone">
      Hello name is Liam
      <img src={require("../assets/patrickConstruction.gif")} />
    </main>
  );
}
