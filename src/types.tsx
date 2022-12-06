import { rootReducer } from "./store";

export type TransactionReducerStateType = {
    bankCash: number
    bankUsers?: ClientProperties[]
}

export type ClientProperties = {
    name: string,
    budget: number,
    id: string,
}

export type ClientsReducerStateType = ClientProperties[];

export type RootState = ReturnType<typeof rootReducer>