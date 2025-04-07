const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const Account = require('../models/Account');
const User = require('../models/User');

// @route   GET api/accounts
// @desc    Get all accounts for a user
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const accounts = await Account.find({ userId: req.user.id }).sort({ dateCreated: -1 });
    res.json(accounts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/accounts/:id
// @desc    Get account by ID
// @access  Private
router.get('/:id', auth, async (req, res) => {
  try {
    const account = await Account.findById(req.params.id);

    if (!account) return res.status(404).json({ msg: 'Account not found' });

    // Make sure user owns account
    if (account.userId.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    res.json(account);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Account not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   POST api/accounts
// @desc    Create a new account
// @access  Private
router.post(
  '/',
  [
    auth,
    [
      check('type', 'Type is required').not().isEmpty(),
      check('name', 'Name is required').not().isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { type, name, currency, initialBalance } = req.body;

    try {
      const newAccount = new Account({
        userId: req.user.id,
        type,
        name,
        currency: currency || 'USD',
        balance: initialBalance || 0
      });

      const account = await newAccount.save();

      res.json(account);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   PUT api/accounts/:id
// @desc    Update an account
// @access  Private
router.put('/:id', auth, async (req, res) => {
  const { name, isActive } = req.body;

  // Build account object
  const accountFields = {};
  if (name) accountFields.name = name;
  if (isActive !== undefined) accountFields.isActive = isActive;

  try {
    let account = await Account.findById(req.params.id);

    if (!account) return res.status(404).json({ msg: 'Account not found' });

    // Make sure user owns account
    if (account.userId.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    account = await Account.findByIdAndUpdate(
      req.params.id,
      { $set: accountFields },
      { new: true }
    );

    res.json(account);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Account not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/accounts/:id
// @desc    Delete an account
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let account = await Account.findById(req.params.id);

    if (!account) return res.status(404).json({ msg: 'Account not found' });

    // Make sure user owns account
    if (account.userId.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Account.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Account removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Account not found' });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router; 