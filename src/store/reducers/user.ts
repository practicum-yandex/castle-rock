type Nullable<T> = T | null;
type LoadStatus = 'success' | 'pending' | 'failed';

// Пока временно
interface User {
    [key: string]: any
}

type UserState = {
    item: Nullable<User>;
    status: LoadStatus;
};

interface BaseActionType<T> {
    type: T;
}

interface ItemActionType extends BaseActionType<ACTIONS> {
    item: User;
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
