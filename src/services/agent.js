import axios from "../utils/axiosInstance";
import asyncHandler from "../utils/asyncHandler";

export const topRatedAgents = asyncHandler(
  async () => await axios.get(`/agents/top-rated`),
);

