import axios from "axios";
//import { NotificationManager } from 'react-notifications';
import { API_URL } from "../../config";
import { getSession } from "next-auth/client";

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosWithoutAuth = axios.create({
  baseURL: API_URL,
  headers: {
    "content-Type": "application/json",
  },
});

// Set the AUTH token for any request
axiosInstance.interceptors.request.use(
  async (request) => {
    const session = await getSession();
    console.log("session", session);
    if (!session) {
      if (typeof window !== "undefined") {
        // browser code
        window.location.replace(`${window.location.origin}/`);
      }
    }

    request.headers["Authorization"] = `Bearer ${session?.accessToken}`;

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Shows error message on 401 and deletes tokem from local storage
// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   function (error) {
//     const originalRequest = error.config;

//     if (
//       error.status === undefined ||
//       (error.response.status === 401 && !originalRequest._retry)
//     ) {
//       if (error_message_defined) return axios(originalRequest);
//       //NotificationManager.error(`${error?.response?.data?.error?.message ??  'An error occured, please try again later.'}`,'Error!', 2000);
//       error_message_defined = true;

//       //refresh token and redirect user to auth page
//       deleteToken();
//     }

//     return axios(originalRequest);
//   }
// );

// return axiosInstance;

export default axiosInstance;
