import { StaticImageData } from 'next/image';

import simon from './poster/simon.png';

interface hakflixTitle {
	title: string;
	thumb: StaticImageData;
	description: string;
	rating: string;
	type: string;
	numberParts: number;
}

const popularTitles = [
	// {
	// 	title: 'Breaking HAK',
	// 	thumb: simon,
	// 	description: '',
	// 	rating: '',
	// 	type: 'film',
	// 	numberParts: 1,
	// },
	{
		id: 1,
		title: 'Simon',
		thumb: simon,
		description: '',
		rating: '',
		type: 'film',
		numberParts: 1,
		genres: ['Drama', 'Comedy'],
	},
];

export default popularTitles;
