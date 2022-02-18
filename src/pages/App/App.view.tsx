import React from "react";
import { Routes, Route, Link } from "react-router-dom";
// import { Provider } from "react-redux";
// import { store } from "@/index";

import ErrorBoundary from "@/components/ErrorBoundary";
import Layout from "@/share/Layout";
import Button from "@/share/Button";

import { GlobalFonts } from "@/vendor/fonts.styles";
import { GlobalStyles } from "@/vendor/global.styles";
import Auth from "@/pages/Auth";
import Board from "@/pages/Board";
import Forum from "@/pages/Forum";
import Game from "@/pages/Game";
import Main from "@/pages/Main";
import Article from "@/components/Article";
import Fullscreen from "@/components/Fullscreen";
import Profile from "@/pages/Profile";

import { Title, Nav, Header } from "./App.styles";

const App: React.FC = () => (
	<Layout>
		<GlobalFonts />
		<GlobalStyles />
		{/* <Provider store={store}> */}
		<Header>
			<Title level={1}>Castle Rock. Game 21</Title>
			<Fullscreen />
		</Header>
		<Nav>
			<Link to="/">
				<Button>Main</Button>
			</Link>
			<Link to="/auth/login">
				<Button>Login</Button>
			</Link>
			<Link to="/auth/registration">
				<Button>Registration</Button>
			</Link>
			<Link to="/profile">
				<Button>Profile</Button>
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
			<Route path="/auth/:id" element={<Auth />} />
			<Route path="/board" element={<Board />} />
			<Route path="/profile" element={<Profile />} />
			<Route path="/board" element={<Board />} />
			<Route path="/forum" element={<Forum />}>
				<Route path=":id" element={<Article />} />
			</Route>
			<Route
				path="/game"
				element={
					<ErrorBoundary>
						<Game />
					</ErrorBoundary>
				}
			/>
		</Routes>
		{/* </Provider> */}
	</Layout>
);

export default App;
