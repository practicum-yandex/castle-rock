import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ErrorBoundary from "@/components/ErrorBoundary";
import { theme } from "@/utils/theme";
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
import { AuthService, UserData } from "@/services/AuthService";
import { Dispatch } from "redux";
import { setUser } from "@/store/reducers/user";

const params: any = new Proxy(new URLSearchParams(window.location.search), {
	get: (searchParams, prop) => searchParams.get(prop as any)
});

const App: React.FC = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector<any, UserData>((state) => state.user.item);

	useEffect(() => {
		const code = params.code;

		if (!user) {
			AuthService.getUser()
				.then((user) => dispatch((dp: Dispatch) => dp(setUser(user))))
				.catch(() => {
					if (code) {
						AuthService.sendAuthCode(code)
						.then(() => AuthService.getUser())
						.then((user) => dispatch((dp: Dispatch) => dp(setUser(user))))
						.catch((err) => console.log(err));
					} else {
						navigate('/auth/login', { replace: true });
					}
				})
		}
	}, [])

	return (
		<ThemeProvider theme={theme}>
			<GlobalFonts />
			<GlobalStyles />
				<Layout>
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
				</Layout>
		</ThemeProvider>
	)
};

export default App;
