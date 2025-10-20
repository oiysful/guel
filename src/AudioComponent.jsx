import audioFile from './assets/wedding.weba'
import audioIcon from './assets/audio-icon.png'
import {useEffect, useRef, useState} from "react";

const AudioComponent = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const audioRef = useRef(null);
    const handleAudioToggle = () => {
        if (!audioRef.current) {
            audioRef.current = new Audio(audioFile);
            audioRef.current.load()
            audioRef.current.addEventListener('ended', () => setIsPlaying(false));
        }
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };
    useEffect(() => {
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        }
    }, [])
    return (
        <>
            <img
                src={audioIcon}
                width={"20px"}
                style={{marginRight: "10px", marginTop: "10px"}}
                onClick={() => handleAudioToggle()}
            />
        </>
    )
}

export default AudioComponent