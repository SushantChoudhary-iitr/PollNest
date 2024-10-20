const mongoose = require('mongoose');

// Define the Vote schema
const VoteSchema = new mongoose.Schema({
  candidateId: {
    type: Number,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Referencing the User model
    required: true,
  },
});

module.exports = mongoose.model('Vote', VoteSchema);
