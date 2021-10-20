import { axiosWithoutAuth } from "../../../utils/axiosInstance";
import { ALL_AGENTS, TOP_AGENTS, SEARCH_AGENT, SINGLE_AGENT } from "../../types";

export const getAllAgents = () => async (dispatch) => {
  try {
    const res = await axiosWithoutAuth.get("/agents/index");
    console.log("agents", res.data.data);
    dispatch({
      type: ALL_AGENTS,
      payload: res.data.data,
    });
  } catch (error) {
    console.log("error", error);
  }
};

export const getTopAgents = () => async (dispatch) => {
  try {
    const res = await axiosWithoutAuth.get("/agents/top-rated");
    dispatch({
      type: TOP_AGENTS,
      payload: res.data.data,
    });
  } catch (error) {
    console.log("error", error);
  }
};

export const searchAgent =
  ({ data, lName }) =>
  async (dispatch) => {
    try {
      const res = await axiosWithoutAuth.get(`/agents/search?data=${data}&data=${lName}`);
      console.log("search agents", res.data.data);
      dispatch({
        type: SEARCH_AGENT,
        payload: res.data.data,
      });
      return res.data.data;
    } catch (error) {
      console.log("error", error);
      return error;
    }
  };

export const getSingleAgent =
  ({ id, name }) =>
  async (dispatch) => {
    try {
      const res = await axiosWithoutAuth.get(`/agents/${id}/${name}`);
      console.log("single agent", res.data.data);
      dispatch({
        type: SINGLE_AGENT,
        payload: res.data.data,
      });
      return res.data.data;
    } catch (error) {
      console.log("error", error);
      return error;
    }
  };
