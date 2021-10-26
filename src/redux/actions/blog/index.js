import { axiosWithoutAuth } from "../../../utils/axiosInstance";
import { ALL_ARTICLES, SINGLE_ARTICLE } from "../../types";

export const getAllArticles = () => async (dispatch) => {
  try {
    const res = await axiosWithoutAuth.get("/articles/index");
    console.log("articles", res.data.data);
    dispatch({
      type: ALL_ARTICLES,
      payload: res.data.data,
    });
  } catch (error) {
    console.log("error", error);
  }
};

export const getSingleArticle =
  ({ id, slug }) =>
  async (dispatch) => {
    try {
      const res = await axiosWithoutAuth.get(`/articles/${id}/${slug}`);
      console.log("single article", res.data.data);
      dispatch({
        type: SINGLE_ARTICLE,
        payload: res.data.data.[0],
      });
      return res.data.data.[0];
    } catch (error) {
      console.log("error", error);
      return error;
    }
  };
