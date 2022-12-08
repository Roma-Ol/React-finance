import { RootState } from '../types';
import CashData from './Organisms/CashData';
import BankUsers from './Organisms/BankUsers';
import UserOperations from './Organisms/UserOperations';
import { ReactBankStyles } from './styles/reactBankStyles.linaria';

import { useSelector } from 'react-redux';

function ReactBank() {
	const { bankCash } = useSelector((state: RootState) => state.transactionReducer);
	const bankUsers = useSelector((state: RootState) => state.clientsReducer);

	return (
		<div className={ ReactBankStyles }>
			<CashData bankCash={bankCash} />

			{ bankUsers.length > 0 && <BankUsers bankUsers={bankUsers} /> }

			<UserOperations />
		</div>
	);
}

export default ReactBank;