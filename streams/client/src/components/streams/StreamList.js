import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          <i className="large middle aligned icon camera"></i>
          <div className="content">
            <div className="header">{stream.titleOfStream}</div>
            <div className="description">{stream.descriptionOfStream}</div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui relaxed divided list">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { streams: Object.values(state.streams) };
};
export default connect(mapStateToProps, { fetchStreams })(StreamList);
