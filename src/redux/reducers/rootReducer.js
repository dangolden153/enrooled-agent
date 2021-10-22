import { combineReducers } from "redux";
import auth from "./auth/auth";
import {getAgents} from "./agent";
import {getCities} from "./city";
const rootReducer = combineReducers({ auth: auth, getAgents:getAgents, getCities:getCities });

export default rootReducer;
