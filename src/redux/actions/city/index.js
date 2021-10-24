import { axiosWithoutAuth } from "../../../utils/axiosInstance";
import { ALL_CITIES } from "../../types";

export const getAllCities = () => async (dispatch) => {
  try {
    const res = await axiosWithoutAuth.get("/cities");
    console.log("cities", res.data.data);
    dispatch({
      type: ALL_CITIES,
      payload: res.data.data,
    });
  } catch (error) {
    console.log("error", error);
  }
};

