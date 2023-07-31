import { Header } from '../Header/Header';
import { AudioPlayer } from '../Playback/AudioPlayer';
import "./style/App.scss";
import { AppRouter } from '../AppRouter/AppRouter';
import { audio } from '../Tracklist/TracklistItem';
import { useSelector } from 'react-redux';
import { RootState } from '../Tracklist/redux/storeTrack';

const App = () => {
  const {} = useSelector((state: RootState) => state)

  return (
    <div className="app">
      <Header />
      <AppRouter />
      <AudioPlayer
        url={audio.url}
        title={audio.title}
        author={audio.author}
        thumbnail={audio.thumbnail}
      />
    </div>
  );
};

export default App;