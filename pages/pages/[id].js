const delay = (milliSeconds) => new Promise(resolve => setTimeout(resolve, milliSeconds));

export async function getStaticPaths() {
	return {
		paths: [
			{
				params: {
					id: '1'
				}
			},
			{
				params: {
					id: '2'
				}
			}
		],
		fallback: 'blocking'
	}
}

export async function getStaticProps(context) {
	await delay(1000);

	const id = context.params.id;

	return {
		props: {
			id
		}
	}
}

function Pages(props) {
	return (
		<div>page: {props.id}</div>
	)
}

export default Pages;
