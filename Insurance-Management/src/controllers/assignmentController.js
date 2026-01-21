const Assignment = require('../models/AgentPolicyAssignment');

// CREATE assignment (policy sold)
exports.createAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.create(req.body);
    res.status(201).json({ success: true, data: assignment });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// READ all assignments
exports.getAssignments = async (req, res) => {
  const assignments = await Assignment.find();
  res.json({ success: true, data: assignments });
};

// READ assignments by agent
exports.getAssignmentsByAgent = async (req, res) => {
  const assignments = await Assignment.find({ agentId: req.params.agentId });
  res.json({ success: true, data: assignments });
};

// UPDATE assignment status
exports.updateAssignment = async (req, res) => {
  const assignment = await Assignment.findOneAndUpdate(
    { agentAssignmentId: req.params.assignmentId },
    req.body,
    { new: true }
  );
  res.json({ success: true, data: assignment });
};

// DELETE assignment
exports.deleteAssignment = async (req, res) => {
  await Assignment.findOneAndDelete({ agentAssignmentId: req.params.assignmentId });
  res.json({ success: true, message: 'Assignment deleted' });
};
