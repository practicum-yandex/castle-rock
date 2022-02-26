import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

export default function configureStore(initialState = {}): any {
	const store = createStore(reducers, initialState, applyMiddleware(thunk));

	return store as any;
}
