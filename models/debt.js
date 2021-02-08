const mongoose = require('mongoose');

const DebtSchema = new mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'debt',
        required: true
    },
    relatedCustomerId: {
        type: String,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('debt', DebtSchema);