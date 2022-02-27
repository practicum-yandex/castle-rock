import React from "react";
import { Component } from "@/utils/components";
import {
	ThemeLink,
	Description,
	CustomTitle,
	List,
} from "./ArticlesList.styles";

export interface IArticle {
	id: number;
	name: string;
	desc: string;
	content: unknown;
}

type Props = {
	articles: IArticle[];
};

const ArticlesList: Component<Props> = (props) => {
	return (
		<List>
			{props.articles.map((theme) => (
				<ThemeLink key={theme.id} to={"/forum/" + theme.id}>
					<CustomTitle>{theme.name}</CustomTitle>
					<Description>{theme.desc}</Description>
				</ThemeLink>
			))}
		</List>
	);
};

export default ArticlesList;
