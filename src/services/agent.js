import axios from "../utils/axiosInstance";
import asyncHandler from "../utils/asyncHandler";

export const claimAgentAccount = asyncHandler(
  async (data) => await axios.post(`/claim-listing/create`, data),
);
export const searchAgent = asyncHandler(
  async ({data, lname}) => await axios.get(`/all-agents-search?data=${data}&lname=${lname}`),
);
