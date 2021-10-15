import axios from "../../../utils/axiosInstance";
import { ALL_AGENTS } from "../../types";

export const getAgents = () => async (dispatch) => {
  try {
    const res = await axios.get("/agents/index");
    dispatch({
      type: ALL_AGENTS,
      payload: res.data.data,
    });
    console.log("Agent data",res.data.data);
  } catch (error) {
    console.log("error", error);
  }
};
