import { TransactionReducerStateType } from '../../types';
import CashOperations from './CashOperations';
import { CashDataStyles } from '../styles/cashDataStyles.linaria';

import { FC, useState } from 'react';
import { clsx } from 'clsx';

const CashData: FC<TransactionReducerStateType> = ({
 bankCash,
}) => {
	const [showOptions, setShowOptions] = useState(false);

	return (
		<div className={ CashDataStyles }>
			<div className='bank__cash'>
				Bank budget:<span>{ bankCash } $</span>
			</div>

			<button className={clsx( 'bank__cash__options', showOptions && 'open')}
							onClick={ () => setShowOptions(!showOptions) }
							style={{ backgroundImage: `url('2305b338b07b9c7e23ca586cdf3b344b.png')` }}/>

			<CashOperations showOptions={ showOptions }/>
		</div>
	);
};

export default CashData;