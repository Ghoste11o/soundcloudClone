import "./style/App.css";
import { Header } from '../Header/Header';
import { AudioPlayer } from '../Playback/AudioPlayer';
import { AppRouter } from '../../Router/AppRouter';
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

const App = () => {
  const selectedTrack = useSelector((state: RootState) => state.player.selectedTrack);
  
  return (
    <div className="app">
      <Header />
      <AppRouter />
      {selectedTrack ? (
          <AudioPlayer
            url={selectedTrack.url}
            title={selectedTrack.title}
            author={selectedTrack.author}
            thumbnail={selectedTrack.thumbnail}
            id={selectedTrack.id}
          />
        ) : (
        <AudioPlayer 
          url={""} 
          title={""} 
          author={""} 
          thumbnail={""} 
          id={0}
        />)
      };
    </div>
  );
};

export default App;