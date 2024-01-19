import Image from 'next/image';
import featured_film_thumb from '../../public/images/featured_film_thumb.webp';
import featured_film_title from '../../public/images/featured_film_title.svg';

import play from '../../public/icons/play.svg';
import info from '../../public/icons/info.svg';
import Link from 'next/link';
import { Metadata } from 'next';

export default function FeaturedFilm() {
	return (
		<div className="relative w-full">
			<div className="dark-overlay h-[100%] w-[100%]"></div>
			<Image
				src={featured_film_thumb}
				alt="Featured Film"
				className="w-full h-[100vh] object-cover max-sm:h-[90vh] -mt-16"
			/>
			<div className="absolute top-[18%] mx-14 max-sm:mx-8 max-sm:top-[11%] z-10 w-[40%] max-sm:w-[80%] flex flex-col gap-5 max-sm:gap-32">
				<Image
					src={featured_film_title}
					alt="Thumb Title"
					className="w-[45%] max-sm:w-[80%] h-auto"
				/>
				<div className="flex flex-col gap-4">
					<div className="flex flex-col gap-2">
						<p className="hero-text-shadow text-lg w-[85%] max-sm:w-[100%] max-sm:text-sm">
							Frau Prof. Gantner ist beim Korrigieren der Prüfungen
							eingenickt. Begleite Sie nun bei Ihrem Albtraum von Ihrer
							Abschlussklasse.
						</p>
					</div>
					<div className="flex flex-row gap-4">
						<Link
							href="https://youtube.com"
							target="_blank"
						>
							<div className="flex gap-4 items-center button primary">
								<Image
									src={play}
									alt="Play"
									className="w-7 max-sm:w-5 h-auto"
								/>
								<span className="text-lg max-sm:text-sm font-bold">
									Play
								</span>
							</div>
						</Link>

						<Link
							href="https://youtube.com"
							target="_blank"
						>
							<div className="flex gap-4 items-center button secondary">
								<Image
									src={info}
									alt="Play"
									className="w-7 max-sm:w-5 h-auto"
								/>
								<span className="text-sm font-bold">Mehr Infos</span>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
