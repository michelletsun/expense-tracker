import React from 'react'
import {useState} from 'react';
import {GlobalContext} from '../context/GlobalState';
import { useContext } from 'react';

const AddTransaction = () => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);
    const {addTransaction} = useContext(GlobalContext);

    const handleDescriptionChange = (e) =>{
        setDescription(e.target.value);
    }
    const handleAmountChange = (e) =>{
        setAmount(e.target.value);
    }
    const onSubmit = (e) =>{
        e.preventDefault();
        const newTransaction =  {
            id: Math.floor(Math.random() * 100000000),
            description: description,
            amount: +amount
        }
        addTransaction(newTransaction);
        setDescription('');
        setAmount('');
    }
    
    return (
        <div>
            <h3>New Transaction</h3>
            <form onSubmit ={onSubmit}>
            <div className="form-control">
            <label htmlFor="text">Description</label>
            <input type="text" value = {description} onChange = {handleDescriptionChange} placeholder="Enter description..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount
            </label>
          <input type="number" value = {amount} onChange = {handleAmountChange} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
        </div>
    )
}

export default AddTransaction;
