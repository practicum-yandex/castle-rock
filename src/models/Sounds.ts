import getCardSound from '../static/sounds/getCard.mp3';
import enoughCardSound from '../static/sounds/enoughCard.mp3';
import cardDistributionSound from '../static/sounds/cardDistribution.mp3';

export enum SoundKeys {
    GetCard = 'getCard',
    EnoughCard = 'enoughCard',
    CardDistribution = 'cardDistribution'
}

export type Sound = {
    key: SoundKeys;
    sound: any;
};

export const Sounds: Sound[] = [
    {
        key: SoundKeys.GetCard,
        sound: getCardSound
    },
    {
        key: SoundKeys.EnoughCard,
        sound: enoughCardSound
    },
    {
        key: SoundKeys.CardDistribution,
        sound: cardDistributionSound
    }
];
