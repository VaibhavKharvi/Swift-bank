const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  accountNumber: {
    type: String,
    required: true,
    unique: true
  },
  type: {
    type: String,
    required: true,
    enum: ['checking', 'savings', 'credit']
  },
  balance: {
    type: Number,
    default: 0
  },
  name: {
    type: String,
    required: true
  },
  currency: {
    type: String,
    default: 'USD'
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    default: true
  },
  limit: {
    type: Number,
    default: 0 // Used for credit accounts
  }
});

// Generate unique account number if not provided
AccountSchema.pre('save', async function(next) {
  if (this.isNew && !this.accountNumber) {
    // Generate a random 10-digit account number
    this.accountNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
  }
  next();
});

module.exports = mongoose.model('Account', AccountSchema); 