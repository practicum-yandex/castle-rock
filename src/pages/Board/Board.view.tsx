import React, { useContext, useEffect } from "react";

import Table, { Head, HeadCell, Row, Body, Cell } from "@/share/Table";

import { Title } from "./Board.styles";
import { BoardMemberData, BoardService } from "@/services/BoardService";
import { ReactReduxContext, useDispatch } from "react-redux";

const renderLeader = (data: BoardMemberData, index: number) => {
	const { user, score21Uniq } = data.data;

	return (
		<Row key={index}>
			<Cell>{index + 1}</Cell>
			<Cell>{user}</Cell>
			<Cell>{score21Uniq}</Cell>
		</Row>
	);
};

const Board: React.FC = () => {
	const dispatch = useDispatch();
	const { store } = useContext(ReactReduxContext);
	const boardList: BoardMemberData[] = store.getState().board.item || []; // не сразу обновляется

	useEffect(() => {
		if (boardList.length === 0) {
			dispatch(BoardService.getBoard({
				cursor: 0,
				limit: 1000,
				ratingFieldName: 'score21Uniq'
			}));
		}
	}, [])

	return (
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
					{boardList
						.slice()
						.sort((a, b) => b.data.score21Uniq - a.data.score21Uniq)
						.map(renderLeader)}
				</Body>
			</Table>
		</>
	)
};

export default Board;
