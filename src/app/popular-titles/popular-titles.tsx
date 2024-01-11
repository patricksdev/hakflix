'use client';
import Image, { StaticImageData } from 'next/image';
import popularTitles from '../../../public/popular-titles/popular-titles';
import { cancelSync, motion } from 'framer-motion';

const quickMenu = {
	hover: {
		opacity: 1,
	},
};

export const defaultEasing = [0.6, -0.05, 0.01, 0.99];

export const posterFadeInVariants = {
	initial: {
		y: 20,
		opacity: 0,
		transition: { duration: 0.5, ease: defaultEasing },
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: { duration: 0.5, ease: defaultEasing },
	},
	exit: {
		y: 20,
		opacity: 0,
		transition: { duration: 0.5, ease: defaultEasing },
	},
};

export default function PopularTitles() {
	return (
		<div className="absolute px-14 max-sm:px-8 flex flex-col gap-4 popular-titles">
			<h2 className="text-2xl max-sm:text-xl font-bold">
				Popular on Hakflix
			</h2>
			{popularTitles.map((title) => (
				<motion.div
					variants={posterFadeInVariants}
					className="flex cursor-pointer relative"
					whileHover={{
						scale: 1.05,
					}}
					key={title.id}
				>
					<div className="absolute bottom-5 left-5 z-10">
						<h4 className="text-xl font-semibold">Simon</h4>
						{title.genres.map((genre, index) => (
							<span
								className="text-sm"
								key={genre}
							>
								{genre} {index + 1 != title.genres.length && '● '}
							</span>
						))}
					</div>
					<motion.div
						className="w-full h-full absolute z-2"
						whileHover={{
							background:
								'linear-gradient(1turn, rgba(0, 0, 0, 0.6), transparent 65%)',
						}}
					></motion.div>
					<img
						src={title.thumb.src}
						alt="Simon"
						className="w-80 max-sm:w-52 h-auto object-cover"
					/>
				</motion.div>
			))}
		</div>
	);
}

const posterVariants = {
	initial: {},
};
