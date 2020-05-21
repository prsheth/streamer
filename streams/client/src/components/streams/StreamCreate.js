import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <form>
          <Field name="titleOfStream" />
          <Field name="descriptionOfStream" />
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
