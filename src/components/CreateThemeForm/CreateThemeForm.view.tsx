import React, { FormHTMLAttributes, MouseEventHandler } from "react";
import { Component } from "@/utils/components";
import { Button, Form, Input, Overlay, Textarea, Title } from "./CreateThemeForm.styles";

type Props = {
	close: MouseEventHandler<HTMLElement>
};

type FormProps = FormHTMLAttributes<HTMLFormElement>;

const CreateThemeForm: Component<FormProps & Props> = ({close, ...props}) => {

	return (
		<Overlay onClick={close}>
			<Form {...props}>
				<Title level={1}>Тема</Title>
				<Input name="name" placeholder="Название темы"/>
				<Input name="desc" placeholder="Описание темы"/>
				<Textarea name="content"/>
				<Button>Опубликовать</Button>
			</Form>
		</Overlay>
	);
};

export default CreateThemeForm;
