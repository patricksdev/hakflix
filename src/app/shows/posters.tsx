'use client';
import Image, { StaticImageData } from 'next/image';
import popularTitles from '../../../public/shows/shows';
import { cancelSync, motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

import { FreeMode } from 'swiper/modules';
import 'swiper/css/free-mode';
import 'swiper/css';

const posterVariables = {
	scale: { scale: 1.05 },
};

const posteTitleVariants = {
	visible: { opacity: 1 },
	hidden: { opacity: 0 },
};

export default function Posters() {
	return (
		<div className='absolute px-14 max-sm:px-8 flex flex-col gap-4 popular-titles w-full'>
			<h2 className='text-2xl max-sm:text-xl font-bold'>Popular on Hakflix</h2>
			<div className='posters w-full'>
				<Swiper
					slidesPerView={'auto'}
					spaceBetween={40}
					freeMode={true}
					loop={true}
					mousewheel={true}
					modules={[FreeMode]}
				>
					{popularTitles.map((title) => (
						<SwiperSlide key={title.id}>
							<Link href={'?show=' + title.id}>
								<motion.div
									variants={posterVariables}
									className='flex cursor-pointer relative'
									whileHover={['visible', 'scale']}
									key={title.id}
								>
									<motion.div
										className='absolute bottom-5 left-5 z-10 opacity-0'
										variants={posteTitleVariants}
									>
										<h4 className='text-xl font-semibold'>{title.title}</h4>
										{title.genres.map((genre, index) => (
											<span
												className='text-sm'
												key={genre}
											>
												{genre} {index + 1 != title.genres.length && '● '}
											</span>
										))}
									</motion.div>

									<motion.div
										className='w-full h-full absolute z-2 poster-overlay opacity-0'
										variants={posteTitleVariants}
									></motion.div>
									<img
										src={title.poster.src}
										alt='Simon'
										className='w-auto h-[29rem] max-sm:h-[20rem] object-cover'
									/>
								</motion.div>
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}
