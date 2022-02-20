import { Store } from "redux";
import { BoardMemberData } from "@/services/BoardService";

export function selectBoardList(state: Store): BoardMemberData[] {
    return state.getState().board.item || [];
}
