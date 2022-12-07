import React, { FC, useRef } from 'react';

import store from '../store/index';
import decBud from '../store/actions/decBud';
import incBud from '../store/actions/incBud';
import { CashActionsStyles } from './CashActionsStyles.linaria';

const CashActions: FC = () => {
	const inputRef = useRef<HTMLInputElement>(null);

	function operateCash(operator: string) {
		// @ts-ignore
		const inputValue = inputRef.current.value;

		if (inputValue !== '') {
			switch (operator) {
				case 'dec':
					store.dispatch(decBud(+inputValue));
					break;

				case 'inc':
					store.dispatch(incBud(+inputValue));
					break;
			}
		}
	}

	return (
		<div className={ CashActionsStyles }>
			<div className='cash__actions__header'>
				Budget operations:
			</div>

			<div className='cash__actions__input'>
				<input type='number' ref={inputRef} placeholder='0'/>
			</div>

			<div className='cash__actions__buttons'>
				<button name='inc'
								onClick={() => operateCash('inc')}>
					Increase
				</button>
				<button name='dec'
								onClick={() => operateCash('dec')}>
					Decrease
				</button>
			</div>
		</div>
	);
};

export default CashActions;