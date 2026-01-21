const mongoose = require('mongoose');

const agentSchema = new mongoose.Schema({
  agentId: {
    type: Number,
    required: true,
    unique: true
  },
  agentName: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
  city: {
    type: String
  }
}, { timestamps: true });

module.exports = mongoose.model('Agent', agentSchema);
