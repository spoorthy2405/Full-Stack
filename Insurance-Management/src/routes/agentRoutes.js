// const express = require('express');
// const router = express.Router();
// const agentCtrl = require('../controllers/agentController');

// router.post('/', agentCtrl.createAgent);
// router.get('/', agentCtrl.getAgents);
// router.get('/:agentId', agentCtrl.getAgentById);
// router.put('/:agentId', agentCtrl.updateAgent);
// router.delete('/:agentId', agentCtrl.deleteAgent);

// module.exports = router;

const express = require('express');
const router = express.Router();

const {
  createAgent,
  getAgents,
  getAgentById,
  updateAgent,
  deleteAgent
} = require('../controllers/agentController');

// /api/agents
router.route('/')
  .get(getAgents)       // Get all agents
  .post(createAgent);  // Create agent

// /api/agents/:agentId
router.route('/:agentId')
  .get(getAgentById)   // Get single agent
  .put(updateAgent)   // Update agent
  .delete(deleteAgent); // Delete agent

module.exports = router;

