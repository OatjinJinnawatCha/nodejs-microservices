const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all members
const getAllMembers = async () => {
    return (await prisma.member.findMany({ orderBy: { id: 'asc' } }));
}

// Get member by ID
const getMemberById = async (id) => {
    return prisma.member.findUnique({
        where: { id: parseInt(id) }, // Ensure id is parsed as an integer
    });
};

// Update member by ID
const updateMember = async (id, memberData) => {
    return prisma.member.update({ where: { id }, data: memberData });
}

// Create new member
const createMember = async (memberData) => {
    return prisma.member.create({ data: memberData });
}

module.exports = {
    getAllMembers,
    createMember,
    updateMember,
    getMemberById
}