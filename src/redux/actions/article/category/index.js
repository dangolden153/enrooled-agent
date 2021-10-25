import { axiosWithoutAuth } from "../../../../utils/axiosInstance";
import {GET_ALL_CATEGORIES } from "../../../types";


export const getAllCategories = () => async (dispatch) => {
    try {
        const res = await axiosWithoutAuth.get("/articles-categories/index");
        dispatch({
            type: GET_ALL_CATEGORIES,
            payload: res.data.data,
        });
        console.log("data",res.data.data);
    } catch (error) {
        console.log("error", error);
    }
}