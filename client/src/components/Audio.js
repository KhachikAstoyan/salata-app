import React, { useEffect, useState, useRef } from "react";
import PlaySvg from "../static/play.svg";
import PauseSvg from "../static/pause.svg";

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
      <audio ref={myRef} src={"http://localhost:4000/" + audioSrc + ".mp3"} />
      {audioStatus ? (
        <img src={PauseSvg} alt="play" onClick={pauseAudio} />
      ) : (
        <img src={PlaySvg} alt="play" onClick={startAudio} />
      )}
    </>
  );
};

export default Player;
