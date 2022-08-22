import Image from 'next/image';

import DefaultLayout from '../layouts/DefaultLayout';
import styles from '../styles/About.module.css';

export default function work() {
	return (
		<DefaultLayout>
			<div className={styles.container}>
				<div className={styles.image}>
					<a>
						<Image src="/about.jpeg" alt="img" height={600} width={400} />
					</a>
				</div>
				<div className={styles.about}>
					<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tenetur laboriosam totam officiis earum ipsa nisi expedita, excepturi iure exercitationem, esse libero magni perspiciatis dicta ipsam voluptatem deleniti, molestiae iste.
          Voluptates, eius sed. Similique vel, cupiditate quae ab exercitationem adipisci veniam laudantium reprehenderit temporibus.
          </p>
          <br />
					<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tenetur laboriosam totam officiis earum ipsa nisi expedita, excepturi iure exercitationem, esse libero magni perspiciatis dicta ipsam voluptatem deleniti, molestiae iste.
          Voluptates, eius sed. Similique vel, cupiditate quae ab exercitationem adipisci veniam laudantium reprehenderit temporibus.
          </p>
          <br />
					<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tenetur laboriosam totam officiis earum ipsa nisi expedita, excepturi iure exercitationem, esse libero magni perspiciatis dicta ipsam voluptatem deleniti, molestiae iste.
          Voluptates, eius sed. Similique vel, cupiditate quae ab exercitationem adipisci veniam laudantium reprehenderit temporibus.
          </p>
				</div>
			</div>
		</DefaultLayout>
	);
}
