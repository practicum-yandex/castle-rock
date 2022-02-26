import React from "react";
import { Component } from "@/utils/components";
import {
	ThemeLink,
	Description,
	CustomTitle,
	List,
} from "./ArticlesList.styles";
import { Article } from "@/pages/Forum/Forum.view";

type Props = {
	articles: Article[];
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
