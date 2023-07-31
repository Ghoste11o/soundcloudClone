import { IAudio } from "../Playback/interface/Playback";
import { Playlist } from "./Tracklist";
import { ITracklistItem } from "./interface/Tracklist";
import "./style/Tracklist.scss";

export let audio: IAudio = {
  // url: "",
  // title: "",
  // author: "",
  // thumbnail: "",
  // id: 0,
  url: "https://music.youtube.com/watch?v=O_BEFyNNIvM",
  title: "I Got A Name",
  author: "Jim Croce",
  thumbnail: "/src/assets/albumImage.jpg",
  id: 1,
};

export const GetTrack = (el: any) => {
  const trackID: any = el.currentTarget.id;
  const track = Playlist.find(el => el.id == trackID);
  return (
    track
  )
}

export const TracklistItem = (props: ITracklistItem) => {
  return (
    <li id={props.id} className="tracklist__item" onClick={GetTrack}>
      <div className="tracklist__album">
        <img className="tracklist__album-img" src={props.thumbnail} />
      </div>
        <p className="tracklist__title">
          <span>{props.id}.</span>
          <span>{props.author} -</span> 
          <span>{props.title}</span>
        </p>
    </li>
  );
};