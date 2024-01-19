import Link from 'next/link';

export default function Footer() {
	return (
		<div className="footer w-full h-fit flex justify-center items-center bottom-0 pb-20 max-sm:pt-5 pt-20 px-14">
			<div className="text-center flex flex-col gap-6 max-sm:gap-6 items-center">
				<p className="text-sm text-center flex w-2/4 max-sm:w-full leading-normal">
					Hakflix ist eine rein fiktive und satirische Webseite, welche in
					keinerlei Verbindung mit dem Streamingdienst Netflix steht. Die
					hier dargestellten Inhalte stammen ursprünglich aus einer
					offiziellen Maturazeitung. Hakflix übernimmt keine Verantwortung
					für missverstandene Inhalte oder etwaige Konsequenzen, die aus
					der Nutzung dieser Parodie-Plattform entstehen könnten.
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
	);
}
