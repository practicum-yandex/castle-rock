import React, { FormEvent, MouseEvent, useState } from "react";
import { Outlet, useMatch } from "react-router-dom";
import ArticlesList from "@/components/ArticlesList";
import { CustomButtom, Section } from "./Forum.styles";
import CreateThemeForm from "@/components/CreateThemeForm";
import { getFormValues } from "@/helpers/getFormValues";

export interface Article {
	id: number;
	name: string;
	desc: string;
	content: unknown;
}

// Mock data
export const Articles: Article[] = [
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

const Forum: React.FC = () => {
	const buttonIsVisible = !!useMatch("/forum");
	const [formIsVisible, toggleFormVisibality] = useState<boolean>(false);

	const toggleForm = (event: MouseEvent | FormEvent): void => {
		if (event.target === event.currentTarget) {
			toggleFormVisibality((prev: boolean) => !prev);
		}
	};

	const publishTheme = (event: FormEvent): void => {
		event.preventDefault();
		const form =  event.target as HTMLFormElement;
		const value = getFormValues(form);

		Articles.push({
			id: Math.random() * 100,
			...value
		} as Article);

		toggleForm(event);
	};

	return (
		<>
			<Section>
				<ArticlesList articles={Articles}/>
				<Outlet />
			</Section>
			{formIsVisible && <CreateThemeForm onSubmit={publishTheme} close={toggleForm}/>}
			{buttonIsVisible && <CustomButtom onClick={toggleForm}>Создать тему</CustomButtom>}
		</>
	);
};

export default Forum;
