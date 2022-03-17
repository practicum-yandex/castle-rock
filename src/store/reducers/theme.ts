import { ThemeData } from "@/services/ThemeService";

type Nullable<T> = T | null;
type LoadStatus = "success" | "pending" | "failed";

type ThemeState = {
	item: Nullable<ThemeData>;
	status: LoadStatus;
};

interface BaseActionType<T> {
	type: T;
}

export interface ItemActionType extends BaseActionType<ACTIONS> {
	item: ThemeData;
}

enum ACTIONS {
	Pending = "Pending",
	Success = "Success",
	Failed = "Failed",
	SetThemeItem = "SetThemeItem",
}

const defaultState: ThemeState = {
	item: null,
	status: "failed",
};

export function themeReducer(
	state: ThemeState = defaultState,
	{ type, item }: ItemActionType
): ThemeState {
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
		case ACTIONS.SetThemeItem:
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

export function setTheme(theme: ItemActionType["item"]): ItemActionType {
	return { type: ACTIONS.SetThemeItem, item: theme };
}
