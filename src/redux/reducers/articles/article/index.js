import {CREATE_ARTICLE } from "../../../types";

const initState = {
  error: null,
  articles: [],
  page: 1,
  prev: true,
  next: false,
  perPage: 10,
  status: "success",
};

export function createArticle(state = initState, action) {
  switch (action.type) {
    case CREATE_ARTICLE:
      return {
        ...state,
        articles: action.payload.articles,
        page: action.payload.page,
        prev: action.payload.prev,
        next: action.payload.next,
        perPage: action.payload.perPage,
        status: action.payload.status,
        };
    default:
        return state;
    }
}