import React from 'react';
import {GlobalContext} from '../context/GlobalState';
import { useContext } from 'react';
import {numberWithCommas} from '../utility/format';
    
const Transaction = ({transaction}) =>{
    const {deleteTransaction} = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';
    return(
        <li >
            {transaction.description}<span className={transaction.amount < 0 ? 'minus' : 'plus'} >
                {sign}${numberWithCommas(Math.abs(transaction.amount))}</span>
            <button className="delete-btn" onClick = {() => deleteTransaction(transaction._id)}>x</button>
        </li>
        )
}

export default Transaction;