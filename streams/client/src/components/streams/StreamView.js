import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamView extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  render() {
    if (!this.props.stream) return <div>Loading.....</div>;
    const { titleOfStream, descriptionOfStream } = this.props.stream;
    return (
      <div>
        <h3>{titleOfStream}</h3>
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
