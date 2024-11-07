import About from '@modules/home/components/About';

import Intro from '@modules/home/components/Intro';
import BankDetails from "@modules/home/components/BankDetails";
import Contacts from "@modules/home/components/Contacts";

const Home = () => {
	return (
		<>
			<Intro/>
			<About/>
			<BankDetails/>
			<Contacts/>
		</>
	);
};

export default Home;
