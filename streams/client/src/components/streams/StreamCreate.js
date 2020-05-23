import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput(formProps) {
    return <input {...formProps.input} />;
  }
  render() {
    return (
      <div>
        <form>
          <Field name="titleOfStream" component={this.renderInput} />
          <Field name="descriptionOfStream" component={this.renderInput} />
        </form>
      </div>
    );
  }
}

//The redux form function is just like connect from react redux but let the library do that for us
//Similar to mapStateToProps where all props are now preloaded from the library
export default reduxForm({
  form: "streamCreate",
})(StreamCreate);
