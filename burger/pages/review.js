import Head from 'next/head';

const review = ({ data }) => {
	/*тут деструктуризируется родительский для свойства props объект,
  но не сам объект props. Почему запись не props.data ?*/
	return (
		<>
			<Head>
				<title>Бургеры | Отзывы</title>
			</Head>
			<div>
				<h1>Отзывы</h1>
				<div className='reviews'>
					{!!data.length &&
						data.slice(0, 20).map((comment) => {
							return (
								<div key={comment.id} className='review'>
									{comment.id}
									{`${comment.body.slice(0, 90)}...`}
								</div>
							);
						})}
				</div>
			</div>
		</>
	);
};

export async function getServerSideProps() {
	const res = await fetch('https://jsonplaceholder.typicode.com/comments');
	const data = await res.json();
	return {
		/*это деструктуризация объекта, создается объект без названия ,
    в  котором потом создается объект пропс как свойство  */
		props: {
			/*props  - это как раз тот самый объект,который потом обрабатывается в компоненте  */
			data: data /*и этот объект в себе хранит еще один объект с результатом запроса */,
		},
	};
}

/*то есть структура возвращаемого следущая:
{
  props :{
data:data( [] )
}
  итого 3 объекта , вложенных друг в друга */

export default review;
