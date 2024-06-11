"use client";
import React, { useState } from "react";
import Name from "./components/Name";
import Navbar from "./components/Navbar";
import DesktopIcon from "./components/DesktopIcon";
import Window from "./components/Window";
import Image from "next/image";

export default function Home() {
  const [key, setKey] = useState(0);
  const [showAboutMe, setShowAboutMe] = useState(false);

  const handleNavButtonClick = () => {
    setKey((prevKey) => prevKey + 1);
  };

  const handleStravaClick = () => {
    window.open("https://www.strava.com/athletes/liamconnolly", "_blank");
  };

  const handleEmailClick = () => {
    window.location.assign("mailto:liamconnolly.hello@gmail.com");
  };

  const handleResumeClick = () => {
    window.open("/Resume.pdf", "_blank");
  };

  const handleAboutMeClick = () => {
    setShowAboutMe(!showAboutMe);
  };

  return (
    <main className="flex flex-col gap-10 min-h-screen items-center justify-center  bg-strokesBlue">
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
      <div className="absolute top-3/4 left-64">
        <DesktopIcon
          name={"About Me"}
          imageLink={require("../assets/aboutMe.png")}
          onClick={handleAboutMeClick}
        />
      </div>

      <Window
        title="About Me"
        display={showAboutMe}
        onClose={() => setShowAboutMe(!showAboutMe)}
      >
        <div className="bg-white items-center justify-center p-24  flex-col">
          This page is currently under construction, thank you for your
          patience.
          <Image
            src={require("../assets/patrickConstruction.gif")}
            alt="construction"
          />
        </div>
      </Window>
    </main>
  );
}
