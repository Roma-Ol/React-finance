import { TransactionReducerStateType } from "../../types";

const initialState: TransactionReducerStateType = {
    bankCash: 5000
}

export function transactionReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'INC':
            return {
                bankCash: state.bankCash + action.payload
            };
        case 'DEC':
            return {
                bankCash:state.bankCash - action.payload
            };

        default:
            return state;
    }
}