import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import { Link } from "react-router-dom";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  //helper
  renderAdminControls(stream) {
    if (this.props.currentUserId === stream.userId) {
      return (
        <div className="right floated content">
          <Link className="ui button primary" to={`/streams/edit/${stream.id}`}>
            Edit
          </Link>
          <Link
            className="ui button negative"
            to={`/streams/delete/${stream.id}`}
          >
            {" "}
            Delete
          </Link>
        </div>
      );
    }
  }
  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  }
  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdminControls(stream)}
          <i className="large middle aligned icon camera"></i>
          <div className="content">
            <div className="header">
              <Link to={`/streams/${stream.id}`}>{stream.titleOfStream}</Link>
            </div>
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
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};
export default connect(mapStateToProps, { fetchStreams })(StreamList);
