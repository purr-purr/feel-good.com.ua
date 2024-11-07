import { FC } from 'react';
import Image from 'next/image';

import ICON1 from '../../assets/who-we-are-pic1.png';
import ICON2 from '../../assets/who-we-are-pic2.png';
import ICON3 from '../../assets/who-we-are-pic3.png';
import s from './WhoWeAre.module.scss';

const WhoWeAre: FC = () => {
	const list = [
		{
			icon: ICON1,
			title: 'Прозорість',
			desc:
				'Кожна гривня йде безпосередньо на допомогу тим, хто цього потребує. Ми дотримуємося повної прозорості у використанні коштів.',
		},
		{
			icon: ICON2,
			title: 'Підтримка',
			desc:
				'Ми швидко реагуємо на реальні та нагальні потреби, забезпечуючи допомогу там, де вона найбільш необхідна.',
		},
		{
			icon: ICON3,
			title: 'Команда',
			desc:
				'Команда професіоналів працює з повною віддачею, розуміючи потреби людей, яким допомагає.',
		},
	];
	return (
		<ul className={s.container}>
			{list.map((item) => (
				<li key={item.title} className={s.item}>
					<Image className={s.icon} src={item.icon} alt="icon" />
					<h3 className={s.title}>{item.title}</h3>
					<p>{item.desc}</p>
				</li>
			))}
		</ul>
	);
};

export default WhoWeAre;
