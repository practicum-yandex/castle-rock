import { UserData } from "@/services/AuthService";

type Nullable<T> = T | null;
type LoadStatus = 'success' | 'pending' | 'failed';

type UserState = {
    item: Nullable<UserData>;
    status: LoadStatus;
};

interface BaseActionType<T> {
    type: T;
}

export interface ItemActionType extends BaseActionType<ACTIONS> {
    item: UserData;
}

enum ACTIONS {
    Pending = 'Pending',
    Success = 'Success',
    Failed = 'Failed',
    SetUserItem = 'SetUserItem',
};

const defaultState: UserState = {
    item: null,
    status: 'failed',
};

export function userReducer(state: UserState = defaultState, { type, item }: ItemActionType): UserState {
    switch (type) {
        case ACTIONS.Pending:
            return {
                ...state,
                status: 'pending',
            };
        case ACTIONS.Success:
            return {
                ...state,
                status: 'success',
            };
        case ACTIONS.Failed:
            return {
                ...state,
                status: 'failed',
            };
        case ACTIONS.SetUserItem:
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

export function setUser(user: ItemActionType['item']): ItemActionType {
    return { type: ACTIONS.SetUserItem, item: user };
}
