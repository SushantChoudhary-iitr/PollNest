const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/Users'); // Make sure your User schema is imported correctly
const router = express.Router();

// POST route to register the user
router.post('/api/signup', async (req, res) => {
  const { name, email, walletAddress, password } = req.body;

  try {
    // Check if the user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Hash the password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user instance
    user = new User({
      name,
      email,
      metamaskWallet: walletAddress,
      password: hashedPassword
    });

    // Save the user to the database
    await user.save();
    res.status(201).json({ msg: 'User registered successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
