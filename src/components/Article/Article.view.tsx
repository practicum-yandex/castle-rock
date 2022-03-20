import React, { useEffect, useState } from "react";
import { Component } from "@/utils/components";
import { Content, Section } from "./Article.styles";
import Title from "@/share/Title";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { IThread } from "@/services/ForumService";

const Article: Component = () => {
	const params = useParams();
	const [currentThread, setCurrentThread] = useState<IThread>();
	const threads = useSelector<any, IThread[]>(
		(state) => state.threads.item || []
	);

	useEffect(() => {
		const threadId = params.id;
		const currentThread = threads.find((t) => t.id === Number(threadId));
		setCurrentThread(currentThread as IThread);
	}, [threads]);

	return (
		<Section>
			<Title level={1}>{currentThread?.title}</Title>
			<Content>{currentThread?.content}</Content>
		</Section>
	);
};

export default Article;
