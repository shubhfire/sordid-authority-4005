import { getLocalData, getNameFromLocal, saveLocalData } from "../utils/localStorage";
import * as types from "./actionType";
const init = {
  signupData: [],
  isAuth: getLocalData("login")? true:false,
  login:getLocalData("login") ||[],
  fullName:getNameFromLocal("fullName")||[],
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
      saveLocalData("login",payload.fullName)
      getNameFromLocal("fullName",payload.fullName)
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
    default:
      return state;
  }
};

export {reducer};
