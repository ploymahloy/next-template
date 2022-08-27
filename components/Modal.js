import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const OVERLAY_STYLES = {
	position: 'fixed',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	backgroundColor: 'rgba(0, 0, 0, 0.7)',
	zIndex: 1000
};

const MODAL_STYLES = {
  position: 'fixed',
  boxSizing: 'border-box',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
  height: '96vh',
	padding: '4rem',
  backgroundColor: '#FFF',
  border: '1px solid red',
	zIndex: 1000
}; 

export default function Modal(props) {
	const { children, onClose, show } = props;

	const handleClose = (e) => {
		e.preventDefault();
		onClose();
	};

	const modalContent = show ? (
		<>
			<div style={OVERLAY_STYLES} onClick={handleClose} />
			<div style={MODAL_STYLES}>
				<button onClick={onClose}>Close Modal</button>
				{children}
			</div>
		</>
	) : null;

	return ReactDOM.createPortal(
		modalContent,
		document.getElementById('modal-root')
	);
}
