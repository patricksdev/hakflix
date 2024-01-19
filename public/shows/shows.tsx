import { StaticImageData } from 'next/image';

import burak from './posters/burak.webp';
import felix from './posters/felix.webp';
import hannah from './posters/hannah.webp';
import johannes from './posters/johannes.webp';
import justin from './posters/justin.webp';
import leon from './posters/leon.webp';
import leonie from './posters/leonie.webp';
import markus from './posters/markus.webp';
import maximilian from './posters/maximilian.webp';
import melanie from './posters/melanie.webp';
import noelle from './posters/noelle.webp';
import pascal from './posters/pascal.webp';
import patrick from './posters/patrick.webp';
import richard from './posters/richard.webp';
import simon from './posters/simon.webp';
import tarik from './posters/tarik.webp';
import anika from './posters/anika.webp';
import annika from './posters/annika.webp';
import arda from './posters/arda.webp';
import ashab from './posters/ashab.webp';
import benjamin from './posters/benjamin.webp';
import abwesend from './posters/abwesend.webp';

import burakThumb from './thumbs/burakThumb.webp';
import felixThumb from './thumbs/felixThumb.webp';
import hannahThumb from './thumbs/hannahThumb.webp';
import johannesThumb from './thumbs/johannesThumb.webp';
import justinThumb from './thumbs/justinThumb.webp';
import leonThumb from './thumbs/leonThumb.webp';
import leonieThumb from './thumbs/leonieThumb.webp';
import markusThumb from './thumbs/markusThumb.webp';
import maximilianThumb from './thumbs/maximilianThumb.webp';
import melanieThumb from './thumbs/melanieThumb.webp';
import noelleThumb from './thumbs/noelleThumb.webp';
import pascalThumb from './thumbs/pascalThumb.webp';
import patrickThumb from './thumbs/patrickThumb.webp';
import richardThumb from './thumbs/richardThumb.webp';
import simonThumb from './thumbs/simonThumb.webp';
import tarikThumb from './thumbs/tarikThumb.webp';
import anikaThumb from './thumbs/anikaThumb.webp';
import annikaThumb from './thumbs/annikaThumb.webp';
import ardaThumb from './thumbs/ardaThumb.webp';
import ashabThumb from './thumbs/ashabThumb.webp';
import benjaminThumb from './thumbs/benjaminThumb.webp';
import {
	anikaText,
	annikaText,
	ardaText,
	ashabText,
	benjaminText,
	burakText,
	felixText,
	hannahText,
	johannesText,
	justinText,
	leonText,
	leonieText,
	markusText,
	maximilianText,
	melanieText,
	noelleText,
	pascalText,
	patrickText,
	richardText,
	simonText,
	tarikText,
} from './descriptions';

export interface hakflixShow {
	id: number;
	title: string;
	poster: StaticImageData;
	thumb: StaticImageData;
	cast: string;
	writtenBy: string;
	genres: string[];
	description: string;
}

