import { TransactionReducerStateType } from "../../types";
import { FC } from "react";

const CashData: FC<TransactionReducerStateType> = ({
    bankCash,
    bankUsers,
}) => {
return(
    <div>
        <div>
            Bank cash: { bankCash }
        </div>

        { bankUsers?.map((user) => {
            const { name, budget, id } = user;

            return (
                <div key={ id }>
                    <div>{ `${ name }: ${ budget }` }</div>
                </div>
            )
        })}
    </div>
    )
};

export default CashData;