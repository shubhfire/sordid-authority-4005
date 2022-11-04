import {
  getLocalData,
  getNameFromLocal,
  saveLocalData,
  saveNameInLocal,
} from "../../Utils/localStorage";
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
    case types.USER_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.USER_LOGIN_SUCCESS:
      saveLocalData("login", payload);
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        login: payload,
      };

    case types.USER_LOGIN_FAILURE:
      saveLocalData("login", payload);

      return {
        ...state,
        isLoading: false,
        isAuth: false,
        login: "",
      };
    case types.USER_FULLNAME:
      saveNameInLocal("fullName", payload);
      return {
        ...state,
        isLoading: false,
        fullName: payload,
      };
    case types.USER_LOGOUT_SUCCESS:
      localStorage.removeItem("fullName");
      localStorage.removeItem("login");
      return {
        ...state,
        isAuth: false,
        login: "",
      };
    default:
      return state;
  }
};

export { reducer };
