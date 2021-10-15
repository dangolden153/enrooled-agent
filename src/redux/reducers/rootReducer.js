import { combineReducers } from "redux";
import auth from "./auth/auth";
import {getAgents} from "./agent";
const rootReducer = combineReducers({ auth: auth, getAgents:getAgents });

export default rootReducer;
