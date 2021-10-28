import { axiosWithoutAuth } from "../../../utils/axiosInstance";
import { ALL_AGENTS, TOP_AGENTS, SEARCH_AGENT, CITY_AGENT, STATE_AGENT, SINGLE_AGENT } from "../../types";

export const getAllAgents = () => async (dispatch) => {
  try {
    const res = await axiosWithoutAuth.get("/agents/index");
    console.log("agents", res.data.data.data);
    dispatch({
      type: ALL_AGENTS,
      payload: res.data.data.data,
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
  ({ data, lname }) =>
  async (dispatch) => {
    try {
      const res = await axiosWithoutAuth.get(`/all-agents-search?data=${data}&lname=${lname}`);
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
export const cityAgent =
  ({ city, lName }) =>
  async (dispatch) => {
    try {
      const res = await axiosWithoutAuth.get(`/agent/${city}`);
      console.log("city agents", res.data.data);
      dispatch({
        type: CITY_AGENT,
        payload: res.data.data.data,
      });
      return res.data.data.data;
    } catch (error) {
      console.log("error", error);
      return error;
    }
  };
export const stateAgent =
  ({ state }) =>
  async (dispatch) => {
    try {
      const res = await axiosWithoutAuth.get(`/agents/${state}`);
      console.log("city agents", res.data.data);
      dispatch({
        type: STATE_AGENT,
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
