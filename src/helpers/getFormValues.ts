type FormValue = {
	[key: string]: any;
};

export function getFormValues<T extends FormValue>(form: HTMLFormElement): T {
	const formData = new FormData(form);
	const formValues: any = {};

	for (const [name, value] of formData.entries()) {
		formValues[name] = value;
	}

	return formValues;
}
