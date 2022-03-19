import { ForumService, IComment } from "@/services/ForumService";
import { Dispatch } from "redux";

type Nullable<T> = T | null;
type LoadStatus = "success" | "pending" | "failed";

type CommentState = {
	item: Nullable<IComment[]>;
	status: LoadStatus;
};

interface BaseActionType<T> {
	type: T;
}

export interface ItemActionType extends BaseActionType<ACTIONS> {
	item: IComment[];
}

enum ACTIONS {
	Pending = "Pending",
	Success = "Success",
	Failed = "Failed",
	SetCommentItem = "SetCommentItem",
}

const defaultState: CommentState = {
	item: null,
	status: "failed",
};

export function commentsReducer(
	state: CommentState = defaultState,
	{ type, item }: ItemActionType
): CommentState {
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
		case ACTIONS.SetCommentItem:
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

export function loadComments(): (d: Dispatch) => void {
	return (dp: Dispatch): void => {
		ForumService.getComments()
			.then((data) => {
				dp({ type: ACTIONS.SetCommentItem, item: data });
			})
			.catch((err) => console.log(err));
	};
}
