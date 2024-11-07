import {FC} from 'react';
import Image from 'next/image';
import Link from 'next/link';

import s from './AnchorButton.module.scss';

import ARROW_ICON from '/public/assets/arrow-right.svg';

const AnchorButton: FC<{
	text: string;
	anchor: string
}> = ({text, anchor}) => {
	return (
		<Link href={anchor} className={s.container}>
			{text}
			<Image src={ARROW_ICON} alt="arrow"/>
		</Link>
	);
}

export default AnchorButton;
