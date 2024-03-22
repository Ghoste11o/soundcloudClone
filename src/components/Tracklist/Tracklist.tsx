import "./style/Tracklist.css";
import { useDispatch } from 'react-redux';
import { selectTrack } from '../../Redux/playerSlice';
import diskImg from "../../assets/disk.svg";

export interface ITracklistState {
  list: ITrack[];
  currentTrack: ITrack | null;
};

export interface ITrack {
  url: string,
  title: string,
  author: string,
  thumbnail: string,
  id: number,
};

export const Playlist: Array<ITrack> = [
  {
    url: "https://music.youtube.com/watch?v=O_BEFyNNIvM",
    title: "I Got A Name",
    author: "Jim Croce",
    thumbnail: "/src/assets/albumImage.jpg",
    id: 1,
  },
  {
    url: "https://music.youtube.com/watch?v=q10MSqescAU",
    title: "Stranglehold",
    author: "Ted Nugent",
    thumbnail: "/src/assets/albumImage2.jpg",
    id: 2,
  },
  {
    url: "https://music.youtube.com/watch?v=JLUvjU3LSjU",
    title: "Let It Ride",
    author: "Bachman-Turner Overdrive",
    thumbnail: "/src/assets/albumImage3.jpg",
    id: 3,
  },
  {
    url: "https://music.youtube.com/watch?v=lYBUbBu4W08",
    title: "Never Gonna Give You Up",
    author: "Rick Astley",
    thumbnail: "",
    id: 4,
  },
];

const Tracklist = () => {
  const dispatch = useDispatch();

  const handleTrackClick = (track: ITrack) => dispatch(selectTrack(track));

  return (
    <ul className="tracklist">
      {Playlist.map(track => {
        return (
          <li key={track.id} value={track.id} className="tracklist__item" onClick={() => handleTrackClick(track)}>
            <div className="tracklist__album">
              {track.thumbnail ? (
                  <img className="tracklist__album-img" src={track.thumbnail} />
                ) : (
                  <img className="tracklist__album-img" src={diskImg} />
              )}
            </div>
            <p className="tracklist__title">
              <span>{track.id}. </span>
              <span>{track.author} - </span>
              <span>{track.title}</span>
            </p>
          </li>
        )
      })}
    </ul>
  );
};

export default Tracklist;
