import {
ALL_AGENTS
} from "../../types";

const initState = {
    error: null,
    agents:  [], 
    agent : {},
    page: 1,
    prev: true,
    next: false,
    perPage: 10,
    status: "success"
}; 

export function getAgents(state = initState, action){
    const {type, payload} = action;
    switch (type) {
        case ALL_AGENTS :
            return{
            ...state, 
            agents: payload,     
        }

        default : {
            return state
        }
    }
}
