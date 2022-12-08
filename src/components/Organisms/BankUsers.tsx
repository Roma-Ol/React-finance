import { TransactionReducerStateType } from '../../types';
import { FC, useState } from 'react';
import store from '../../store';
import sortUsers from '../../store/actions/sortUsers';
import { BankUsersStyles } from '../styles/bankUsersStyles.linaria';
import { clsx } from 'clsx';

const BankUsers: FC<TransactionReducerStateType> = ({
	bankUsers,
}) => {
	const [sorting, setSorting] = useState('off');

	function operateSorting(key: string) {
		setSorting(key);
		store.dispatch(sortUsers(key));
	}

	return (
		<div className={BankUsersStyles}>
			<div className='bank__users'>
				<div className='bank__users__header'>
					<div>Username:</div>
					<div>Budget:</div>
				</div>

				{bankUsers?.map((user) => {
					const { name, budget, id } = user;

					return (
						<div key={id} className='bank__users__user'>
							<div>{name}</div>
							<div>{budget} $</div>
						</div>
					);
				})}

				{ bankUsers.length > 1 &&
					<div className='bank__users__sort'>
						<div>Sort by:</div>
						<div className='submitgroup'>
							<button name='sort by name'
											className={ clsx(sorting ==='name' && 'active') }
											onClick={() => operateSorting('name')} >
								Name
							</button>
							<button name='sort by cash'
											className={ clsx(sorting ==='cash' && 'active') }
											onClick={() => operateSorting('budget')}>
								Cash
							</button>
						</div>
					</div>
				}
			</div>
		</div>
	);
};

export default BankUsers;