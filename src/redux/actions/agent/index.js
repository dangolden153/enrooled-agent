import { axiosWithoutAuth } from "../../../utils/axiosInstance";
import { ALL_AGENTS, TOP_AGENTS } from "../../types";

export const getAgents = () => async (dispatch) => {
  try {
    const res = await axiosWithoutAuth.get("/agents/index");
    dispatch({
      type: ALL_AGENTS,
      payload: res.data.data,
    });
  } catch (error) {
    console.log("error", error);
  }
};

export const getTopAgents = () => async (dispatch) => {
  console.log("here");
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
