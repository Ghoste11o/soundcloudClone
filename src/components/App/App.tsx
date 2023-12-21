import { Header } from '../Header/Header';
import { AudioPlayer } from '../Playback/AudioPlayer';
import "./style/App.scss";
import { AppRouter } from '../../Router/AppRouter';

const App = () => {
  return (
    <div className="app">
      <Header />
      <AppRouter />
      <AudioPlayer
        url={"https://music.youtube.com/watch?v=O_BEFyNNIvM"}
        title={"I Got A Name"}
        author={"Jim Croce"}
        thumbnail={"/src/assets/albumImage.jpg"}
      />
    </div>
  );
};

export default App;