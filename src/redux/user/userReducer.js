import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "./userType";

const initialState = {
  loding: false,
  users: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        users: action.payload,
        error: "",
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
