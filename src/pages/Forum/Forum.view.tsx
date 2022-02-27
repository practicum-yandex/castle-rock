import React, { FormEvent, MouseEvent, useCallback, useState } from "react";
import { Outlet, useMatch } from "react-router-dom";
import ArticlesList from "@/components/ArticlesList";
import { CustomButtom, Section } from "./Forum.styles";
import CreateThemeForm from "@/components/CreateThemeForm";
import { getFormValues } from "@/helpers/getFormValues";
import Comments from "@/components/Comments";
import { IComment } from "@/components/Comments/Comments.view";
import { IArticle } from "@/components/ArticlesList/ArticlesList.view";

// Mock data
const ARTICLES: IArticle[] = [
	{
		id: 1,
		name: "Some name",
		desc: "Some description",
		content: "...some content 1",
	},
	{
		id: 2,
		name: "Some name",
		desc: "Some description",
		content: "...some content 2",
	},
	{
		id: 3,
		name: "Some name",
		desc: "Some description",
		content: "...some content 3",
	},
];

// Mock data
const COMMENTS: IComment[] = [
	{
		id: 1,
		author: 'First Second',
		date: '1 марта 2020',
	    comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat deleniti quod cupiditate officia odio id dolorem cum quos fuga, aspernatur, placeat et aperiam, dolores qui rerum totam! Cum, recusandae nostrum!'
	},
	{
		id: 2,
		author: 'First Second',
		date: '1 марта 2020',
	    comment: 'Fugiat deleniti quod cupiditate officia odio id dolorem cum quos fuga, aspernatur, placeat et aperiam, dolores qui rerum totam! Cum, recusandae nostrum!'
	},
	{
		id: 3,
		author: 'First Second',
		date: '1 марта 20202',
	    comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
	}
];

const Forum: React.FC = () => {
	const isMainPage = !!useMatch("/forum");
	const [formIsVisible, toggleFormVisibality] = useState<boolean>(false);

	const [articles, setArticles] = useState<IArticle[]>(ARTICLES);
	const [comments, setComment] = useState<IComment[]>(COMMENTS);

	const toggleForm = (event: MouseEvent | FormEvent): void => {
		if (event.target === event.currentTarget) {
			toggleFormVisibality((prev: boolean) => !prev);
		}
	};

	const publishTheme = useCallback((event: FormEvent): void => {
		event.preventDefault();
		const form =  event.target as HTMLFormElement;
		const value = getFormValues(form);
		const newArticle = {
			id: Math.random() * 100,
			...value
		} as IArticle;

		form.reset();
		setArticles((prev) => [...prev, newArticle]);
		toggleForm(event);
	}, [articles]);

	const sendComment = useCallback((event: FormEvent): void => {
		event.preventDefault();
		const form = event.target as HTMLFormElement;
		const value = getFormValues(form);
		const newComment = {
			id: Math.random() * 100,
			author: 'First Second',
			date: new Date().toLocaleDateString(),
			...value
		} as IComment;

		form.reset();
		setComment((prev) => [...prev, newComment]);
	}, [comments]);

	return (
		<>
			<Section>
				{isMainPage ? <ArticlesList articles={articles}/> : <Comments { ...{sendComment, comments} } />}
				<Outlet />
			</Section>
			{formIsVisible && <CreateThemeForm onSubmit={publishTheme} close={toggleForm}/>}
			{isMainPage && <CustomButtom onClick={toggleForm}>Создать тему</CustomButtom>}
		</>
	);
};

export default Forum;
