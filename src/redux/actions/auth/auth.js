import { axiosWithoutAuth } from "../../../utils/axiosInstance";
import { LOAD_USER, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, AUTH_ERROR } from "../../types";

export const login = (email, password) => async (dispatch) => {
  const body = JSON.stringify({ email, password });
  try {
    const res = await axiosWithoutAuth.post(`/auth/login`, body);
    if (res.status === 200) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      return res.data;
    }
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
    return err;
  }
};

export const register = async (body) => {
  try {
    const res = await axiosWithoutAuth.post(`/auth/register`, body);
    if (res.status === 200) return res.data;
  } catch (err) {
    return err;
  }
};
