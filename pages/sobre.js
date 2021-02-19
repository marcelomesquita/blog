import Link from 'next/link';

const delay = (milliSeconds) => new Promise(resolve => setTimeout(resolve, milliSeconds));

function Sobre(props) {
	console.log('processando página Sobre');

	const now = new Date();
	const dynamicDate = now.toISOString();

	return (
		<div>
			<h1>Sobre</h1>
			<ul>
				<li><Link href="/"><a>Home</a></Link></li>
				<li><Link href="/sobre"><a>Sobre</a></Link></li>
			</ul>
			<small>{dynamicDate} builded {props.staticDate}</small>
		</div>
	)
}

export async function getStaticProps() {
	console.log('processando getStaticProps Sobre');

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

export default Sobre;
