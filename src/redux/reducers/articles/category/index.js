import { GET_ALL_CATEGORIES } from "../../../types";
const initState = {
    error: null,
    categories:  [ ], 
    page: 1,
    prev: true,
    next: false,
    perPage: 10,
    status: "success",
  };

  export default function getAllCategories(state = initState, action) {
    switch (action.type) {
      case GET_ALL_CATEGORIES:
        return {
          ...state,
          categories: action.payload,
          // page: action.payload.data.page,
          // prev: action.payload.data.prev,
          // next: action.payload.data.next,
          // perPage: action.payload.data.perPage,
          // status: action.payload.status,
        };
      default:
        return state;
    }
  }