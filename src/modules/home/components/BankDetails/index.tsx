import { FC } from 'react';

import SplitBlocks from '@modules/common/components/SplitBlocks';

import s from './BankDetails.module.scss';

const BankDetails: FC = () => {
	return (
		<SplitBlocks
			title="Твоя допомога - їхній захист"
			anchor="bank-details"
			className={s.container}
		>
			<ul className={s.list}>
				<li>
					<p>
						<b>Реквізити для перерахування допомоги:</b>
					</p>
					<dl>
						<dt>
							<b>IBAN: </b>
						</dt>
						<dd>
							UA913226690000026006300193067 <br />в ФІЛІЯ - ГОЛОВНЕ УПРАВЛІННЯ ПО М.
							КИЄВУ ТА КИЇВСЬКІЙ ОБЛАСТІ АКЦІОНЕРНОГО ТОВАРИСТВА &quot;ДЕРЖАВНИЙ
							ОЩАДНИЙ БАНК УКРАЇНИ&quot;
						</dd>
						<br />
						<dt>
							<b>Код ЄДРПОУ: </b>
						</dt>
						<dd>
							41389494 <br /> Призначення платежу «Благодійна пожертва»
						</dd>
					</dl>
				</li>
				<li>
					<p>
						Ваш внесок допомагає забезпечити необхідне тим, хто постраждав від війни.
						Долучіться до змін – ваша підтримка робить добро можливим.
					</p>
				</li>
			</ul>
		</SplitBlocks>
	);
};

export default BankDetails;
