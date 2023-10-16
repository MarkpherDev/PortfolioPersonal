import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Proyects } from './components/Proyects';
import { Skills } from './components/Skills';

export const App = () => {
	return (
		<>
			<Header />
			<Banner />
			<Skills />
			<Proyects />
			<Footer />
		</>
	);
};
