import React, { MouseEventHandler } from "react";
import { Component } from "@/utils/components";
import Title from "@/share/Title";
import { Textarea, CommentForm, Button, CommentsSection, Section, Comment, Headline, CommentDate, Text } from "./Comments.styles";

export interface IComment {
	id: number,
	author: string;
	date: string;
	comment: string;
}

type Props = {
	comments: IComment[],
	sendComment: MouseEventHandler<HTMLFormElement>
}

const Comments: Component<Props> = ({sendComment, ...props}) => {
	return (
		<Section>
			<CommentsSection>
				{props.comments.map((comment) => (
					<Comment key={comment.id}>
						<Headline>
							<Title level={3}>{comment.author}</Title>
							<CommentDate>{comment.date}</CommentDate>
						</Headline>
						<Text>{comment.comment}</Text>
					</Comment>
				))}
			</CommentsSection>
			<CommentForm onSubmit={sendComment}>
				<Textarea name="comment" />
				<Button>Отправить</Button>
			</CommentForm>
		</Section>
	);
};

export default Comments;
