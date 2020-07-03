import React from "react";
import flv from "flv.js";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamView extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef(); // get reference of video element from html
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStream(id);
    this.buildPlayer();
  }
  componentDidUpdate() {
    this.buildPlayer();
  }
  componentWillUnmount() {
    this.player.destroy();
  }
  buildPlayer() {
    if (this.player || !this.props.stream) {
      return;
    } else {
      const { id } = this.props.match.params;
      //attach flv player to video element
      this.player = flv.createPlayer({
        type: "flv",
        url: `http://localhost:8000/live/${id}.flv`,
      });
      this.player.attachMediaElement(this.videoRef.current);
      this.player.load();
    }
  }
  render() {
    if (!this.props.stream) return <div>Loading.....</div>;
    const { titleOfStream, descriptionOfStream } = this.props.stream;
    return (
      <div>
        <video ref={this.videoRef} style={{ width: "100%" }} controls={true} />
        <h1>{titleOfStream}</h1>
        <h5>{descriptionOfStream}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProp) => {
  return {
    stream: state.streams[ownProp.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamView);
