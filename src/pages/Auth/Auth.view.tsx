import React, { FormEvent, useCallback } from "react";
import { AuthPage } from "./Auth.styles";
import Registration from "@/components/Registration";
import Login from "@/components/Login";
import { useNavigate, useParams } from "react-router-dom";
import { getFormValues } from "@/helpers/getFormValues";
import { AuthService } from "@/services/AuthService";

enum AUTH_ID {
	Login = "login",
	Registration = "registration",
}

const Auth: React.FC = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const signup = useCallback((event: FormEvent): void => {
		event.preventDefault();
		const formEl = event.target as HTMLFormElement;

		AuthService.signup(getFormValues(formEl))
			.then(() => navigate("/", { replace: true }))
			.catch((err) => console.log(err));
	}, []);

	const signin = useCallback((event: FormEvent): void => {
		event.preventDefault();
		const formEl = event.target as HTMLFormElement;

		AuthService.signin(getFormValues(formEl))
			.then(() => navigate("/", { replace: true }))
			.catch((err) => {
				if (err.response.data.reason) {
					alert(err.response.data.reason)
				} else {
					console.error(err)
				}
			});
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
