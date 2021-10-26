import { ALL_ARTICLES, SINGLE_ARTICLE } from "../../types";
const initState = {
  error: null,
  articles: [],
  singleArticle: {},
  page: 1,
  prev: true,
  next: false,
  perPage: 10,
  status: "success",
};

export function articles(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case ALL_ARTICLES:
      return {
        ...state,
        articles: payload,
      };
    case SINGLE_ARTICLE:
      return {
        ...state,
        singleArticle: payload,
      };

    default: {
      return state;
    }
  }
}
