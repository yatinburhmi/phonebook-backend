"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContactService {
    constructor(contactDb) {
        this.contactDb = contactDb;
    }
    ;
    async addContact(name, phone, email) {
        try {
            return await this.contactDb.addContact(name, phone, email);
        }
        catch (error) {
            throw error;
        }
    }
    async getContacts() {
        try {
            return await this.contactDb.getContacts();
        }
        catch (error) {
            throw error;
        }
    }
    async getContactById(id) {
        try {
            return await this.contactDb.getContactById(id);
        }
        catch (error) {
            throw error;
        }
    }
    async updateContact(id, name, phone, email) {
        try {
            return await this.contactDb.updateContact(id, name, phone, email);
        }
        catch (error) {
            throw error;
        }
    }
    async deleteContact(id) {
        try {
            return await this.contactDb.deleteContact(id);
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = ContactService;
//# sourceMappingURL=contactService.js.map