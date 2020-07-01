import { API } from "../apis/streams";
import {
  SIGN_OUT,
  SIGN_IN,
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  DELETE_STREAM,
} from "./types";
import history from "../history";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

//ALL CRUD OPERATION FOR STREAMS
export const createStream = (formValues) => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await API().post("/streams", { ...formValues, userId });
    dispatch({ type: CREATE_STREAM, payload: response.data });
    //programmtically navigate users to list all streams, on success with custom history object
    history.push("/");
  };
};

export const fetchStream = (id) => {
  return async (dispatch) => {
    const response = await API().get(`/streams/${id}`);
    dispatch({ type: FETCH_STREAM, payload: response.data });
  };
};

export const fetchStreams = () => {
  return async (dispatch) => {
    const response = await API().get("/streams");
    dispatch({ type: FETCH_STREAMS, payload: response.data });
  };
};

export const editStream = (id, formValues) => {
  return async (dispatch) => {
    const response = await API().patch(`/streams/${id}`, formValues);
    dispatch({ type: EDIT_STREAM, payload: response.data });
    history.push("/");
  };
};

export const deleteStream = (id) => {
  return async (dispatch) => {
    await API().delete(`/streams/${id}`);
    dispatch({ type: DELETE_STREAM, payload: id });
  };
};
