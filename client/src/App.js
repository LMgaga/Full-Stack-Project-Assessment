import "./App.css";
import AddVideo from './components/AddVideo'
import ShowVideo from './components/ShowVideo'

function App() {
 let displayVideo = "hideData"
  function showVideos() {
    displayVideo = ""
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Video Recommendation</h1>
      </header>
      <AddVideo></AddVideo>
      <ShowVideo displayVideo = {displayVideo} showVideos = {showVideos}></ShowVideo>

    </div>
  );
}

export default App;
