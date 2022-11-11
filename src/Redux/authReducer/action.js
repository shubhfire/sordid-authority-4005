import axios from "axios";
import * as types from "./actionType";
const registerData = (payload) => (dispatch) => {
  dispatch({ type: types.USER_SIGNUP_REQUEST });
  return axios
    .post(`https://ashish-json-api.herokuapp.com/registerData`, payload)
    .then((r) => {
      dispatch({ type: types.USER_SIGNUP_SUCCESS, payload: r.data });
    })
    .catch((e) => {
      dispatch({ type: types.USER_SIGNUP_FAILURE });
    });
};

export { registerData };
