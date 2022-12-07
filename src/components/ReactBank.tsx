import { RootState } from "../types";
import CashData from "./CashData";
import CashUsers from "./CashUsers";
import CashActions from "./CashActions";

import { useSelector } from "react-redux";
import { ReactBankStyles } from './ReactBankStyles.linaria';

function ReactBank() {
    const { bankCash } = useSelector((state: RootState) => state.transactionReducer);
    const bankUsers = useSelector((state: RootState) => state.clientsReducer)

    return(
        <div className={ ReactBankStyles }>
            <CashData bankCash={ bankCash }  bankUsers={ bankUsers }/>
            <div className='actions'>
              <CashActions />
              <CashUsers />
            </div>
        </div>
    )
}

export default ReactBank;