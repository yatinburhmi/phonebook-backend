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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteContact = exports.getContactById = exports.getContact = exports.updateContact = exports.addContact = void 0;
const contactService_1 = __importDefault(require("../services/contactService"));
const contactDb_1 = __importDefault(require("../database/contactDb"));
const contactDb = new contactDb_1.default();
const contactService = new contactService_1.default(contactDb);
// create a contact
const addContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = yield req;
        const { name, phone, email } = body;
        if (name || phone) {
            res.status(400).send({ status: "Failed", data: { error: "One of the following keys is missing in req body: name, phone" } });
            return;
        }
        const contact = yield contactService.addContact(name, phone, email);
        res.status(201).send({ status: "OK", data: contact });
        return;
    }
    catch (error) {
        res.status(500).send({ status: "Failed", error: error });
    }
});
exports.addContact = addContact;
// get all the contacts 
// Todo: Add pagination, searching, sorting
const getContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contacts = yield contactService.getContacts();
        res.status(200).send({ status: "OK", data: contacts });
        return;
    }
    catch (error) {
        res.status(500).send({ status: "Failed", error: error });
    }
});
exports.getContact = getContact;
// get one contact by id
// Todo: Add a feature to get contact by name, phone number as well
const getContactById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = yield req;
        const { id } = body;
        if (!id) {
            res.status(400).send({ status: "Failed", data: { error: "Parameter :id cannot be empty" } });
            return;
        }
        const contact = yield contactService.getContactById(id);
        res.status(200).send({ status: "OK", data: contact });
    }
    catch (error) {
        res.status(500).send({ status: "Failed", data: { error: error } });
    }
});
exports.getContactById = getContactById;
const updateContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = yield req;
        const { id, name, email, phone } = body;
        if (!id) {
            res.status(400).send({ status: "Failed", data: { error: "Parameter :id cannot be empty" } });
            return;
        }
        const updatedContact = yield contactService.updateContact(id, name, phone, email);
        res.status(200).send({ status: "OK", data: updatedContact });
    }
    catch (error) {
        res.status(500).send({ status: "Failed", data: { error: error } });
    }
});
exports.updateContact = updateContact;
const deleteContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = yield req;
        const { id } = body;
        if (!id) {
            res.status(400).send({ status: "Failed", data: { error: "Parameter :id cannot be empty" } });
            return;
        }
        const deletedContact = yield contactService.deleteContact(id);
        res.status(200).send({ status: "OK", data: { message: "Contact deleted successfully" } });
    }
    catch (error) {
        res.status(500).send({ status: "Failed", data: { error: error } });
    }
});
exports.deleteContact = deleteContact;
