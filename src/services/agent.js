import axios from "../utils/axiosInstance";
import asyncHandler from "../utils/asyncHandler";

export const claimAgentAccount = asyncHandler(
  async (data) => await axios.post(`/claim-listing/create`, data),
);
