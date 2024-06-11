"use client";
import React, { useState } from "react";
import Name from "./components/Name";
import Navbar from "./components/Navbar";
import DesktopIcon from "./components/DesktopIcon";

export default function Home() {
  const [key, setKey] = useState(0);

  const handleNavButtonClick = () => {
    setKey((prevKey) => prevKey + 1);
  };

  const handleStravaClick = () => {
    window.open("https://www.strava.com/athletes/liamconnolly", "_blank"); // Open the link in a new tab
  };

  const handleEmailClick = () => {
    window.location.assign("mailto:liamconnolly.hello@gmail.com");
  };

  const handleResumeClick = () => {
    window.open("/Resume.pdf", "_blank");
  };

  return (
    <main className="flex flex-col gap-10 min-h-screen items-center justify-center p-24 bg-strokesBlue">
      <Navbar onButtonClick={handleNavButtonClick} />
      <Name key={key} />
      <div className="absolute top-1/4 left-24">
        <DesktopIcon
          name={"Resume"}
          imageLink={require("../assets/resume.png")}
          onClick={handleResumeClick}
        />
      </div>

      <div className="absolute bottom-1/4 right-36">
        <DesktopIcon
          name={"Email"}
          imageLink={require("../assets/email.png")}
          onClick={handleEmailClick}
        />
      </div>
      <div className="absolute top-1/4 right-48">
        <DesktopIcon
          name={"Strava"}
          imageLink={require("../assets/strava.png")}
          onClick={handleStravaClick}
        />
      </div>
    </main>
  );
}
