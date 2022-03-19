import { combineReducers } from "redux";
import { boardReducer } from "./board";
import { commentsReducer } from "./comments";
import { threadsReducer } from "./thread";
import { userReducer } from "./user";

export default combineReducers({
	user: userReducer,
	board: boardReducer,
	threads: threadsReducer,
	comments: commentsReducer
});
