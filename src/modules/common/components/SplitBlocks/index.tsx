import {FC, type ReactNode} from 'react';

import s from './SplitBlocks.module.scss';
import cn from "classnames";

const SplitBlocks: FC<{
	children: ReactNode;
	title: string;
	anchor?: string;
	color?: 'white' | 'dark';
	index: number;
}> = ({children, title, anchor, color = 'white', index}) => {

	return (
		<section
			className={cn(s.container, s[`container--${color}`], s[`container--index${index}`])}
			id={anchor}>
			<aside className={s.leftSide}>
				<h3 className={cn(s.title, s[`title--${color}`])}>{title}</h3>
			</aside>
			<article className={s.rightSide}>{children}</article>
		</section>
	);
};

export default SplitBlocks;
