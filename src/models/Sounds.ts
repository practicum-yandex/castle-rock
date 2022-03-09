export enum SoundKeys {
	GetCard = "getCard",
	EnoughCard = "enoughCard",
	CardDistribution = "cardDistribution",
}

export type Sound = {
	key: SoundKeys;
	sound: any;
};

export const Sounds: Sound[] = [
	{
		key: SoundKeys.GetCard,
		sound: "./static/sounds/getCard.mp3",
	},
	{
		key: SoundKeys.EnoughCard,
		sound: "./static/sounds/enoughCard.mp3",
	},
	{
		key: SoundKeys.CardDistribution,
		sound: "./static/sounds/cardDistribution.mp3",
	},
];
