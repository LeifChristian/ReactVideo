import React, { Component } from "react";

export class Button extends Component {
  constructor(props) {
    super(props);

    this.clix = this.clix.bind(this);

    this.restart = this.restart.bind(this);
    this.pause = this.pause.bind(this);

    // let video = document.getElementById("myVideo");
    // this.video = this.video.bind(this);
    this.state = { pauseState: true, classButton: "" };
  }

  componentDidMount() {}

  clix() {
    alert("Click happened");
  }

  restart() {
    document.getElementById("myVideo").currentTime = 0;
    this.state.pauseState === true
      ? (document.getElementById("myVideo").currentTime = 0)
      : this.pause();
  }

  pause() {
    this.setState({
      pauseState: !this.state.pauseState,
    });

    this.state.pauseState === false
      ? document.getElementById("myVideo").play()
      : document.getElementById("myVideo").pause();
  }

  render() {
    const buttonText = this.state.pauseState ? "Pause" : "Play";

    const buttonClass = !this.state.pauseState
      ? "btn btn-success"
      : "btn btn-info";

    const styles = {
      button: {
        margin: "2px",
      },

      logo: {
        height: "12px",
        display: this.state.pauseState ? "none" : "inherit",
      },
    };
    return (
      <div>
        {/* <button className="btn btn-danger" onClick={this.clix}>
          Button
        </button> */}

        <button
          style={styles.button}
          className={buttonClass}
          onClick={this.pause}
        >
          <img
            style={styles.logo}
            src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png"
            alt=""
          />
          {buttonText}
        </button>
        <button
          style={styles.button}
          className="btn btn-primary"
          onClick={this.restart}
        >
          Restart
        </button>
      </div>
    );
  }
}

export default Button;
