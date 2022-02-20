import { http } from "@/utils/http";

export interface BoardRequest {
    ratingFieldName: string;
    cursor: number;
    limit: number;
}

export interface NewBoardMemberRequest {
    data: any;
    ratingFieldName: string;
    teamName: string;
}

export interface BoardMemberData {
    data: {
        user: string;
        score21Uniq: number;
    }
}

export class BoardService {
    static getBoard(body: BoardRequest, cb: (d: BoardMemberData[]) => void): void {
        http
            .post<BoardMemberData[]>('/leaderboard/all', body)
            .then((res) => cb(res.data))
            .catch((err) => console.log(err))
    }

    static getTeamBoard(team: string, body: BoardRequest, cb: (d: BoardMemberData[]) => void): void {
        http
            .post<BoardMemberData[]>(`/leaderboard/${team}`, body)
            .then((res) => cb(res.data))
            .catch((err) => console.log(err))
    }

    static updateMemberData(body: NewBoardMemberRequest, cb: () => void): void {
        http
            .post('/leaderboard', body)
            .then(() => cb())
            .catch((err) => console.log(err))
    }
}
