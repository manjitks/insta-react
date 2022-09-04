import { request } from "../../../component/common/Apiutil";
import { API_BASE_URL } from "../../../component/common/constants";
import {
  API_EXP,
  DO_LOGOUT,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  MODAL_OPEN,
  SINGNUP_FAIL,
  SINGNUP_SUCCESS,
} from "../../type";

export const register = (user) => async (dispatch) => {
  console.log(user);
  console.log(dispatch);

  return request({
    url: API_BASE_URL + "/auth/users",
    method: "POST",
    body: JSON.stringify(user),
  })
    .then((res) => {
      console.log(res);
      if (res == "NOT200") {
        return dispatch({
          type: SINGNUP_FAIL,
          date: res,
        });
      }
      return dispatch({
        type: SINGNUP_SUCCESS,
        data: res,
      });
    })
    .catch((e) => {
      return dispatch({
        type: API_EXP,
        date: e,
      });
    });
};

export const login = (user) => async (dispatch) => {
  console.log(user);
  console.log(dispatch);

  return request({
    url: API_BASE_URL + "/auth/signin",
    method: "POST",
    body: JSON.stringify(user),
  })
    .then((res) => {
      console.log(res);
      if (res == "NOT200") {
        return dispatch({
          type: LOGIN_FAIL,
          date: res,
        });
      }
      return dispatch({
        type: LOGIN_SUCCESS,
        data: res,
      });
    })
    .catch((e) => {
      return dispatch({
        type: API_EXP,
        date: e,
      });
    });
};

export const doLogout = () => {
  return {
    type: DO_LOGOUT,
  };
};
