import axios from "../../../utils/axiosInstance";
import {
  LOAD_USER,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  AUTH_ERROR,
} from "../../types";

export const login = (email, password) => async (dispatch) => {
  const body = JSON.stringify({ email, password });
  try {
    console.log(body);
    const res = await axios.post(``);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};
