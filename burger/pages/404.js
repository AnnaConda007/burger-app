const { default: Link } = require('next/link');

const notFoundPage = () => {
	return (
		<div className='not-found'>
			<h1>Ой</h1>
			<h2> такой страницы не сушествует</h2>
			<p>
				перейти на <Link href={'/'}>главную страницу</Link>
			</p>
		</div>
	);
};
export default notFoundPage;
