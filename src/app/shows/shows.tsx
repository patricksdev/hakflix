'use client';
import Image, { StaticImageData } from 'next/image';
import shows, { hakflixShow } from '../../../public/shows/shows';
import { cancelSync, motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

import { FreeMode, Mousewheel } from 'swiper/modules';
import 'swiper/css/free-mode';
import 'swiper/css';
import { useEffect, useLayoutEffect, useState } from 'react';
import { shuffle } from '../helper/shuffle';
import { isMobile } from 'react-device-detect';

const posterVariables = {
	scale: { scale: 1.05 },
};

const posteTitleVariants = {
	visible: { opacity: 1 },
	hidden: { opacity: 0 },
};
export default function Shows() {
	const [rndShows, setrndShows] = useState<hakflixShow[] | []>();

	useEffect(() => {
		if (shows) setrndShows(shuffle(shows));
	}, []);

	return (
		<div className="absolute px-14 max-sm:px-8 flex flex-col popular-titles w-full">
			<h2 className="text-2xl max-sm:text-xl font-bold">
				Beliebt auf Hakflix
			</h2>
			<div className="posters w-full h-full">
				<Swiper
					slidesPerView={'auto'}
					spaceBetween={40}
					mousewheel={isMobile ? false : true}
					freeMode={isMobile ? false : true}
					loop={true}
					modules={isMobile ? [] : [FreeMode, Mousewheel]}
				>
					{rndShows &&
						rndShows.map((show, index) => (
							<SwiperSlide key={show.id}>
								<Link
									href={'/shows/' + show.id}
									scroll={false}
								>
									<motion.div
										variants={posterVariables}
										className="flex relative"
										whileHover={['visible', 'scale']}
										key={show.id}
									>
										<motion.div
											className="absolute bottom-5 left-5 z-10 opacity-0"
											variants={posteTitleVariants}
										>
											<h4 className="text-xl font-semibold">
												{show.title}
											</h4>
											{show.genres.map((genre, index) => (
												<span
													className="text-sm"
													key={genre}
												>
													{genre}{' '}
													{index + 1 != show.genres.length && '● '}
												</span>
											))}
										</motion.div>

										<motion.div
											className="w-full h-full absolute z-2 poster-overlay opacity-0"
											variants={posteTitleVariants}
										></motion.div>
										<Image
											src={show.poster.src}
											alt={show.title}
											width={show.poster.width}
											height={show.poster.height}
											className="w-auto h-[29rem] max-sm:h-[20rem] object-cover"
										/>
									</motion.div>
								</Link>
							</SwiperSlide>
						))}
				</Swiper>
			</div>
			<div className="footer w-full h-fit flex justify-center items-center bottom-0 pt-20 pb-20 px-14 max-sm:px-8">
				<div className="text-center flex flex-col gap-6 max-sm:gap-6 items-center">
					<p className="text-sm text-center flex w-2/4 max-sm:w-full leading-normal">
						Hakflix ist eine rein fiktive und satirische Webseite, welche
						in keinerlei Verbindung mit dem Streamingdienst Netflix steht.
						Die hier dargestellten Inhalte stammen ursprünglich aus einer
						offiziellen Maturazeitung. Hakflix übernimmt keine
						Verantwortung für missverstandene Inhalte oder etwaige
						Konsequenzen, die aus der Nutzung dieser Parodie-Plattform
						entstehen könnten.
					</p>

					<span className="text-sm">
						Made with<span className="heart-color"> &#9829; </span>by{' '}
						<Link
							href="https://github.com/patricksdev"
							target="_blank"
							className="underline"
						>
							patricks.dev
						</Link>
					</span>
				</div>
			</div>
		</div>
	);
}
