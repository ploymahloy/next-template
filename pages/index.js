import Image from 'next/image';
import DefaultLayout from '../layouts/DefaultLayout';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<>
			<DefaultLayout>
        <div className={styles.container}>
          
					{/* Put the path to your images in src="[path here]" */}
					<div className={styles.image}>
						<a>
							<Image src="/img_1.jpeg" alt="img" height={600} width={400} />
						</a>
					</div>
					<div className={styles.image}>
						<a>
							<Image src="/img_2.jpeg" alt="img" height={600} width={400} />
						</a>
					</div>
					<div className={styles.image}>
						<a>
							<Image src="/img_3.jpeg" alt="img" height={600} width={400} />
						</a>
					</div>
					<div className={styles.image}>
						<a>
							<Image src="/img_4.jpeg" alt="img" height={600} width={400} />
						</a>
					</div>
					<div className={styles.image}>
						<a>
							<Image src="/img_5.jpeg" alt="img" height={600} width={400} />
						</a>
					</div>
					<div className={styles.image}>
						<a>
							<Image src="/img_6.jpeg" alt="img" height={600} width={400} />
						</a>
					</div>
					<div className={styles.image}>
						<a>
							<Image src="/img_7.jpeg" alt="img" height={600} width={400} />
						</a>
					</div>
					<div className={styles.image}>
						<a>
							<Image src="/img_8.jpeg" alt="img" height={600} width={400} />
						</a>
					</div>
				</div>
			</DefaultLayout>
		</>
	);
}
