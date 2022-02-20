import { Store } from "redux";
import { UserData } from "@/services/AuthService";

export function selectUser(state: Store): UserData {
    return state.getState().user.item;
}
