"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class ContactDB {
    async addContact(name, phone, email) {
        try {
            return await prisma.contact.create({
                data: {
                    name, phone, email
                },
            });
        }
        catch (error) {
            throw { status: 500, message: error };
        }
    }
    async getContacts() {
        try {
            return await prisma.contact.findMany();
        }
        catch (error) {
            throw { status: 500, message: error };
        }
    }
    async getContactById(id) {
        try {
            return await prisma.contact.findUnique({
                where: {
                    id: id
                }
            });
        }
        catch (error) {
            throw { status: 500, message: error };
        }
    }
    async updateContact(id, name, phone, email) {
        try {
            return await prisma.contact.update({
                where: {
                    id: id
                }, data: {
                    name, phone, email
                }
            });
        }
        catch (error) {
            throw { status: 500, message: error };
        }
    }
    async deleteContact(id) {
        try {
            return await prisma.contact.delete({
                where: {
                    id: id
                }
            });
        }
        catch (error) {
            throw { status: 500, message: error };
        }
    }
}
exports.default = ContactDB;
//# sourceMappingURL=contactDb.js.map