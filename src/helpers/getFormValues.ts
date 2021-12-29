type FormValue = {
    [key: string]: unknown;
}

export function getFormValues(form: HTMLFormElement): any {
    const formData = new FormData(form);
    const elements = Array.from(form.elements).filter(el => el.tagName !== 'BUTTON');

    return elements.reduce((formValues, el) => {
        const name = (el as HTMLInputElement).name;
        const value = formData.get(name);
        formValues[name] = value;

        return formValues;
    }, {} as FormValue);
}
