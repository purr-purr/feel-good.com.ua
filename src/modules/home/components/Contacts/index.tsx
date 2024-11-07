import Link from 'next/link';
import Image from 'next/image';

import BlockTitle from '@modules/common/components/BlockTitle';

import {
	COMPANY_ADDRESS,
	COMPANY_EMAIL,
	COMPANY_PHONE,
} from '@utils/const';

import ICON_EMAIL from '@public/assets/icon-email.svg';
import ICON_MAP from '@public/assets/icon-map.svg';
import ICON_PHONE from '@public/assets/icon-phone.svg';

import s from './Contacts.module.scss';
import SplitBlocks from "@modules/common/components/SplitBlocks";

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
			title="03 Контакти"
			anchor="contacts"
			color="dark"
			index={4}
		>
			<BlockTitle
				title="Відкриті до спілкування"/>

			<div className={s.container}>
				<ul className={s.list}>
					{contactsList.map((item) => (
						<li key={item.desc} className={s.listInner}>
							<Image src={item.icon} alt="icon"/>
							<p>
								{item.link ? (
									<Link href={item.link} target="_blank">
										{item.desc}
									</Link>
								) : (
									item.desc
								)}</p>
						</li>
					))}
				</ul>

				<p>Благодійний фонд &quot;Сила нашого добра&quot; <br/> БО БФ «Сила
					нашого
					добра» <br/> ЄДРПОУ:
					44742409 <br/> Директор та одноосібний засновник: Дмитро Євгенович
					Лобачевський</p>
			</div>
		</SplitBlocks>
	);
};

export default Contacts;
