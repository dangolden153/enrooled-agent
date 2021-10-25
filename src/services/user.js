import axios from "../utils/axiosInstance";
import asyncHandler from "../utils/asyncHandler";

export const newListingRequest = asyncHandler(
  async (data) => await axios.post(`/listing-request/create`, data),
);
export const sendPasswordReset = asyncHandler(
  async (data) => await axios.post(`/auth/send-reset`, data),
);
export const resetPassword = asyncHandler(
  async (data) => await axios.post(`/auth/change-password`, data),
);
export const verifyAccount = asyncHandler(
  async (data,token) => await axios.post(`/verify-email/${token}`, data),
);
