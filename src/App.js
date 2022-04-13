import "./App.css";
import Button from "./button";
import Content from "./content";
import React, { useState, useRef } from 'react'

function App() {

  const [toggle, setToggle] = useState(true)
  const [isShow, setIsShow] = useState(true);

  return (
    <div className="App">

      { isShow ?
        <button id="assbtn" className="btn btn-success" onClick={() => setIsShow(!isShow)}>Hide</button> :   
        <button  id="assbtn" className="btn btn-success" onClick={() => setIsShow(!isShow)}>Show</button>}

      <header className="App-header"></header>
      <div></div>

      { isShow ? 

      <div className="video-overlay">
       <h2> Bug Buck Bunny - Trailer</h2>
        <br />

        <div id='text'>
          With our mobile games you can buy great CNFTs and get BCG tokens with
          them.🎮📱
        </div>
        <Content></Content>
        <Content></Content>
        <Content></Content>
        <Button></Button>


        {toggle ? <button className="btn btn-success" onClick={() => setToggle(!toggle)}>Audio On</button> :

                  <button className="btn btn-secondary" onClick={() => setToggle(!toggle)}>Audio Off</button> 
    }
      </div> : ''}


      {/* { <button onClick={() => {alert("anus")}}>Hide</button> } */}

      { isShow ? <>

      <img
        className="video1-overlay"
        src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png"
        alt=""
      />
      <img
        className="video3-overlay"
        src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png"
        alt=""
      /> </> : ''}


      <video
        className="fullscreen-video"
        id="myVideo"
        autoPlay="autoPlay"
        loop
        muted={toggle}
      >
        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" />
        Your browser does not support the video tag.
      </video>
      
    </div>
  );
}

export default App;
