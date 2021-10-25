import { axiosInstance } from "../../../../utils/axiosInstance";
import {CREATE_ARTICLE } from "../../../types";


export const createArticle = (data) => async (dispatch) => {
  try {
    const res = await axiosInstance.post("/articles/create", data);
    console.log("res", res);
    dispatch({
      type: CREATE_ARTICLE,
      payload: res.data.data,
    });
  } catch (error) {
    console.log("error", error);
  }
}
