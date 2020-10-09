import React from 'react';
import {GlobalContext} from '../context/GlobalState';
import { useContext } from 'react';
import { useEffect } from 'react';
import Transaction from './Transaction';

const History = () => {
    const {transactions, getTransactions} = useContext(GlobalContext);

    useEffect(() => {
        getTransactions();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                {[...transactions].reverse().map(transaction => (
                    <Transaction key = {transaction.id} transaction = {transaction} />))}
            
            </ul>
        </div>
    )}
 export default History;