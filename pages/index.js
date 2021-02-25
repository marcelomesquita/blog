import Link from 'next/link';

const delay = (milliSeconds) => new Promise(resolve => setTimeout(resolve, milliSeconds));

export async function getStaticProps() {
	console.log('processando getStaticProps Home');

	// await delay(5000);

	const now = new Date();
	const staticDate = now.toISOString();

	return {
		props: {
			staticDate
		},
		revalidate: 5
	}
}

function Home(props) {
	console.log('processando página Home');

	const now = new Date();
	const dynamicDate = now.toISOString();

	return (
		<div>
			<h1>Home</h1>
			<ul>
				<li><Link href="/"><a>Home</a></Link></li>
				<li><Link href="/sobre"><a>Sobre</a></Link></li>
			</ul>
			<small>{dynamicDate} builded {props.staticDate}</small>
		</div>
	)
}

export default Home;
