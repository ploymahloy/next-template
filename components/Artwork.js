import { useState } from 'react';
import Image from 'next/image';

import Modal from './Modal';
import styles from '../styles/Artwork.module.css';

export default function Artwork(props) {
	const { path } = props;
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<div className={styles.image}>
				<Image
					src={path}
					alt="img"
					height={600}
					width={400}
					onClick={() => setShowModal(true)}
				/>
				<Modal show={showModal} onClose={() => setShowModal(false)}>
					<Image src={path} alt="img" height={400} width={275} />
					<p>{`Here's a description of the artwork. You can discuss inspiration, intent, techniques, whatever. I'm simply a filler paragraph that is meant to be replaced.`}</p>
				</Modal>
			</div>
		</>
	);
}
