import { useState } from 'react';
import Image from 'next/image';

// import Modal from './Modal';
import styles from '../styles/Artwork.module.css';

export default function Artwork(props) {
  const { path } = props;
  const [showModal, setShowModal] = useState(false);

	return (
		<>
			<div className={styles.image}>
				<a onClick={() => setShowModal(true)}>
          <Image src={path} alt="img" height={600} width={400} />
					{/* <Modal show={showModal} onClose={() => setShowModal(false)}> */}
            <Image src={path} alt="img" height={600} width={400} />
            <p>Title of Piece</p>
            <p>{`Here's a description of the artwork. You can discuss inspiration, intent, techniques, whatever. I'm simply a filler paragraph that is meant to be replace by something better.`}</p>
					{/* </Modal> */}
				</a>
			</div>
		</>
	);
}
