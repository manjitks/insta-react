import {
  DO_LOGOUT,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  SINGNUP_FAIL,
  SINGNUP_SUCCESS,
} from "../../type";

const initialState = {
  Authenticated: false,
  accessToken: "",
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      //   localStorage.setItem(ACCESS_TOKEN, "Bearer " + action.data.accessToken);
      //   localStorage.setItem(USER, action.data.user);
      //   localStorage.setItem(IS_AUTHENTICTED, true);
      return {
        ...state,
        Authenticated: true,
        accessToken: "Bearer " + action.data.accessToken,
        user: action.data.user,
      };

    case LOGIN_FAIL:
      //   localStorage.removeItem(ACCESS_TOKEN); //not require as using redux persist
      //   localStorage.removeItem(USER);
      //   localStorage.removeItem(IS_AUTHENTICTED);
      return {
        ...state,
        Authenticated: false,
        accessToken: "",
        user: null,
      };
    case DO_LOGOUT:
      return {
        ...state,
        Authenticated: false,
        accessToken: "",
        user: null,
      };
    case SINGNUP_SUCCESS:
      return {
        ...state,
        signUpstatus: true,
      };

    case SINGNUP_FAIL:
      return {
        ...state,
        signUpstatus: false,
      };

    default:
      return state;
  }
};

export default authReducer;
