import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import styles from '../styles/Modal.module.css';

export default function Modal(props) {
	const { children, onClose, show } = props;
	const [isBrowser, setIsBrowser] = useState(false);

	useEffect(() => {
		setIsBrowser(true);
	});

	const handleClose = (e) => {
		e.preventDefault();
		onClose();
	};

	const modalContent = show ? (
		<>
			<div className={styles.overlay} onClick={handleClose} />
			<div className={styles.modal}>
				<p className={styles.title}>Title of Piece</p>
				{children}
			</div>
		</>
	) : null;

	if (isBrowser) {
		return ReactDOM.createPortal(
			modalContent,
			document.getElementById('modal-root')
		);
	}
}
