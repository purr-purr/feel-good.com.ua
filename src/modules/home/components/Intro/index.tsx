import Image from 'next/image';

import {COMPANY_CATCHPHRASE} from '@utils/const';

import s from './Intro.module.scss';

import INTRO_IMAGE from '@modules/home/assets/intro-poster.jpg';
import AnchorButton from "@modules/common/components/AnchorButton";

const Intro = () => {
	return (
		<section className={s.container}>
			<article className={s.info}>
				<h1 className={s.infoTitle}>
					Єдність в дії
				</h1>
				<p className={s.infoDesc}>{COMPANY_CATCHPHRASE}</p>

				<AnchorButton text="Пожертвуйте зараз" anchor="#bank-details"/>
			</article>

			<div className={s.poster}>
				<Image src={INTRO_IMAGE} alt="Home intro"/>
			</div>
		</section>
	);
};

export default Intro;
