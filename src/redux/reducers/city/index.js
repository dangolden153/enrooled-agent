import { ALL_CITIES } from "../../types";

const initState = {
  error: null,
  cities: [],
  page: 1,
  prev: true,
  next: false,
  perPage: 10,
  status: "success",
};

export function getCities(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case ALL_CITIES:
      return {
        ...state,
        cities: payload,
      };

    default: {
      return state;
    }
  }
}
