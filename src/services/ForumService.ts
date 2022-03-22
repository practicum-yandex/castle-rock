import { api } from "@/utils/http";

export interface IThreadBody {
	title: string;
	content: string;
	user_name: string;
}

export interface ICommentBody {
	content: string;
	thread_id: number;
	user_name: string;
}

export interface IThread extends IThreadBody {
	id: number;
	createdAt: Date;
	updatedAt: Date;
}

export interface IComment extends ICommentBody {
	id: number;
	createdAt: Date;
	updatedAt: Date;
}

export class ForumService {
	static getThreads(): Promise<IThread[]> {
		return api.get<IThread[]>("/api/thread").then((res) => res.data);
	}

	static findThread(id: number): Promise<IThread> {
		return api.get<IThread>(`/api/thread?id=${id}`).then((res) => res.data);
	}

	static createThread(body: IThreadBody): Promise<IThread> {
		return api.post<IThread>("/api/thread", body).then((res) => res.data);
	}

	static updateThread(id: number, body: IThread): Promise<string> {
		return api.put(`/api/thread?id=${id}`, body).then((res) => res.data);
	}

	static deleteThread(id: number): Promise<string> {
		return api.delete(`/api/thread?id=${id}`).then((res) => res.data);
	}

	static getComments(): Promise<IComment[]> {
		return api.get<IComment[]>(`/api/comment`).then((res) => res.data);
	}

	static createComment(body: ICommentBody): Promise<IComment> {
		return api.post<IComment>(`/api/comment`, body).then((res) => res.data);
	}

	static deleteComment(id: number): Promise<string> {
		return api.delete(`/api/comment?id=${id}`).then((res) => res.data);
	}
}
