import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Title, GlobalStyles } from "./App.styles";

import { theme } from "@/utils/theme";
import Button from "@/share/Button";
import Auth from "@/pages/Auth";
import Board from "@/pages/Board";
import Forum from "@/pages/Forum";
import Game from "@/pages/Game";
import Main from "@/pages/Main";

const App: React.FC = () => (
	<ThemeProvider theme={theme}>
		<GlobalStyles />
		<Title>Castle Rock</Title>
		<Router>
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
			<Routes>
				<Route path='/' element={<Main/>}/>
				<Route path='/auth' element={<Auth/>}/>
				<Route path='/board' element={<Board/>}/>
				<Route path='/forum' element={<Forum/>}/>
				<Route path='/game' element={<Game/>}/>			
			</Routes>
		</Router>
	</ThemeProvider>
);

export default App;