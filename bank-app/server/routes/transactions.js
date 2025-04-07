const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const Transaction = require('../models/Transaction');
const Account = require('../models/Account');
const mongoose = require('mongoose');

// @route   GET api/transactions
// @desc    Get all transactions for a user
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.user.id })
      .sort({ date: -1 })
      .populate('accountId', 'name accountNumber');
      
    res.json(transactions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/transactions/account/:accountId
// @desc    Get all transactions for a specific account
// @access  Private
router.get('/account/:accountId', auth, async (req, res) => {
  try {
    const account = await Account.findById(req.params.accountId);
    
    if (!account) {
      return res.status(404).json({ msg: 'Account not found' });
    }
    
    // Make sure user owns account
    if (account.userId.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }
    
    const transactions = await Transaction.find({ 
      accountId: req.params.accountId 
    }).sort({ date: -1 });
    
    res.json(transactions);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Account not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   POST api/transactions/deposit
// @desc    Make a deposit to an account
// @access  Private
router.post(
  '/deposit',
  [
    auth,
    [
      check('accountId', 'Account ID is required').not().isEmpty(),
      check('amount', 'Amount is required and must be a positive number').isFloat({ min: 0.01 }),
      check('description', 'Description is required').not().isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { accountId, amount, description, category } = req.body;

    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      // Verify account belongs to user
      const account = await Account.findById(accountId).session(session);
      
      if (!account) {
        await session.abortTransaction();
        session.endSession();
        return res.status(404).json({ msg: 'Account not found' });
      }
      
      if (account.userId.toString() !== req.user.id) {
        await session.abortTransaction();
        session.endSession();
        return res.status(401).json({ msg: 'Not authorized' });
      }

      // Create transaction
      const newTransaction = new Transaction({
        userId: req.user.id,
        accountId,
        type: 'credit',
        amount,
        description,
        category: category || 'Deposit'
      });

      const transaction = await newTransaction.save({ session });

      // Update account balance
      account.balance += amount;
      await account.save({ session });

      await session.commitTransaction();
      session.endSession();

      res.json({ transaction, newBalance: account.balance });
    } catch (err) {
      await session.abortTransaction();
      session.endSession();
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   POST api/transactions/withdraw
// @desc    Make a withdrawal from an account
// @access  Private
router.post(
  '/withdraw',
  [
    auth,
    [
      check('accountId', 'Account ID is required').not().isEmpty(),
      check('amount', 'Amount is required and must be a positive number').isFloat({ min: 0.01 }),
      check('description', 'Description is required').not().isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { accountId, amount, description, category } = req.body;

    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      // Verify account belongs to user
      const account = await Account.findById(accountId).session(session);
      
      if (!account) {
        await session.abortTransaction();
        session.endSession();
        return res.status(404).json({ msg: 'Account not found' });
      }
      
      if (account.userId.toString() !== req.user.id) {
        await session.abortTransaction();
        session.endSession();
        return res.status(401).json({ msg: 'Not authorized' });
      }

      // Check if account has sufficient funds
      if (account.balance < amount) {
        await session.abortTransaction();
        session.endSession();
        return res.status(400).json({ msg: 'Insufficient funds' });
      }

      // Create transaction
      const newTransaction = new Transaction({
        userId: req.user.id,
        accountId,
        type: 'debit',
        amount,
        description,
        category: category || 'Withdrawal'
      });

      const transaction = await newTransaction.save({ session });

      // Update account balance
      account.balance -= amount;
      await account.save({ session });

      await session.commitTransaction();
      session.endSession();

      res.json({ transaction, newBalance: account.balance });
    } catch (err) {
      await session.abortTransaction();
      session.endSession();
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   POST api/transactions/transfer
// @desc    Transfer between accounts
// @access  Private
router.post(
  '/transfer',
  [
    auth,
    [
      check('fromAccountId', 'Source account ID is required').not().isEmpty(),
      check('toAccountId', 'Destination account ID is required').not().isEmpty(),
      check('amount', 'Amount is required and must be a positive number').isFloat({ min: 0.01 }),
      check('description', 'Description is required').not().isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fromAccountId, toAccountId, amount, description } = req.body;

    if (fromAccountId === toAccountId) {
      return res.status(400).json({ msg: 'Cannot transfer to the same account' });
    }

    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      // Verify source account belongs to user
      const sourceAccount = await Account.findById(fromAccountId).session(session);
      
      if (!sourceAccount) {
        await session.abortTransaction();
        session.endSession();
        return res.status(404).json({ msg: 'Source account not found' });
      }
      
      if (sourceAccount.userId.toString() !== req.user.id) {
        await session.abortTransaction();
        session.endSession();
        return res.status(401).json({ msg: 'Not authorized' });
      }

      // Verify destination account
      const destAccount = await Account.findById(toAccountId).session(session);
      
      if (!destAccount) {
        await session.abortTransaction();
        session.endSession();
        return res.status(404).json({ msg: 'Destination account not found' });
      }

      // Check if account has sufficient funds
      if (sourceAccount.balance < amount) {
        await session.abortTransaction();
        session.endSession();
        return res.status(400).json({ msg: 'Insufficient funds' });
      }

      // Create withdrawal transaction
      const withdrawalTx = new Transaction({
        userId: req.user.id,
        accountId: fromAccountId,
        type: 'transfer',
        amount,
        description: `${description} (Transfer to ${destAccount.name})`,
        category: 'Transfer',
        recipientAccountId: toAccountId
      });

      await withdrawalTx.save({ session });

      // Create deposit transaction
      const depositTx = new Transaction({
        userId: req.user.id,
        accountId: toAccountId,
        type: 'transfer',
        amount,
        description: `${description} (Transfer from ${sourceAccount.name})`,
        category: 'Transfer',
        recipientAccountId: fromAccountId
      });

      await depositTx.save({ session });

      // Update account balances
      sourceAccount.balance -= amount;
      await sourceAccount.save({ session });

      destAccount.balance += amount;
      await destAccount.save({ session });

      await session.commitTransaction();
      session.endSession();

      res.json({
        message: 'Transfer successful',
        sourceAccount: {
          id: sourceAccount._id,
          newBalance: sourceAccount.balance
        },
        destinationAccount: {
          id: destAccount._id,
          newBalance: destAccount.balance
        }
      });
    } catch (err) {
      await session.abortTransaction();
      session.endSession();
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router; 