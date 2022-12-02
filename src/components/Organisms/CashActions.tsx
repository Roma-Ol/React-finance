import React, { FC, useRef } from "react";
import store from "../../store/store";
import decBud from "../../store/actions/decBud";
import incBud from "../../store/actions/incBud";
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
        <div>
            <hr/>
            <input type="number"
                ref={ inputRef }/>
            <button name='dec'
                onClick={ () => operateCash('dec') }>
                Decrease budget
            </button>
            <button name='inc'
                onClick={ () => operateCash('inc') }>
                Increase budget
            </button>
        </div>
    )
}

export default CashActions;