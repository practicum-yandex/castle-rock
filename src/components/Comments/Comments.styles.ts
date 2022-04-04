import styled from "styled-components";
import ShareButton from "@/share/Button";
import ShareTitle from "@/share/Title";

export const Title = styled(ShareTitle)`
	color: black;
`;

export const Section = styled.section`
	${({ theme }) => `
		width: 100%;
		height: 100%;
		padding: 8px;
		display: flex;
		overflow: hidden;
		position: relative;
		flex-direction: column;
		justify-content: space-between;
		background-color: ${theme.colors.secondary(0.1)};
		border-radius: 8px;
	`}
`;

export const CommentsSection = styled.section`
	${({ theme }) => `
		width: 100%;
		height: max-content;
		display: flex;
		overflow-y: auto;
		flex-direction: column;
	`}
`;

export const CommentForm = styled.form`
	${({ theme }) => `;
		width: 100%;
		height: max-content;
		display: flex;
		flex-direction: column;
	`}
`;

export const Textarea = styled.textarea`
	${({ theme }) => `
		width: 100%;
		height: 100px;
		padding: ${theme.spacing(2)};
		margin-bottom: ${theme.spacing(2)};
		font: inherit;
		font-size: 16px;
		border-radius: 8px;
		border: 1px solid ${theme.colors.secondary(0.2)};
		outline: none;
		resize: none;
	`}
`;

export const Button = styled(ShareButton)`
	width: 100%;
	font-size: 12px;
	line-height: 1.5em;
`;

export const Comment = styled.div`
	${({ theme }) => `
		width: 100%;
		height: auto;
		padding: ${theme.spacing(2)};
		margin-bottom: ${theme.spacing(2)};
		border-radius: 8px;
		background-color: white;
		border: 1px solid ${theme.colors.secondary(0.2)};
	`}
`;

export const Headline = styled.div`
	${({ theme }) => `
		width: 100%;
		margin-bottom: ${theme.spacing(1)};
		display: flex;
		align-items: center;
		justify-content: space-between;
	`}
`;

export const CommentDate = styled.span`
	${({ theme }) => `
		color: ${theme.colors.secondary()};
		font-size: 12px;
	`}
`;

export const Text = styled.p`
	${({ theme }) => `
		max-height: 270px;
		font-size: 14px;
		overflow: hidden;
		color: ${theme.colors.default()};
	`}
`;

export const NotComment = styled.p`
	${({ theme }) => `
		width: 100%;
		text-align: center;
		font-size: ${theme.spacing(3)};
		color: ${theme.colors.secondary(0.2)};
	`}
`;
