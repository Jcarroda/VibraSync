// models/Comment.js

const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  userId: {
    type: String, // ID proporcionado por Clerk
    required: true,
  },
  username: {
    type: String, // Visible en el chat
    required: true,
  },
  message: {
    type: String,
    required: true,
    maxlength: 1000, // limite opcional
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Comment', commentSchema);
