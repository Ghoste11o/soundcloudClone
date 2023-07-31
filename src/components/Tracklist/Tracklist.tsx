import { ITracklistProps, ITracklistItem } from "./interface/Tracklist";
import "./style/Tracklist.scss";
import { TracklistItem } from "./TracklistItem";

export const Playlist: Array<ITracklistItem> = [
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
];

export const Tracklist = (_props: ITracklistProps, _track: any) => {
  return (
      <ul className="tracklist">
        {Playlist.map(track => {
          return (
            <TracklistItem
              title={track.title}
              author={track.author}
              thumbnail={track.thumbnail}
              url={track.url}
              id={track.id}
            />
          )
        })}
      </ul>
  );
};