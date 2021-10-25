import axios from "../utils/axiosInstance";
import asyncHandler from "../utils/asyncHandler";

export const contactFormRequest = asyncHandler(
  async (data) => await axios.post(`/contact/send`, data),
);
export const subscribeToMailingList = asyncHandler(
  async (data) => await axios.post(`/`, data),
);
export const getQuestions = asyncHandler(
  async () => await axios.get(`/questions/index`),
);
export const askQuestion = asyncHandler(
  async (data) => await axios.post(`/questions/create`, data),
);
export const getFaqs = asyncHandler(
  async () => await axios.get(`/faqs/index`),
);

