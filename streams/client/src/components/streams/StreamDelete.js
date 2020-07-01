import React from "react";
import Modal from "./Modal";
import history from "../../history";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";
import { Link } from "react-router-dom";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  onDelete(id) {
    this.props.deleteStream(id);
  }
  renderActions() {
    // does nothing to html just confirms to guideline to add containing element or <> and </>
    return (
      <React.Fragment>
        <Link className="ui button" to="/">
          Cancel
        </Link>
        <button
          className="ui button negative"
          onClick={() => this.onDelete(this.props.match.params.id)}
        >
          Delete
        </button>
      </React.Fragment>
    );
  }
  renderContent() {
    return !this.props.stream
      ? "Loading ....getting your stream"
      : `Are you sure you want to delete "${this.props.stream.titleOfStream}" stream?`;
  }
  render() {
    return (
      <Modal
        title="Delete a Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}
const mapStateToProps = (state, ownProp) => {
  return {
    stream: state.streams[ownProp.match.params.id],
  };
};
export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
