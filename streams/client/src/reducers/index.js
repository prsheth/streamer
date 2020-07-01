import { combineReducers } from "redux";
import authReducer from "./authReducer";
import streamReducer from "./streamReducer";
import { reducer as formReducer } from "redux-form"; //named import for simplicity and reducing confusion

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer,
});
