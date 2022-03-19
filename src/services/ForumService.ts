import { api } from "@/utils/http";

interface IThread {
	id: number;
	title: string;
	content: string;
}

interface IComment {
	id: number;
	title: string;
	content: string;
	thread_id: number;
}


export class ForumService {
	static getThreads(): Promise<IThread[]> {
		return api
			.get<IThread[]>("/thread")
			.then((res) => res.data);
	}

	static findThread(id: number): Promise<IThread> {
		return api
			.get<IThread>(`/thread?id=${id}`)
			.then((res) => res.data);
	}

	static createThread(body: IThread): Promise<IThread> {
		return api
			.post<IThread>('/thread', body)
			.then((res) => res.data);
	}

	static updateThread(id: number, body: IThread): Promise<string> {
		return api
			.put(`/thread?id=${id}`, body)
			.then((res) => res.data);
	}

	static deleteThread(id: number): Promise<string> {
		return api
			.delete(`/thread?id=${id}`)
			.then((res) => res.data);
	}

	static findComments(threadID: number): Promise<IComment[]> {
		return api
			.get<IComment[]>(`/comment?thread_id=${threadID}`)
			.then((res) => res.data);
	}

	static createComment(body: IComment): Promise<IComment> {
		return api
			.post<IComment>(`/comment`, body)
			.then((res) => res.data);
	}

	static deleteComment(id: number): Promise<string> {
		return api
			.delete(`/comment?id=${id}`)
			.then((res) => res.data);
	}
}
