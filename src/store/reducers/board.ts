import { BoardMemberData } from "@/services/BoardService";

type Nullable<T> = T | null;
type LoadStatus = "success" | "pending" | "failed";

type BoardState = {
	item: Nullable<BoardMemberData[]>;
	status: LoadStatus;
};

interface BaseActionType<T> {
	type: T;
}

export interface ItemActionType extends BaseActionType<ACTIONS> {
	item: BoardMemberData[];
}

enum ACTIONS {
	Pending = "Pending",
	Success = "Success",
	Failed = "Failed",
	SetBoardItem = "SetBoardItem",
}

const defaultState: BoardState = {
	item: null,
	status: "failed",
};

export function boardReducer(
	state: BoardState = defaultState,
	{ type, item }: ItemActionType
): BoardState {
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
		case ACTIONS.SetBoardItem:
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

export function setBoard(board: ItemActionType["item"]): ItemActionType {
	return { type: ACTIONS.SetBoardItem, item: board };
}
