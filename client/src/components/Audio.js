import React, { useEffect, useState } from "react";
import { PlayButton, PauseButton } from "./Icons.js";
import PlaySvg from "../static/play.svg";
import PauseSvg from "../static/pause.svg";

const Audiolist = ({ audioSrc }) => {
  const audio = new Audio("http://localhost:4000/" + audioSrc + ".mp3");
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  useEffect(() => {
    audio.onended = () => {
      setIsPlayingAudio(false);
    };
  }, []);

  const handlePauseButtonClick = () => {
    setIsPlayingAudio(false);
    audio.pause();
  };

  const handlePlayButtonClick = () => {
    setIsPlayingAudio(true);
    audio.play();
  };

  return (
    <div className="font-DMSans text-primary items-center justify-end flex relative left-0 top-0">
      {isPlayingAudio ? (
        <img src={PauseSvg} alt="play" onClick={handlePauseButtonClick} />
      ) : (
        <img src={PlaySvg} alt="play" onClick={handlePlayButtonClick} />
      )}
    </div>
  );
};

export default Audiolist;
