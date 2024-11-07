import Image from 'next/image';
import Link from 'next/link';

import SplitBlocks from '@modules/common/components/SplitBlocks';

import { COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_PHONE } from '@utils/const';

import ICON_EMAIL from '@public/assets/icon-email.svg';
import ICON_MAP from '@public/assets/icon-map.svg';
import ICON_PHONE from '@public/assets/icon-phone.svg';

import s from './Contacts.module.scss';

interface IContactItem {
	icon: string;
	desc: string;
	link?: string;
}

const Contacts = () => {
	const contactsList: IContactItem[] = [
		{
			icon: ICON_MAP,
			desc: COMPANY_ADDRESS,
		},
		{
			icon: ICON_EMAIL,
			desc: COMPANY_EMAIL,
			link: `mailto:${COMPANY_EMAIL}`,
		},
		{
			icon: ICON_PHONE,
			desc: COMPANY_PHONE,
			link: `tel:${COMPANY_PHONE}`,
		},
	];

	return (
		<SplitBlocks
			title="Завжди на зв’язку"
			anchor="contacts"
			className={s.container}
		>
			<div className={s.inner}>
				<ul className={s.list}>
					{contactsList.map((item) => (
						<li key={item.desc} className={s.listInner}>
							<Image src={item.icon} alt="icon" />
							<p>
								{item.link ? (
									<Link href={item.link} target="_blank">
										{item.desc}
									</Link>
								) : (
									item.desc
								)}
							</p>
						</li>
					))}
				</ul>

				<p>
					Благодійна організація &quot;Благодійний фонд &quot;Відчуй
					Добро&quot;&quot; <br /> БО БФ «Відчуй Добро» <br />
					ЄДРПОУ: 41389494 <br /> Директор: Дмитро Миколайович Габіда <br /> Єдиний
					учасник: Станіслав Георгійович Козак
				</p>
			</div>
		</SplitBlocks>
	);
};

export default Contacts;
