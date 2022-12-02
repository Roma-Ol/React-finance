import { combineReducers } from 'redux'

import { transactionReducer } from './reducers/transactionReducer'
import { clientsReducer } from './reducers/clientsReducer'

const rootReducer = combineReducers({
    transactionReducer,
    clientsReducer
})

export default rootReducer
