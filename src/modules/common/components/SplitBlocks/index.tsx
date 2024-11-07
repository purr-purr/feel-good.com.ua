import { FC, type ReactNode } from 'react';

import cn from 'classnames';

import s from './SplitBlocks.module.scss';

const SplitBlocks: FC<{
	children: ReactNode;
	className?: string;
	title: string;
	anchor?: string;
	isYellowPatternBg?: boolean;
}> = ({ children, title, anchor, className, isYellowPatternBg = false }) => {
	return (
		<section
			className={cn(
				s.container,
				className && className,
				isYellowPatternBg && s[`container--yellowPattern`],
			)}
			id={anchor}
		>
			<aside className={s.leftSide}>
				<h3 className={s.title}>{title}</h3>
			</aside>
			<article className={s.rightSide}>{children}</article>
		</section>
	);
};

export default SplitBlocks;
