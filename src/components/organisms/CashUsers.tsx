import store from "../../store/index";
import addUser from "../../store/actions/addUser";
import sortUsers from "../../store/actions/sortUsers";
import removeUser from "../../store/actions/removeUser";
import { ClientProperties, RootState } from "../../types";
import {useInputValidation} from "../../hooks/useInputValidation";

import { useRef } from "react";
import { useSelector } from "react-redux";

const CashUsers = () => {
    const nameInputRef = useRef<HTMLInputElement>(null);
    const budgetInputRef = useRef<HTMLInputElement>(null);
    const users = useSelector((state: RootState) => state.clientsReducer);
    const { validate } = useInputValidation();

    function capitalizeFirstLetter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const getName = (): string | undefined => {
        if (nameInputRef.current != null) {
            return capitalizeFirstLetter(nameInputRef.current.value);
        }
    }

    const  getBudget = (): number | undefined=> {
        if (budgetInputRef.current != null) {
            return +budgetInputRef.current.value;
        }
    }

    const getIndex = (): number | undefined => {
        if (nameInputRef.current !== null) {
            // @ts-ignore
            const key: ClientProperties | undefined = users?.find(item => item.name === capitalizeFirstLetter(nameInputRef.current.value));
            // @ts-ignore
            return users?.indexOf(key)
        }
    }

    return (
        <>
            <div>
                <input type='text' placeholder='name' ref={ nameInputRef }/>
                <input type='number' placeholder='cash' ref={ budgetInputRef } />
                <button name='add' onClick={
                    () => validate(getName(), 'string') && store.dispatch(addUser(getName(), getBudget()))
                }>Add user</button>
                <button name='remove' onClick={
                    () => validate(getName(), 'string') && store.dispatch(removeUser(getName(), getIndex()))
                }>Remove user</button>
            </div>

            <div>
                User sorting:
                <button name='sort by name' onClick={ () => store.dispatch(sortUsers('name')) }>Sort by name</button>
                <button name='sort by cash' onClick={ () => store.dispatch(sortUsers('budget')) }>Sort by cash</button>
            </div>
        </>
    )
}

export default CashUsers;