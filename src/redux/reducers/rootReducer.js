import { combineReducers } from "redux";
import auth from "./auth/auth";
import {getAgents} from "./agent";
import {getCities} from "./city";
import { createArticle } from "./articles/article";
import {getAllCategories} from "./articles/category";
const rootReducer = combineReducers({ auth: auth, getAgents:getAgents, getCities:getCities, createArticle:createArticle, categories:getAllCategories });

export default rootReducer;
