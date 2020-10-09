const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    description: {
        type: String,
        trim: true,
        required: [true, 'Please add text']
    },
    amount: {
        type: Number,
        required: [true, 'Please add a positive or negative number']
    },
    createAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Transaction', TransactionSchema);