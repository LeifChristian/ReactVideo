import "./App.css";
import Button from "./button";
import Content from "./content";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div></div>

      <div className="video-overlay">
        Bug Buck Bunny - Trailer
        <br />
        <br />
        <br />
        <br />
        <div>
          With our mobile games you can buy great CNFTs and get BCG tokens with
          them.🎮📱
        </div>
        <Content></Content>
        <Content></Content>
        <Content></Content>
        <Button></Button>
      </div>

      <img
        className="video1-overlay"
        src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png"
        alt=""
      />
      <img
        className="video3-overlay"
        src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png"
        alt=""
      />

      <video
        className="fullscreen-video"
        id="myVideo"
        autoPlay="autoPlay"
        muted
        loop
      >
        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default App;
