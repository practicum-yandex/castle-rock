import React, { useEffect } from "react";
import Table, { Head, HeadCell, Row, Body, Cell } from "@/share/Table";
import { Title } from "./Board.styles";
import { BoardMemberData } from "@/services/BoardService";
import { useDispatch, useSelector } from "react-redux";
import { loadBoardData } from "@/store/reducers/board";

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
	const boardList =
		useSelector<any, BoardMemberData[]>((state) => state.board.item) || [];

	useEffect(() => {
		if (boardList.length === 0) {
			dispatch(
				loadBoardData({
					cursor: 0,
					limit: 1000,
					ratingFieldName: "score21Uniq",
				})
			);
		}
	}, [boardList]);

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
						?.slice()
						?.sort((a, b) => b.data.score21Uniq - a.data.score21Uniq)
						?.map(renderLeader)}
				</Body>
			</Table>
		</>
	);
};

export default Board;
