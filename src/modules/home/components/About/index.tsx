import {FC} from 'react';

import BlockTitle from '@modules/common/components/BlockTitle';
import SplitBlocks from '@modules/common/components/SplitBlocks';

import s from './About.module.scss';

const About: FC = () => {
	return (
		<SplitBlocks
			title="01 Про фонд"
			anchor="about"
			color="dark"
			index={2}
		>
			<BlockTitle
				title="Благодійний фонд існує завдяки внескам благодійників, та не має на меті отримання прибутку"/>

			<ul className={s.container}>
				<li>
					<p>Благодійний фонд створено у зв’язку із триваючим наступом
						збройних сил російської федерації, оскільки внаслідок масованих
						ракетних обстрілів, наша країна зазнає дуже великих витрати на
						військову підтримку та спостерігається різкий спад економіки.</p>
				</li>
				<li>
					<p>Все вищенаведене призвело до сильного загострення гуманітарної
						ситуації, щонайбільше відчувається в зоні активних бойових дій, де
						населення залишається без житла, роботи та джерел існування.</p>
				</li>
			</ul>
		</SplitBlocks>
	);
};

export default About;
