import { ForumService, IThread } from "@/services/ForumService";
import { Dispatch } from "redux";

type Nullable<T> = T | null;
type LoadStatus = "success" | "pending" | "failed";

type ThreadState = {
	item: Nullable<IThread[]>;
	status: LoadStatus;
};

interface BaseActionType<T> {
	type: T;
}

export interface ItemActionType extends BaseActionType<ACTIONS> {
	item: IThread[];
}

enum ACTIONS {
	Pending = "Pending",
	Success = "Success",
	Failed = "Failed",
	SetThreadItem = "SetThreadItem",
}

const defaultState: ThreadState = {
	item: null,
	status: "failed",
};

export function boardReducer(
	state: ThreadState = defaultState,
	{ type, item }: ItemActionType
): ThreadState {
	switch (type) {
		case ACTIONS.Pending:
			return {
				...state,
				status: "pending",
			};
		case ACTIONS.Success:
			return {
				...state,
				status: "success",
			};
		case ACTIONS.Failed:
			return {
				...state,
				status: "failed",
			};
		case ACTIONS.SetThreadItem:
			return {
				...state,
				item,
			};
		default:
			return state;
	}
}

export function loadSuccess(): BaseActionType<ACTIONS> {
	return { type: ACTIONS.Success };
}

export function loadFailed(): BaseActionType<ACTIONS> {
	return { type: ACTIONS.Failed };
}

export function loadPending(): BaseActionType<ACTIONS> {
	return { type: ACTIONS.Pending };
}

export function loadThreads(): (d: Dispatch) => void {
	return (dp: Dispatch): void => {
		ForumService.getThreads()
			.then((data) => {
				dp({ type: ACTIONS.SetThreadItem, item: data });
			})
			.catch((err) => console.log(err));
	};
}
