export async function getServerSideProps(context) {
	const id = context.query.id;

	return {
		props: {
			id
		}
	}
}

function Posts(props) {
	return (
		<div>post: {props.id}</div>
	)
}

export default Posts;
