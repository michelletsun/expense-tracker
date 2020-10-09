const express = require('express');
const router = express.Router();
const {getTransactions} = require('../controllers/TransactionContoller');
const {addTransaction} = require('../controllers/TransactionContoller');
const {deleteTransaction} = require('../controllers/TransactionContoller');

router
    .route('/')
    .get(getTransactions)
    .post(addTransaction);

router 
    .route('/:id')
    .delete(deleteTransaction);

module.exports = router;