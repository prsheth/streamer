import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions/index";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  render() {
    if (!this.props.stream) return <div> Loading....</div>;
    return <div>StreamEdit{this.props.stream.titleOfStream}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  //ownProps is the props of the component and makes it accessible to mapState
  //in order to make this component work in isolation, fetching stream
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};
export default connect(mapStateToProps, { fetchStream })(StreamEdit);
