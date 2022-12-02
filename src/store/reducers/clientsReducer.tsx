import { ClientsReducerStateType } from "../../types";

const initialState: ClientsReducerStateType = [];

const createUser = (name: string, budget: number) => { return { name: name, budget: budget }};

export function clientsReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'ADD':
            return (
                [...state, createUser(action.payload.name, action.payload.budget) ]
            )
        default:
            return state;
    }
}