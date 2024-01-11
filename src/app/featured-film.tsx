import Image from 'next/image';
import thumb from '../../public/images/thumb.webp';
import thumb_title from '../../public/images/thumb_title.webp';

import play from '../../public/icons/play.svg';
import info from '../../public/icons/info.svg';
import Link from 'next/link';

export default function FeaturedFilm() {
	return (
		<div className="relative w-full">
			<div className="dark-overlay h-[100%] w-[100%]"></div>
			<Image
				src={thumb}
				alt="Featured Film"
				className="w-full h-[100vh] object-cover max-sm:h-[90vh] -mt-16"
			/>
			<div className="absolute top-[18%] mx-14 max-sm:mx-8 z-10 w-[40%] max-sm:w-[80%] flex flex-col gap-5">
				<Image
					src={thumb_title}
					alt="Thumb Title"
				/>
				<div className="flex flex-col gap-2">
					<h1 className="hero-text-shadow text-3xl max-sm:text-2xl font-semibold mt-3">
						The new Hakflix Original
					</h1>
					<p className="hero-text-shadow text-lg max-sm:text-base">
						Jenny ist eingeschlafen. Begleite sie bei ihren süßen
						Albträumen über ihre DigBiz Abschlussklasse.
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
							<span className="text-sm font-bold">More Info</span>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}
