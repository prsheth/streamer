import React from "react";
import Modal from "./Modal";

const StreamDelete = () => {
  const actions = (
    // does nothing to html just confirms to guideline to add containing element or <> and </>
    <React.Fragment>
      <button className="ui button">Cancel</button>
      <button className="ui button negative">Delete</button>
    </React.Fragment>
  );
  return (
    <div>
      <Modal
        title="Delete a Stream"
        content="Are you sure you want to delete this stream?"
        actions={actions}
      />
    </div>
  );
};

export default StreamDelete;
