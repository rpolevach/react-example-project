import { combineReducers } from 'redux';

import users from "./users";
import cards from "./cards";

const rootReducer = combineReducers({ users, cards });

export default rootReducer;