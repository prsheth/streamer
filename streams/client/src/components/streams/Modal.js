//using React portals for this modal

import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={(e) => e.stopPropagation()} //make sure the above event deosn't get propogated to all children
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
    //PORTAL is used so that is component can be ported to another location breaking from the nested compoenent herirarchy of React
    // this div is a sibling to root and a child of body
  );
};

export default Modal;
