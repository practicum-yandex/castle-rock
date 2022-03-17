import { combineReducers } from "redux";
import { boardReducer } from "./board";
import { userReducer } from "./user";
import { themeReducer } from "./theme";

export default combineReducers({
	user: userReducer,
	board: boardReducer,
	theme: themeReducer,
});
