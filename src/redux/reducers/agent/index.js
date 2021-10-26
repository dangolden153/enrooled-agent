import { ALL_AGENTS, TOP_AGENTS, SEARCH_AGENT, CITY_AGENT, STATE_AGENT, SINGLE_AGENT } from "../../types";

const initState = {
  error: null,
  agents: [],
  topAgents: [],
  searchAgents: [],
  cityAgents: [],
  stateAgents: [],
  singleAgent: {},
  agent: {},
  page: 1,
  prev: true,
  next: false,
  perPage: 10,
  status: "success",
};

export function getAgents(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case ALL_AGENTS:
      return {
        ...state,
        agents: payload,
      };

    case TOP_AGENTS:
      return {
        ...state,
        topAgents: payload,
      };

    case SEARCH_AGENT:
      return {
        ...state,
        searchAgents: payload,
      };
    case CITY_AGENT:
      return {
        ...state,
        cityAgents: payload,
      };
    case STATE_AGENT:
      return {
        ...state,
        stateAgents: payload,
      };

    case SINGLE_AGENT:
      return {
        ...state,
        singleAgent: payload,
      };

    default: {
      return state;
    }
  }
}
export const selectAgents = (state) => state.getAgents.searchAgents;