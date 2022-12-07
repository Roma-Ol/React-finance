import { TransactionReducerStateType } from '../types';
import { FC } from 'react';
import { CashDataStyles } from './CashDataStyles.linaria';

const CashData: FC<TransactionReducerStateType> = ({
 bankCash,
 bankUsers,
}) => {
	return (
		<div className={CashDataStyles}>
			<div className='bank__cash'>
				Bank cash:<span>{ bankCash } $</span>
			</div>

			{bankUsers.length > 0 &&
				<div className='bank__users'>
					<div className='bank__users__header'>
						<div>Username:</div>
						<div>Budget:</div>
					</div>

					{bankUsers?.map((user) => {
						const { name, budget, id } = user;

						return (
							<div key={id} className='bank__users__user'>
								<div>{ name }</div>
								<div>{ budget } $</div>
							</div>
						);
					})}
				</div>
			}
		</div>
	);
};

export default CashData;