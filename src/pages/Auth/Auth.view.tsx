import React, { FormEvent, useCallback } from "react";
import { AuthPage } from "./Auth.styles";
import Registration from "@/components/Registration";
import Login from "@/components/Login";
import { useNavigate, useParams } from "react-router-dom";
import { getFormValues } from "@/helpers/getFormValues";
import { AuthService } from "@/services/AuthService";
import { AuthResponse } from "@/models/Auth";

enum AUTH_ID {
	Login = "login",
	Registration = "registration",
}

const Auth: React.FC = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	console.log(id);

	const signup = useCallback((event: FormEvent): void => {
		event.preventDefault();
		const formEl = event.target as HTMLFormElement;

		AuthService.signup(getFormValues(formEl), updateUserId);
	}, []);

	const signin = useCallback((event: FormEvent): void => {
		event.preventDefault();
		const formEl = event.target as HTMLFormElement;

		AuthService.signin(getFormValues(formEl), updateUserState);
	}, []);

	function updateUserId(data: AuthResponse) {
		if (data) {
			navigate("/", { replace: true });
		}
	}

	function updateUserState(data: string) {
		if (data === "OK") {
			navigate("/", { replace: true });
		}
	}

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
