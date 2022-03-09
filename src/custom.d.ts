export {};

declare global {
	interface Window {
		__PRELOADED_STATE__?: object;
	}
}

declare module "*.mp3";
