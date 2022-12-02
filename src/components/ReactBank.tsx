import store from "../store/store";
import { RootState } from "../types";
import CashData from "./Organisms/CashData";
import CashUsers from "./Organisms/CashUsers";
import CashActions from "./Organisms/CashActions";

import { useSelector } from "react-redux";

function ReactBank() {
    const { bankCash } = useSelector(
        (state: RootState) => state.transactionReducer,
    );

    return(
        <div>
            <CashData bankCash={ bankCash }/>
            <CashActions/>
            <CashUsers/>
        </div>
    )
}

export default ReactBank;