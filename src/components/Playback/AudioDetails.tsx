type Props = {
  title: string,
  author: string,
  thumbnail: string,
  id: number,
};

export const AudioDetails = ({ title, author, thumbnail }: Props) => {
  return (
    <div className="playback__details">
      <div className="playback__album-wrap">
        <img className="playback__album-img" src={thumbnail} />
      </div>
      <p className="playback__info">
        <span className="playback__author">{author}</span>
        <span className="playback__title">{title}</span>
      </p>
    </div>
  );
};