import React from "react";

import Table, { Head, HeadCell, Row, Body, Cell } from "@/share/Table";

import { Title } from "./Board.styles";

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
	{
		name: "name4",
		score: 125,
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

const Board: React.FC = () => (
	<>
		<Title level={2}>Лидерборд</Title>
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
	</>
);

export default Board;
