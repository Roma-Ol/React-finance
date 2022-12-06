import { RootState } from "../types";
import CashData from "./organisms/CashData";
import CashUsers from "./organisms/CashUsers";
import CashActions from "./organisms/CashActions";

import { useSelector } from "react-redux";

function ReactBank() {
    const { bankCash } = useSelector(
        (state: RootState) => state.transactionReducer,
    );

    const bankUsers = useSelector((state: RootState) => state.clientsReducer)

    return(
        <div>
            <CashData bankCash={ bankCash }  bankUsers={ bankUsers }/>
            <CashActions/>
            <CashUsers/>
        </div>
    )
}

export default ReactBank;