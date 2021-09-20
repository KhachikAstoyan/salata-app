import React, { useEffect, useState } from "react";
import { Dropdown } from "./Button";
import { ChevronLeft } from "./Icons.js";
import { RewindButton } from "./Icons.js";
import { ForwardButton } from "./Icons.js";
import { PlayButton, PauseButton } from "./Icons.js";
import audioSrc from '../Loco Ringtone _ VIRAL BGM.mp3'

const audio = new Audio(audioSrc);


const Audiolist= () => {
    const [showContent, updateContent] = useState(false);
    const [isPlayingAudio, setIsPlayingAudio] = useState(false);

    useEffect(() => {
        audio.onended = () => {
            setIsPlayingAudio(false)
        }
    }, [])

    const handlePauseButtonClick = () => {
        setIsPlayingAudio(false);

        audio.pause()

    }

    const handlePlayButtonClick = () => {
        setIsPlayingAudio(true)

        audio.play()

    }

    return (
        <main className="container max-w-5xl mx-auto ">
            <div className=" grid-cols-3 items-center flex ">
                <RewindButton />
                {isPlayingAudio ? <PauseButton onClick={handlePauseButtonClick} /> : <PlayButton onClick={handlePlayButtonClick} />}
                <ForwardButton />
            </div>
        </main>
    );
};

export default Audiolist;

