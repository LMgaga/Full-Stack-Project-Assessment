import "./App.css";
import AddVideo from './components/AddVideo'
import ShowVideo from './components/ShowVideo'
import { useState } from "react";

function App() {
  const [displayVideo, setDisplayVideo] = useState({
      showVideo: "hideData",
      videos: [
          {
              id: 0,
              title: 'default',
              url: "https://www.youtube.com/embed/dLIJ0L7KVwE",
              "rating": 0
          }
      ]
  })
  function removeVideo(videoId){
        let filtered = this.displayVideo.videos.filter(x => x.id != videoId);
        setDisplayVideo({...displayVideo, videos: filtered})
  }
  function updateLikes(videoId, option){
      this.displayVideo.videos.forEach(x => {
          if(x.id == videoId && option == '+'){
              x.rating = x.rating + 1
          }else{
              x.rating = x.rating - 1
          }
          
      });
      setDisplayVideo({...displayVideo})
  }
  function showVideos() {
     setDisplayVideo({...displayVideo, showVideo: ''})
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Video Recommendation</h1>
      </header>
      <AddVideo displayVideo = {displayVideo} showVideos = {showVideos}></AddVideo>
      <ShowVideo displayVideo = {displayVideo} key = "showVideo" removeVideo = {removeVideo} updateLikes = {updateLikes}></ShowVideo>

    </div>
  );
}

export default App;
