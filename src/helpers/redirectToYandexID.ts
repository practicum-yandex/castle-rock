import { canUseDOM } from "@/utils/canUseDOM";

export const redirectToYandexID = (id: string): void => {
	if (canUseDOM && window.location) {
		window.location.href = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${id}&redirect_uri=${window.location.origin}`;
	}
};
