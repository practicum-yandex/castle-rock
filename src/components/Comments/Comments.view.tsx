import React, { MouseEventHandler } from "react";
import { Component } from "@/utils/components";

import {
	Textarea,
	CommentForm,
	Button,
	CommentsSection,
	Section,
	Comment,
	Headline,
	CommentDate,
	Text,
	NotComment,
	Title,
} from "./Comments.styles";
import { IComment } from "@/services/ForumService";
import { useParams } from "react-router-dom";

type Props = {
	comments: IComment[];
	sendComment: MouseEventHandler<HTMLFormElement>;
};

const getcomments = (threadID: number, comments: IComment[]): any => {
	if (Array.isArray(comments) && !isNaN(threadID)) {
		return comments
			.filter((comment) => comment.thread_id === threadID)
			.sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1))
			.map((comment) => (
				<Comment key={comment.id}>
					<Headline>
						<Title level={3}>{comment.user_name}</Title>
						<CommentDate>
							{new Date(comment.createdAt).toDateString()}
						</CommentDate>
					</Headline>
					<Text>{comment.content}</Text>
				</Comment>
			));
	}
};

const Comments: Component<Props> = ({ sendComment, ...props }) => {
	const params = useParams();
	const comments = getcomments(Number(params.id), props.comments);

	return (
		<Section>
			<CommentsSection>{comments}</CommentsSection>
			{comments.length === 0 && (
				<CommentsSection>
					<NotComment>Нет комментариев</NotComment>
				</CommentsSection>
			)}
			<CommentForm onSubmit={sendComment}>
				<Textarea name="content" />
				<Button>Отправить</Button>
			</CommentForm>
		</Section>
	);
};

export default Comments;
