import axios from "../utils/axiosInstance";
import asyncHandler from "../utils/asyncHandler";

export const contactFormRequest = asyncHandler(
  async (data) => await axios.post(`/`, data),
);
export const subscribeToMailingList = asyncHandler(
  async (data) => await axios.post(`/`, data),
);
export const callBackRequest = asyncHandler(
  async (data) => await axios.post(`/`, data),
);

