import { LOAD_USER, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, AUTH_ERROR } from "../../types";
const initialState = {
  //token: window.localStorage.getItem("token") ? window.localStorage.getItem("token") : null,
  token: null,
  loading: true,
  isAuthenticated: false,
  user: null,
};
export default function login(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {

    case LOGIN_SUCCESS:
    case LOAD_USER:
      console.log("herere!!", payload.data);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
        user: payload.data,
        token: payload.data.access_token,
      };
    case LOGIN_FAIL:
    case LOGOUT:
    case AUTH_ERROR:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: true,
      };
    default:
      return state;
  }
}
