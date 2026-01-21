const Agent = require('../models/Agent');

// CREATE agent
exports.createAgent = async (req, res) => {
  try {
    const agent = await Agent.create(req.body);
    res.status(201).json({ success: true, data: agent });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// READ all agents
exports.getAgents = async (req, res) => {
  const agents = await Agent.find();
  res.json({ success: true, data: agents });
};

// READ single agent
exports.getAgentById = async (req, res) => {
  const agent = await Agent.findOne({ agentId: req.params.agentId });
  if (!agent) {
    return res.status(404).json({ success: false, message: 'Agent not found' });
  }
  res.json({ success: true, data: agent });
};

// UPDATE agent
exports.updateAgent = async (req, res) => {
  const agent = await Agent.findOneAndUpdate(
    { agentId: req.params.agentId },
    req.body,
    { new: true }
  );
  res.json({ success: true, data: agent });
};

// DELETE agent
exports.deleteAgent = async (req, res) => {
  await Agent.findOneAndDelete({ agentId: req.params.agentId });
  res.json({ success: true, message: 'Agent deleted' });
};
