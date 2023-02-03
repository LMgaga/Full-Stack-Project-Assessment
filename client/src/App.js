import "./App.css";
import AddVideo from './components/AddVideo'
import ShowVideo from './components/ShowVideo'
import { useState } from "react";

function App() {
  const [displayVideo, setDisplayVideo] = useState({
      showVideo: "hideData",
      videos: [
          "https://www.youtube.com/embed/dLIJ0L7KVwE"
         
      ]
  })
  function showVideos() {
     setDisplayVideo({...displayVideo, showVideo: ''})
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Video Recommendation</h1>
      </header>
      <AddVideo displayVideo = {displayVideo} showVideos = {showVideos}></AddVideo>
      <ShowVideo displayVideo = {displayVideo} key = "showVideo"></ShowVideo>

    </div>
  );
}

export default App;
