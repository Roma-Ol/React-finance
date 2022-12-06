import {ClientProperties, ClientsReducerStateType} from "../../types";

import { v4 as uuidv4 } from 'uuid';

const createUser = (name: string, budget: number) => { return { name: name, budget: budget, id: uuidv4() }};

function sortUsers(state: ClientProperties[], sortBy: string) {
    // @ts-ignore
    return state.sort((a: ClientProperties, b: ClientProperties) => (a[sortBy] > b[sortBy]) ? 1 : ((b[sortBy] > a[sortBy]) ? -1 : 0))
}

export function clientsReducer(state: ClientsReducerStateType = [], action: any) {
    switch (action.type) {
        case 'ADD':
            return [...state, createUser(action.payload.name, action.payload.budget)]
        case 'REMOVE':
            return [...state.slice(0, action.payload.index),...state.slice(action.payload.index + 1)]
        case 'SORT_BY_NAME':
            return [...sortUsers(state, 'name')]
        case 'SORT_BY_BUDGET':
            return [...sortUsers(state, 'budget')]

        default:
            return state;
    }
}