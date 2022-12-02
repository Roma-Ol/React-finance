import {useRef} from "react";
import store from "../../store/store";
import AddUser from "../../store/actions/addUser";

const CashUsers = () => {
    const nameInputRef = useRef(null);
    const budgetInputRef = useRef(null);

    function getName() {
        // @ts-ignore
        return nameInputRef.current.value();
    }

    function getBudget() {
        // @ts-ignore
        return +budgetInputRef.current.value();
    }

    return (
        <>
            <hr/>
            <div>
                <input type='text' placeholder='name' ref={ nameInputRef }/>
                <input type='text' placeholder='cash' ref={ budgetInputRef } />
                <button name='add user' onClick={ () => store.dispatch(AddUser('Pedro', 3000)) }>Add user</button>
                <button name='remove user'>Remove user</button>
            </div>
            <div>
                User sorting:
                <button name='sort by name'>Sort by name</button>
                <button name='sort by cash'>Sort by cash</button>
            </div>
        </>
    )
}

export default CashUsers;