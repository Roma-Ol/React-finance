import rootReducer from "./store";

export type TransactionReducerStateType = {
    bankCash: number
}

type ClientProperties = {
    name: string,
    budget: number
}

export type ClientsReducerStateType = ClientProperties[];

export type RootState = ReturnType<typeof rootReducer>