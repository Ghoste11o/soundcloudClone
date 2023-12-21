import "./style/Playback.scss";
import ReactPlayer from "react-player";
import { useRef, useState } from "react";
import { AudioDetails } from "./AudioDetails";
import { PlayerControls } from "./PlayerControls";
import { Container, Toolbar } from "@mui/material";

type Props = {
  url: string,
  title: string,
  author: string,
  thumbnail: string,
};

export const AudioPlayer = ({ url, title, author, thumbnail }: Props) => {
  const playerRef = useRef<ReactPlayer | null>(null);

  const [playing, setPlaying] = useState<boolean>(false);
  const [muted, setMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);
  const [progress, setProgress] = useState<number>(0);
  const [loop, setLoop] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);

  const handlePlay = () => {
    setPlaying(true);
  };

  const handlePause = () => {
    setPlaying(false);
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
  };

  const toggleMute = () => {
    setMuted((prevMuted) => !prevMuted);
  };

  const handleProgress = (state: any) => {
    setProgress(state.played);
  };

  const handleDuration = (duration: number) => {
    setDuration(duration);
  };

  const toggleLoop = () => {
    setLoop((prevLoop) => !prevLoop);
  };

  return (
    <div className="playback__wrap">
      <Container>
        <Toolbar className="playback">
          <div className="playback__player">
            <ReactPlayer
              ref={playerRef}
              url={url}
              playing={playing}
              volume={volume}
              muted={muted}
              loop={loop}
              onPlay={handlePlay}
              onPause={handlePause}
              onProgress={handleProgress}
              onDuration={handleDuration}
            />
          </div>
          <div>
            <PlayerControls
              playerRef={playerRef}
              playing={playing}
              volume={volume}
              muted={muted}
              progress={progress}
              duration={duration}
              loop={loop}
              toggleMute={toggleMute}
              handlePlay={handlePlay}
              toggleLoop={toggleLoop}
              handlePause={handlePause}
              handleVolumeChange={handleVolumeChange}
            />
          </div>
          <div>
            <AudioDetails
              title={title}
              author={author}
              thumbnail={thumbnail} 
              id={0}            
            />
          </div>
        </Toolbar>
      </Container>
    </div>
  );
};