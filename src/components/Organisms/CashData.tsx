import { TransactionReducerStateType } from '../../types';
import CashOperations from './CashOperations';
import { CashDataStyles } from '../styles/cashDataStyles.linaria';

import { FC, useState } from 'react';

const CashData: FC<TransactionReducerStateType> = ({
 bankCash,
}) => {
	const [showOptions, setShowOptions] = useState(false);

	return (
		<div className={ CashDataStyles }>
			<div className='bank__cash'>
				Bank budget:<span>{ bankCash } $</span>
			</div>

			<button className='bank__cash__options' onClick={ () => setShowOptions(!showOptions) }/>

			<CashOperations showOptions={ showOptions }/>
		</div>
	);
};

export default CashData;