const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
});

// ✅ Only define the model if not already defined
module.exports = mongoose.models.User || mongoose.model('User', userSchema);