const shows: hakflixShow[] = [
	{
		id: 1,
		title: 'Breaking HAK',
		poster: felix,
		thumb: felixThumb,
		cast: 'Felix Bischof',
		writtenBy: 'Justin Martan',
		description: felixText,
		genres: ['Crime-Action', 'Abenteuer'],
	},
	{
		id: 2,
		title: 'TOP GUY',
		poster: pascal,
		thumb: pascalThumb,
		cast: 'Pascal Blank',
		writtenBy: 'Richard Anton Brunner',
		description: pascalText,
		genres: ['Dokumentationen', 'Action'],
	},
	{
		id: 3,
		title: 'RICHARD',
		poster: richard,
		thumb: richardThumb,
		cast: 'Richard Anton Brunner',
		writtenBy: 'Pascal Blank',
		description: richardText,
		genres: ['Science-Fiction'],
	},
	{
		id: 4,
		title: 'Burak Dogan is Klassensprecher',
		poster: burak,
		thumb: burakThumb,
		cast: 'Burak Dogan',
		writtenBy: 'Tarik Kadric',
		description: burakText,
		genres: ['Stand-up-Comedy und Talkshows'],
	},
	{
		id: 5,
		title: 'Ashab Dhzamulaev',
		poster: ashab,
		thumb: ashabThumb,
		cast: 'Askhab Dhzamulaev',
		writtenBy: 'Arda Sahin',
		description: ashabText,
		genres: ['Action', 'Thriller'],
	},
	{
		id: 6,
		title: 'Simon',
		poster: simon,
		thumb: simonThumb,
		cast: 'Simon Engl',
		writtenBy: 'Patrick Müller',
		description: simonText,
		genres: ['Action', 'Abenteuer'],
	},
	{
		id: 7,
		title: 'BENNI',
		poster: benjamin,
		thumb: benjaminThumb,
		cast: 'Benjamin Gärtner',
		writtenBy: 'Burak Dogan',
		description: benjaminText,
		genres: ['Thriller', 'Übernatürliche Horrorfilme'],
	},
	{
		id: 8,
		title: 'MAXIMILIAN',
		poster: maximilian,
		thumb: maximilianThumb,
		cast: 'Maximilian Grätz',
		writtenBy: 'Johannes Lohs',
		description: maximilianText,
		genres: ['Comedyserien', 'Action'],
	},
	{
		id: 9,
		title: 'Der Laufende Tod',
		poster: noelle,
		thumb: noelleThumb,
		cast: 'Noelle Hofstädter',
		writtenBy: 'Leonie Wagner',
		description: noelleText,
		genres: ['Horror', 'Action'],
	},
	{
		id: 10,
		title: 'TARIK KADRIC',
		poster: tarik,
		thumb: tarikThumb,
		cast: 'Tarik Kadric',
		writtenBy: 'Leon Pilicic',
		description: tarikText,
		genres: ['Action-Thriller'],
	},
	{
		id: 11,
		title: 'Annika With A "NN"',
		poster: annika,
		thumb: annikaThumb,
		cast: 'Annika King',
		writtenBy: 'Anika Schneider',
		description: annikaText,
		genres: ['Tiergeschichten', 'Familienabenteuer'],
	},
	{
		id: 12,
		title: 'JOHANNES',
		poster: johannes,
		thumb: johannesThumb,
		cast: 'Johannes Lohs',
		writtenBy: 'Markus Reis',
		description: johannesText,
		genres: ['Italienisch', 'Psychothriller'],
	},
	{
		id: 13,
		title: 'Better Call Justin',
		poster: justin,
		thumb: justinThumb,
		cast: 'Justin Martan',
		writtenBy: 'Felix Bischof',
		description: justinText,
		genres: ['Comedyserie'],
	},
	{
		id: 14,
		title: 'PATRICK MÜLLER',
		poster: patrick,
		thumb: patrickThumb,
		cast: 'Patrick Müller',
		writtenBy: 'Simon Engl',
		description: patrickText,
		genres: ['Horror', 'Thriller'],
	},
	{
		id: 15,
		title: 'LEON PILICIC',
		poster: leon,
		thumb: leonThumb,
		cast: 'Leon Pilicic',
		writtenBy: 'Ashab Dhzamulaev',
		description: leonText,
		genres: ['Action', 'Thriller'],
	},
	{
		id: 16,
		title: 'MARKUS',
		poster: markus,
		thumb: markusThumb,
		cast: 'Markus Reis',
		writtenBy: 'Maximilian Grätz',
		description: markusText,
		genres: ['Stand-up-Comedy', 'Für Kinder'],
	},
	{
		id: 17,
		title: 'Most Wanted Man',
		poster: arda,
		thumb: ardaThumb,
		cast: 'Arda Sahin',
		writtenBy: 'Benjamin Gärtner',
		description: ardaText,
		genres: ['Action', 'Satiren'],
	},
	{
		id: 18,
		title: 'SHE',
		poster: hannah,
		thumb: hannahThumb,
		cast: 'Hannah Scheidbach',
		writtenBy: 'Melanie Wolf',
		description: hannahText,
		genres: ['Horror'],
	},
	{
		id: 19,
		title: "Anika's Diaries",
		poster: anika,
		thumb: anikaThumb,
		cast: 'Anika Schneider',
		writtenBy: 'Annika King',
		description: anikaText,
		genres: ['Mystery', 'Romantische Dramen'],
	},
	{
		id: 20,
		title: 'MONDAY',
		poster: leonie,
		thumb: leonieThumb,
		cast: 'Leonie Wagner',
		writtenBy: 'Noelle Hofstädter',
		description: leonieText,
		genres: ['Übernatürliche Horrofilme'],
	},
	{
		id: 21,
		title: "Melanie's Moving Castle",
		poster: melanie,
		thumb: melanieThumb,
		cast: 'Melanie Wolf',
		writtenBy: 'Hannah Scheidbach',
		description: melanieText,
		genres: ['Anime', 'Fantasy-Filme'],
	},
	{
		id: 22,
		title: 'Abwesend',
		poster: abwesend,
		thumb: abwesend,
		cast: 'Der legendäre Stuhl',
		writtenBy: '...',
		description: '',
		genres: ['Horror'],
	},
];

export default shows;
