import { FC } from 'react';

import SplitBlocks from '@modules/common/components/SplitBlocks';

import s from './About.module.scss';

const About: FC = () => {
	return (
		<SplitBlocks
			title="Сила підтримки для кожного"
			anchor="about"
			className={s.container}
		>
			<ul className={s.list}>
				<li>
					<p>
						Благодійний фонд існує через загострення бойових дій і зміну лінії фронту,
						внаслідок чого, потерпають мирні мешканці та цивільна інфраструктура, що
						призводить до переміщення людей та обмеження гуманітарного доступу.
					</p>
				</li>
				<li>
					<p>
						Єдине джерело надходжень – добровільні внески благодійників. Благодійний
						фонд не має на меті отримання прибутку.{' '}
					</p>
				</li>
			</ul>
		</SplitBlocks>
	);
};

export default About;
