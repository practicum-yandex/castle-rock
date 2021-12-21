import React from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "@/utils/theme";
import Layout from "@/share/Layout";
import Table, { Head, HeadCell, Row, Body, Cell } from "@/share/Table";

import { GlobalStyles, Title } from "./App.styles";

interface Leader {
	name: string;
	score: number;
}

const leadersData = [
	{
		name: "name1",
		score: 12,
	},
	{
		name: "name2",
		score: 24,
	},
	{
		name: "name3",
		score: 15,
	},
];

const renderLeader = (leader: Leader, index: number) => {
	const { name, score } = leader;

	return (
		<Row key={index}>
			<Cell>{index + 1}</Cell>
			<Cell>{name}</Cell>
			<Cell>{score}</Cell>
		</Row>
	);
};

const App: React.FC = () => (
	<ThemeProvider theme={theme}>
		<GlobalStyles />
		<Layout>
			<Title level={1}>Лидерборд</Title>
			<Table>
				<Head>
					<Row>
						<HeadCell>#</HeadCell>
						<HeadCell>Имя</HeadCell>
						<HeadCell>Счет</HeadCell>
					</Row>
				</Head>
				<Body>
					{leadersData
						.slice()
						.sort((a, b) => b.score - a.score)
						.map(renderLeader)}
				</Body>
			</Table>
		</Layout>
	</ThemeProvider>
);

export default App;
