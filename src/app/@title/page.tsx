import close from '../../../public/icons/close.svg';
import Image from 'next/image';

export default function Page() {
	return (
		<div>
			<div className="">
				<img
					src="https://via.placeholder.com/150"
					alt=""
				/>
				<Image
					src={close}
					alt="close"
				/>
			</div>
			<div className="details">
				<div className="details_main">
					<h2>Title</h2>
					<p>Description</p>
				</div>
				<div className="details_more">
					<h3>Info on </h3>
					<div className="flex flex-col">
						<p>Genres</p>
						<p>First air date</p>
						<p>Average vote</p>
						<p>Original language</p>
						<p>Age classification</p>
					</div>
				</div>
			</div>
		</div>
	);
}
