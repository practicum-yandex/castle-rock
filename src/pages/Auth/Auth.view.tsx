import React, { FormEvent, useCallback } from "react";
import { AuthPage } from "./Auth.styles";
import Registration from "@/components/Registration";
import Login from "@/components/Login";
import { useNavigate, useParams } from "react-router-dom";
import { getFormValues } from "@/helpers/getFormValues";
import { AuthService } from "@/services/AuthService";
import { useDispatch } from "react-redux";

enum AUTH_ID {
	Login = "Login",
	Registration = "Registration",
}

const Auth: React.FC = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const signup = useCallback((event: FormEvent): void => {
		event.preventDefault();
		const formEl = event.target as HTMLFormElement;

		dispatch(AuthService.signup(getFormValues(formEl), () => navigate("/", { replace: true })));
	}, []);

	const signin = useCallback((event: FormEvent): void => {
		event.preventDefault();
		const formEl = event.target as HTMLFormElement;

		dispatch(AuthService.signin(getFormValues(formEl), () => navigate("/", { replace: true })));
	}, []);

	return (
		<AuthPage>
			{id === AUTH_ID.Login ? (
				<Login onSubmit={signin} />
			) : (
				<Registration onSubmit={signup} />
			)}
		</AuthPage>
	);
};

export default Auth;
