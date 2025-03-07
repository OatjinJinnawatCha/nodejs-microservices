const memberService = require('../services/memberService');

const getAllMembers = async (req, res) => {
    try {
        const members = await memberService.getAllMembers();
        res.status(200).json(members);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to get members' });
    }
};

const getMemberById = async (req, res) => {
    try {
        const { id } = req.params;
        const member = await memberService.getMemberById(id);
        if (!member) {
            return res.status(404).json({ error: 'Member not found' });
        }
        res.status(200).json(member);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to get member' });
    }
}

const updateMember = async (req, res) => {
    try {
        // const { id } = req.params;
        const memberData = req.body;
        const updatedMember = await memberService.updateMember(memberData.id, memberData);
        res.status(200).json(updatedMember);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update member' });
    }
}

const createMember = async (req, res) => {
    try {
        const memberData = req.body;
        const newMember = await memberService.createMember(memberData);
        res.status(201).json(newMember);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create member' });
    }
}

module.exports = {
    getAllMembers,
    createMember,
    updateMember,
    getMemberById
}