export const redirectToYandexID = (id: string): void => {
	location.href = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${id}&redirect_uri=${location.origin}`;
};
