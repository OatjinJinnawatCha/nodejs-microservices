const express = require('express');
const router = express.Router();
const memberController = require('../controllers/memberController');

router.get('/getAll', memberController.getAllMembers);
router.get('/getMember/:id', memberController.getMemberById);
router.post('/create', memberController.createMember);
router.put('/update', memberController.updateMember);

module.exports = router;