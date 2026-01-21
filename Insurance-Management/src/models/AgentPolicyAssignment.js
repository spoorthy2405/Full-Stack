const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  agentAssignmentId: {
    type: Number,
    required: true,
    unique: true
  },
  agentId: {
    type: Number,
    required: true
  },
  policyCode: {
    type: String,
    required: true
  },
  policyHolderId: {
    type: Number,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date
  },
  assignmentStatus: {
    type: String,
    enum: ['Active', 'Expired', 'Cancelled'],
    default: 'Active'
  }
}, { timestamps: true });

module.exports = mongoose.model('AgentPolicyAssignment', assignmentSchema);
