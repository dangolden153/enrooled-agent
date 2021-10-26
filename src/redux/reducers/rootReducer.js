import { combineReducers } from "redux";
import auth from "./auth/auth";
import {getAgents} from "./agent";
import {getCities} from "./city";
import {articles} from "./blog";
// import { createArticle } from "./articles/article";
// import {getAllCategories} from "./articles/category";
const rootReducer = combineReducers({ auth: auth, getAgents:getAgents, getCities:getCities, articles:articles });

export default rootReducer;
