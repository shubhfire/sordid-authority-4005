import {
  getLocalData,
  getNameFromLocal,
  saveLocalData,
  saveNameInLocal,
} from "../utils/localStorage";
import * as types from "./actionType";
const init = {
  signupData: [],
  isAuth: getLocalData("login") ? true : false,
  login: getLocalData("login") || [],
  fullName: getNameFromLocal("fullName") || [],
  isLoading: false,
  isError: false,
};

const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case types.USER_SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case types.USER_SIGNUP_SUCCESS:
      saveLocalData("login", payload);
      return {
        ...state,
        isLoading: false,
        signupData: payload,
        isError: false,
      };
    case types.USER_SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.USER_FULLNAME:
      saveNameInLocal("fullName", payload);
      return {
        isLoading: false,
        ...state,
        fullName: payload,
      };
    default:
      return state;
  }
};

export { reducer };
