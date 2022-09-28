import * as types from "./actionType";
const init = {
  signup: [],
  isAuth: false,
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
        signup: payload,
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

export default reducer;
