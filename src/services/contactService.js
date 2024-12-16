"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class ContactService {
    constructor(contactDb) {
        this.contactDb = contactDb;
    }
    ;
    addContact(name, phone, email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.contactDb.addContact(name, phone, email);
            }
            catch (error) {
                throw error;
            }
        });
    }
    getContacts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.contactDb.getContacts();
            }
            catch (error) {
                throw error;
            }
        });
    }
    getContactById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.contactDb.getContactById(id);
            }
            catch (error) {
                throw error;
            }
        });
    }
    updateContact(id, name, phone, email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.contactDb.updateContact(id, name, phone, email);
            }
            catch (error) {
                throw error;
            }
        });
    }
    deleteContact(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.contactDb.deleteContact(id);
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = ContactService;
