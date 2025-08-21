'use client';
import React, { useState, useCallback } from 'react';
import Name from './components/Name';
import Navbar from './components/Navbar';
import DesktopIcon from './components/DesktopIcon';
import Window from './components/Window';

export default function Home() {
  const [key, setKey] = useState(0);
  const [showAboutMe, setShowAboutMe] = useState(false);

  const handleNavButtonClick = useCallback(() => {
    setKey((prevKey) => prevKey + 1);
  }, []);

  const handleStravaClick = useCallback(() => {
    window.open('https://www.strava.com/athletes/liamconnolly', '_blank');
  }, []);

  const handleEmailClick = useCallback(() => {
    window.location.assign('mailto:liamconnolly.hello@gmail.com');
  }, []);

  const handleResumeClick = useCallback(() => {
    window.open('/Resume.pdf', '_blank');
  }, []);

  const handleAboutMeClick = useCallback(() => {
    setShowAboutMe((prev) => !prev);
  }, []);

  const handleDivvyClick = useCallback(() => {
    window.open('https://divvy-tracking.vercel.app', '_blank');
  }, []);

  const handleCameraClick = useCallback(() => {
    window.open('https://photos.app.goo.gl/Yugk5iMvZ7pgvRta7', '_blank');
  }, []);

  return (
    <main className='flex flex-col gap-10 min-h-screen items-center justify-center  bg-strokesBlue'>
      <Navbar onButtonClick={handleNavButtonClick} />

      <Name key={key} />
      <div className='absolute top-1/4 left-24'>
        <DesktopIcon
          name={'Resume'}
          imageLink='/resume.png'
          onClick={handleResumeClick}
        />
      </div>

      <div className='absolute bottom-1/4 right-36'>
        <DesktopIcon
          name={'Email'}
          imageLink='/email.png'
          onClick={handleEmailClick}
        />
      </div>
      <div className='absolute top-1/4 right-48'>
        <DesktopIcon
          name={'Strava'}
          imageLink='/strava.png'
          onClick={handleStravaClick}
        />
      </div>
      <div className='absolute top-3/4 left-64'>
        <DesktopIcon
          name={'About Me'}
          imageLink='/aboutMe.png'
          onClick={handleAboutMeClick}
        />
      </div>
      <div className='absolute top-1/2 left-12'>
        <DesktopIcon
          name={'Latest'}
          imageLink='/project.png'
          onClick={handleDivvyClick}
        />
      </div>
      <div className='absolute top-36 right-1/4'>
        <DesktopIcon
          name={'Photos'}
          imageLink='/camera.png'
          onClick={handleCameraClick}
        />
      </div>

      <Window
        title='About Me'
        display={showAboutMe}
        onClose={handleAboutMeClick}
      >
        <div className='bg-white items-center justify-center p-16  flex-col'>
          <p>
            Hi, my name is Liam Connolly and I'm a Software Engineer based out
            of Chicago, IL!
          </p>
          <br />
          <p>
            This site is mostly just a spot for me to show off personal projects
            and other fun stuff I get to do.
          </p>
        </div>
      </Window>
    </main>
  );
}
