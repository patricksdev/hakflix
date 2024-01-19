import Link from 'next/link';

export default function Footer() {
	return (
		<div className="footer w-full h-16 flex justify-center items-center absolute bottom-0">
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
	);
}
