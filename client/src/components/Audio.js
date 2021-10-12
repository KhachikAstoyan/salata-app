import React, { useEffect, useState, useRef } from "react";
import PlaySvg from "../static/play.svg";
import PauseSvg from "../static/pause.svg";

let wsHost = "";
if (process.env.NODE_ENV === "production") wsHost = window.location.origin;
else wsHost = "http://localhost:4000";

const Player = ({ audioSrc }) => {
  const [audioStatus, changeAudioStatus] = useState(false);
  const myRef = useRef();

  useEffect(() => {
    myRef.current.onended = () => {
      changeAudioStatus(false);
    };
  }, []);

  const startAudio = () => {
    myRef.current.play();

    changeAudioStatus(true);
  };

  const pauseAudio = () => {
    myRef.current.pause();
    changeAudioStatus(false);
  };

  return (
    <>
      <audio ref={myRef} src={`${wsHost}${audioSrc}.mp3`} />
      {audioStatus ? (
        <img src={PauseSvg} alt="play" onClick={pauseAudio} />
      ) : (
        <img src={PlaySvg} alt="play" onClick={startAudio} />
      )}
    </>
  );
};

export default Player;
