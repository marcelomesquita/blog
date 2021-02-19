import Link from 'next/link';

function Sobre(props) {
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

export function getStaticProps() {
	const now = new Date();
	const staticDate = now.toISOString();

	return {
		props: {
			staticDate
		}
	}
}

export default Sobre;
