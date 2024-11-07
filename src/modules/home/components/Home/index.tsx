import About from '@modules/home/components/About';
import BankDetails from '@modules/home/components/BankDetails';
import Contacts from '@modules/home/components/Contacts';
import Intro from '@modules/home/components/Intro';
import WhoWeAre from '@modules/home/components/WhoWeAre';

const Home = () => {
	return (
		<>
			<Intro />
			<About />
			<WhoWeAre />
			<BankDetails />
			<Contacts />
		</>
	);
};

export default Home;
