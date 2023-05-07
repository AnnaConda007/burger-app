import '@/styles/globals.css';
import Layout from '@/components/layout';
import Head from 'next/head';
export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<Head>
				<title>Бургеры</title>
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}
