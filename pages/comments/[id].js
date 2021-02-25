import { useRouter } from 'next/router';

function Comments(props) {
	const router = useRouter();
	const id = router.query.id;

	return (
		<div>comment: {id}</div>
	)
}

export default Comments;
