import { useRef, useState, useMemo, useEffect } from "react";
import { CiPlay1, CiPause1 } from "react-icons/ci";
import { VscMute, VscUnmute } from "react-icons/vsc";
import { ImLoop } from "react-icons/im";
import { Duration } from "./Duration";
import "./style/Playback.css";

interface IProps {
  playerRef: any,
  playing: boolean,
  loop: boolean,
  volume: number,
  muted: boolean,
  progress: number,
  duration: number,

  handlePlay: () => void,
  toggleMute: () => void,
  toggleLoop: () => void,
  handlePause: () => void,
  handleVolumeChange: (newVolume: number) => void,
};

export const PlayerControls = ({
  playerRef,
  playing,
  volume,
  muted,
  progress,
  duration,
  handlePlay,
  toggleLoop,
  handlePause,
  handleVolumeChange,
  toggleMute,
}: IProps) => {
  const [played, setPlayed] = useState<number>(0);
  const [seeking, setSeeking] = useState<boolean>(false);
  const playPauseButtonRef = useRef<HTMLButtonElement>(null);

  const togglePlayAndPause = () => {
    if (playing) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  useEffect(() => {
    playPauseButtonRef.current?.focus();
  }, []);

  const handleSeekMouseDown = (_el: any) => {
    setSeeking(true);
  };

  const handleSeekChange = (el: any) => {
    setPlayed(parseFloat(el.target.value));
  };

  const handleSeekMouseUp = (el: any) => {
    playerRef.current?.seekTo(parseFloat(el.target.value));
    setSeeking(false);
  };

  const handleChangeInVolume =  (el: React.ChangeEvent<HTMLInputElement>) => {
    handleVolumeChange(Number(el.target.value));
  };

  useMemo(() => {
    setPlayed((prevPlayed) => {
      if (!seeking && prevPlayed !== progress) {
        return progress;
      }
      return prevPlayed;
    });
  }, [progress, seeking]);

  return (
    <div className="playback__control">
      {/* play/pause */}
      <div>
        <button className="playback__btn"
          ref={playPauseButtonRef}
          onClick={togglePlayAndPause}
        >
          {playing ? <CiPause1 /> : <CiPlay1 />}
        </button>
      </div>
      {/* loop */}
      <div>
        <button className="playback__btn loop"
          onClick={toggleLoop}
        >
          <ImLoop />
        </button>
      </div>
      {/* time played */}
      <div className="playback__time-played">
        <Duration seconds={duration * played} />
      </div>
      {/* progress bar */}
      <div>
        <input className="playback__progress"
          type="range"
          min={0}
          max={0.999999}
          step="any"
          value={played}
          onMouseDown={handleSeekMouseDown}
          onChange={handleSeekChange}
          onMouseUp={handleSeekMouseUp}
        />
      </div>
      {/* time left */}
      <div className="playback__time-left">
        <Duration seconds={duration * (1 - played)} />
      </div>
      {/* volume */}
      <div>
        {/* mute */}
        <button className="playback__btn"
          onClick={toggleMute}
        >
          {muted ? <VscMute /> : <VscUnmute />}
        </button>
      </div>
      {/* volume bar */}
      <div>
        <input className="playback__volume"
          type="range"
          min={0}
          max={1}
          step={0.1}
          value={volume}
          onChange={handleChangeInVolume}
        />
      </div>
    </div>
  );
};