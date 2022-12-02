import {TransactionReducerStateType} from "../../types";
import {FC} from "react";

const CashData: FC<TransactionReducerStateType> = ({
    bankCash
}) => {
return(
    <div>
        Bank cash: { bankCash }
    </div>
    )
};

export default CashData;