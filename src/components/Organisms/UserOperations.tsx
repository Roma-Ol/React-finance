import store from '../../store/index';
import addUser from '../../store/actions/addUser';
import removeUser from '../../store/actions/removeUser';
import { ClientProperties, RootState } from '../../types';
import { UserOperationsStyles } from '../styles/userOperationsStyles.linaria';
import { useInputValidation } from '../../hooks/useInputValidation';

import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { clsx } from 'clsx';

const UserOperations = () => {
	const nameInputRef = useRef<HTMLInputElement>(null);
	const budgetInputRef = useRef<HTMLInputElement>(null);
	const users = useSelector((state: RootState) => state.clientsReducer);
	const { validate } = useInputValidation();
	const [valid, setValid] = useState(true);

	function capitalizeFirstLetter(string: string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	const getName = (): string | undefined => {
		if (nameInputRef.current != null) {
			return capitalizeFirstLetter(nameInputRef.current.value);
		}
	};

	const getBudget = (): number | undefined => {
		if (budgetInputRef.current != null) {
			return +budgetInputRef.current.value;
		}
	};

	const getIndex = (): number | undefined => {
		if (nameInputRef.current !== null) {
			// @ts-ignore
			const key: ClientProperties | undefined = users?.find(item => item.name === capitalizeFirstLetter(nameInputRef.current.value));
			// @ts-ignore
			return users?.indexOf(key);
		}
	};

	return (
		<div className={ UserOperationsStyles }>
			<div className='cash__users__header'>
				Users operations:
			</div>
			<div className='cash__users__add'>
				<div className='cash__users__add__inputgroup'>
					<input type='text'
								 placeholder='name'
								 ref={nameInputRef}
								 title="Only latin numbers allowed."
								 className={clsx(!valid && 'invalid')}
								 onChange={ () => setValid(validate(nameInputRef.current.value, 'string')) } />
					<input type='number' placeholder='budget' ref={budgetInputRef} />
				</div>

				<div className='cash__users__add__submitgroup submitgroup'>
					<button name='add' onClick={
						() => validate(getName(), 'string') && store.dispatch(addUser(getName(), getBudget()))
					}>Add
					</button>
					<button name='remove' onClick={
						() => validate(getName(), 'string') && store.dispatch(removeUser(getName(), getIndex()))
					}>Remove
					</button>
				</div>
			</div>
		</div>
	);
};

export default UserOperations;