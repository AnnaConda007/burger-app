import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';
export default function Home() {
	return (
		<div>
			<Header />
			<h1>главная </h1>
			<Footer />
		</div>
	);
}
