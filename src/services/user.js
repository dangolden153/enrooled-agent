import axios from "../utils/axiosInstance";
import asyncHandler from "../utils/asyncHandler";

export const newListingRequest = asyncHandler(
  async (data) => await axios.post(`/listing-request/create`, data),
);
