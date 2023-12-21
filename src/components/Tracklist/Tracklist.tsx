import "./style/Tracklist.scss";

const Playlist = [
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

export const Tracklist = () => {
  return (
    <ul className="tracklist">
      {Playlist.map(track => {
        return (
          <li className="tracklist__item">
            <div className="tracklist__album">
              <img className="tracklist__album-img" src={track.thumbnail} />
            </div>
            <p className="tracklist__title">
              <span>{track.id}.</span>
              <span>{track.author} -</span>
              <span>{track.title}</span>
            </p>
          </li>
        )
      })}
    </ul>
  );
};