import React, { FormEvent, MouseEvent, useEffect, useState } from "react";
import { Outlet, useMatch, useParams } from "react-router-dom";
import ArticlesList from "@/components/ArticlesList";
import { CustomButtom, Section } from "./Forum.styles";
import CreateThemeForm from "@/components/CreateThemeForm";
import { getFormValues } from "@/helpers/getFormValues";
import Comments from "@/components/Comments";
import { useDispatch, useSelector } from "react-redux";
import { ForumService, IComment, ICommentBody, IThread, IThreadBody } from "@/services/ForumService";
import { loadThreads } from "@/store/reducers/thread";
import { loadComments } from "@/store/reducers/comments";
import { UserData } from "@/services/AuthService";

const Forum: React.FC = () => {
	const params = useParams();
	const dispatch = useDispatch();
	const isMainPage = !!useMatch("/forum");
	const [formIsVisible, toggleFormVisibality] = useState<boolean>(false);
	const comments = useSelector<any, IComment[]>((state) => state.comments.item || []);
	const threads = useSelector<any, IThread[]>((state) => state.threads.item || []);
	const user = useSelector<any, UserData>((state) => state.user.item);
	const threadId = params.id;

	const toggleForm = (event: MouseEvent | FormEvent): void => {
		if (event.target === event.currentTarget) {
			toggleFormVisibality((prev: boolean) => !prev);
		}
	};

	const publishTheme = (event: FormEvent): void => {
		event.preventDefault();

		if (user) {
			const form =  event.target as HTMLFormElement;
			const thread: IThreadBody = { 
				...getFormValues(form), 
				user_name: `${user.first_name} ${user.second_name}`
			};
	
			ForumService.createThread(thread)
				.then(() => {
					dispatch(loadThreads());
					toggleFormVisibality(false);
				})
				.catch((err) => console.log(err));
			
			form.reset();
		}
	};

	const sendComment = (event: FormEvent): void => {
		event.preventDefault();

		if (threadId && user) {
			const form = event.target as HTMLFormElement;
			const comment: ICommentBody = { 
				...getFormValues(form),
				user_name: `${user.first_name} ${user.second_name}`,
				thread_id: Number(threadId),
			};

			ForumService.createComment(comment)
				.then((res) => dispatch(loadComments()))
				.catch((err) => console.log(err));

			form.reset();
		}
	};

	useEffect(() => {
		dispatch(loadComments());
	}, []);

	useEffect(() => {
		dispatch(loadThreads());
	}, []);

	return (
		<>
			<Section>
				{isMainPage ? <ArticlesList threads={threads}/> : <Comments { ...{sendComment, comments} } />}
				<Outlet />
			</Section>
			{formIsVisible && <CreateThemeForm onSubmit={publishTheme} close={toggleForm}/>}
			{isMainPage && <CustomButtom onClick={toggleForm}>Создать тему</CustomButtom>}
		</>
	);
};

export default Forum;
