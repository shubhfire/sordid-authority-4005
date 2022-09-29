import * as types from "./actionTypes";

const initialState = {
  donate: [],
  lendData: [],
  homeData: [],
  isLoading: false,
  isError: false,
};
export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_DONATE_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_DONATE_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        donate: payload,
        isError: false,
      };
    case types.GET_DONATE_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.GET_LEND_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_LEND_DATA_SUCCESS:
      return {
        ...state,
        lendData: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_LEND_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    ///
    case types.GET_HOME_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_HOME_DATA_SUCCESS:
      return {
        ...state,
        homeData: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_HOME_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
