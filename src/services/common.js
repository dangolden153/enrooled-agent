import axios from "../utils/axiosInstance";
import asyncHandler from "../utils/asyncHandler";

export const contactFormRequest = asyncHandler(
  async (data) => await axios.post(`/contact/send`, data),
);
export const subscribeToMailingList = asyncHandler(
  async (data) => await axios.post(`/`, data),
);

