import React from 'react';
import { createContext } from "react";
import { useReducer } from "react";
import AppReducer from './AppReducer';
import axios from 'axios';

const startState = {
    transactions:[],
    error: null,
    loading: true
}

export const GlobalContext = createContext(startState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, startState);

    const getTransactions = async () => {
        try {
            const res = await axios.get('api/v1/transactions');
            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            });
        }
    }

    const deleteTransaction = async (id) =>{
        try {
            await axios.delete(`/api/v1/transactions/${id}`);
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            });
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            });
        }
        
    }

    const addTransaction = async (transaction) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/v1/transactions', transaction, config);

            dispatch({
                type: 'ADD_TRANSACTION',
                payload: res.data.data
            });

        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            });
        }
        
    }

    return (<GlobalContext.Provider value = {{
        transactions : state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions, 
        deleteTransaction,
        addTransaction
    }}>{children}</GlobalContext.Provider>);

}