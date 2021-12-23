import React from "react";
import { ThemeProvider } from "styled-components";
import { Routes, Route, Link, HashRouter } from "react-router-dom";

import { theme } from "@/utils/theme";
import Layout from "@/share/Layout";
import Button from "@/share/Button";
import Auth from "@/pages/Auth";
import Board from "@/pages/Board";
import Forum from "@/pages/Forum";
import Game from "@/pages/Game";
import Main from "@/pages/Main";

import { Title, GlobalStyles, Nav } from "./App.styles";

const App: React.FC = () => (
	<ThemeProvider theme={theme}>
		<GlobalStyles />
		<Layout>
			<Title level={1}>Castle Rock</Title>
			<HashRouter>
				<Nav>
					<Link to="/">
						<Button>Main</Button>
					</Link>
					<Link to="/auth">
						<Button>Auth</Button>
					</Link>
					<Link to="/board">
						<Button>Board</Button>
					</Link>
					<Link to="/forum">
						<Button>Forum</Button>
					</Link>
					<Link to="/game">
						<Button>Game</Button>
					</Link>
				</Nav>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/auth" element={<Auth />} />
					<Route path="/board" element={<Board />} />
					<Route path="/forum" element={<Forum />} />
					<Route path="/game" element={<Game />} />
				</Routes>
			</HashRouter>
		</Layout>
	</ThemeProvider>
);

export default App;
