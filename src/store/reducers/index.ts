import { combineReducers } from "redux";
import { boardReducer } from "./board";
import { commentsReducer } from "./comments";
import { threadsReducer } from "./thread";
import { userReducer } from "./user";
import { themeReducer } from "./theme";

export default combineReducers({
	user: userReducer,
	board: boardReducer,
	theme: themeReducer,
	threads: threadsReducer,
	comments: commentsReducer,
});
