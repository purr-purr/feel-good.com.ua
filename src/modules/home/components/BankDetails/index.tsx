import {FC} from 'react';

import BlockTitle from '@modules/common/components/BlockTitle';
import SplitBlocks from '@modules/common/components/SplitBlocks';

import s from './BankDetails.module.scss';

const BankDetails: FC = () => {
	return (
		<SplitBlocks
			title="02 Реквізити"
			anchor="bank-details"
			index={3}
		>
			<BlockTitle
				title="Долучіться до підтримки"/>

			<ul className={s.list}>
				<li>
					<p><b>Реквізити для перерахування допомоги:</b></p>
					<dl>
						<dt><b>IBAN: </b></dt>
						<dd>UA603204780000026004924930243 <br/> АБ «УКРГАЗБАНК»</dd>
						<br/>
						<dt><b>Код ЄДРПОУ: </b></dt>
						<dd>44742409 <br/> Призначення платежу «Благодійна пожертва»</dd>
					</dl>
				</li>
				<li>
					<p>Кожен внесок дарує не лише матеріальну допомогу, але й надію.
						Пожертвуйте сьогодні, щоб допомогти тим, хто втратив усе, отримати
						другий шанс, тепло та турботу.</p>
				</li>
			</ul>
		</SplitBlocks>
	);
};

export default BankDetails;
