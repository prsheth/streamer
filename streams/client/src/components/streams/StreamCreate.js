import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions";

class StreamCreate extends React.Component {
  renderInput = ({ input, label, meta }) => {
    //touched is equivalent to onfocus
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        <div>{this.renderError(meta)}</div>
      </div>
    );
  };
  renderError = ({ touched, error }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
    //MAKE CALL TO SERVER
  };
  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)} //prop from redux forms and then pass callback method to it
          className="ui form error"
        >
          <Field
            name="titleOfStream"
            component={this.renderInput}
            label="Enter title"
          />
          <Field
            name="descriptionOfStream"
            component={this.renderInput}
            label="Enter description"
          />
          <button className="ui button primary"> Submit </button>
        </form>
      </div>
    );
  }
}
//Validate method
const validate = (formValues) => {
  const errors = {};
  if (!formValues.titleOfStream) {
    //redux form expects an object with key and value pair to show validation values, an empty object means no error
    errors.titleOfStream = "Please enter a valid title";
  }
  if (!formValues.descriptionOfStream) {
    errors.descriptionOfStream = "Please enter a valid description";
  }
  return errors;
};

//The redux form function is just like connect from react redux but let the library do that for us
//Similar to mapStateToProps where all props are now preloaded from the library
const formWrapped = reduxForm({
  form: "streamCreate",
  validate,
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
