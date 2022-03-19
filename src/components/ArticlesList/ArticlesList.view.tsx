import React from "react";
import { Component } from "@/utils/components";
import {
	ThemeLink,
	CustomTitle,
	List,
	Description,
} from "./ArticlesList.styles";
import { IThread } from "@/services/ForumService";

type Props = {
	threads: IThread[];
};

const ArticlesList: Component<Props> = (props) => {
	return (
		<List>
			{props.threads.map((theme) => (
				<ThemeLink key={theme.id} to={"/forum/" + theme.id}>
					<CustomTitle>{theme.title}</CustomTitle>
					<Description>Автор: {theme.user_name}</Description>
				</ThemeLink>
			))}
		</List>
	);
};

export default ArticlesList;
