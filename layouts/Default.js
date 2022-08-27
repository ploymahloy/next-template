import React, { useState } from 'react';
import { TiThMenu, TiTimes } from 'react-icons/ti';

import styles from '../styles/Default.module.scss';

export default function DefaultLayout(props) {
	const { children } = props;
	const [isActive, setIsActive] = useState();

	return (
		<>
			<nav className={styles.nav}>
				<a href="/" className={styles.nav_logo}>
					{/* Replace with <img /> if importing logo as image */}
					<p className={styles.nav_logo_typography}>Jane Doe</p>
				</a>

				<a
					href="#!"
					className={styles.menu_icon}
					onClick={() => setIsActive(true)}
				>
					<TiThMenu />
				</a>
				<div
					className={styles.sidenav}
					style={{ display: isActive ? 'block' : 'none' }}
				>
					<ul className={styles.sidenav_menu}>
						<TiTimes
							className={styles.sidenav_menu_x}
							onClick={() => setIsActive(false)}
						/>
						<li>
							<a href="/" className={styles.sidenav_menu_link}>
								Work
							</a>
						</li>
						<li>
							<a href="/about" className={styles.sidenav_menu_link}>
								About
							</a>
						</li>
						<li>
							<a href="/contact" className={styles.sidenav_menu_link}>
								Contact
							</a>
						</li>
					</ul>
				</div>

				<div className={styles.nav_menu}>
					<a href="/" className={styles.nav_menu_link}>
						Work
					</a>
					<a href="/about" className={styles.nav_menu_link}>
						About
					</a>
					<a href="/contact" className={styles.nav_menu_link}>
						Contact
					</a>
				</div>
			</nav>
			{children}
		</>
	);
}
