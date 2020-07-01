import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions/index";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };
  render() {
    if (!this.props.stream) return <div> Loading....</div>;
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={{
            titleOfStream: this.props.stream.titleOfStream,
            descriptionOfStream: this.props.stream.descriptionOfStream,
          }} //redux-from will automatically maps initialValues prop to the Field names inside the form
          //or use _.pick from lodash for this
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  //ownProps is the props of the component and makes it accessible to mapState
  //in order to make this component work in isolation, fetching stream
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};
export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
