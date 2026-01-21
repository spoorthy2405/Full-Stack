// const express = require('express');
// const router = express.Router();
// const assignmentCtrl = require('../controllers/assignmentController');

// router.post('/', assignmentCtrl.createAssignment);
// router.get('/', assignmentCtrl.getAssignments);
// router.get('/agent/:agentId', assignmentCtrl.getAssignmentsByAgent);
// router.put('/:assignmentId', assignmentCtrl.updateAssignment);
// router.delete('/:assignmentId', assignmentCtrl.deleteAssignment);

// module.exports = router;


const express = require('express');
const router = express.Router();

const {
  createAssignment,
  getAssignments,
  getAssignmentsByAgent,
  updateAssignment,
  deleteAssignment
} = require('../controllers/assignmentController');

// /api/assignments
router.route('/')
  .get(getAssignments)       // Get all assignments
  .post(createAssignment);  // Create assignment (policy sold)

// /api/assignments/agent/:agentId
router.route('/agent/:agentId')
  .get(getAssignmentsByAgent); // Get assignments for an agent

// /api/assignments/:assignmentId
router.route('/:assignmentId')
  .put(updateAssignment)    // Update assignment
  .delete(deleteAssignment);// Delete assignment

module.exports = router;
