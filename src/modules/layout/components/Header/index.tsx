import Logo from '@modules/common/components/Logo';
import Navigation from '@modules/layout/components/Navigation';
import NavigationButton from '@modules/layout/components/NavigationButton';
import { HeaderContextWrapper } from '@modules/layout/context/HeaderContext';

import { useMediaQuery } from '@modules/common/hooks';

import { MOBILE_BREAKPOINT } from '@utils/const';

import s from './Header.module.scss';

const Header = () => {
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

	return (
		<header className={s.container}>
			<Logo />

			<HeaderContextWrapper>
				<Navigation />
				{isMobile && <NavigationButton />}
			</HeaderContextWrapper>
		</header>
	);
};

export default Header;
