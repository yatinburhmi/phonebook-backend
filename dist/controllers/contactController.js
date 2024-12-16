"use strict";
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
const addContact = async (req, res) => {
    console.log("API Hit!");
    debugger;
    try {
        const { body } = await req;
        console.log("🚀 ~ addContact ~ body:", body);
        const { name, phone, email } = body;
        if (name.length === 0 || phone.length === 0) {
            console.log("Hello");
            res.status(400).send({ status: "Failed", data: { error: "One of the following keys is missing in req body: name, phone" } });
            return;
        }
        const contact = await contactService.addContact(name, phone, email);
        res.status(201).send({ status: "OK", data: contact });
        return;
    }
    catch (error) {
        res.status(500).send({ status: "Failed", error: error });
    }
};
exports.addContact = addContact;
// get all the contacts 
// Todo: Add pagination, searching, sorting
const getContact = async (req, res) => {
    try {
        const contacts = await contactService.getContacts();
        res.status(200).send({ status: "OK", data: contacts });
        return;
    }
    catch (error) {
        res.status(500).send({ status: "Failed", error: error });
    }
};
exports.getContact = getContact;
// get one contact by id
// Todo: Add a feature to get contact by name, phone number as well
const getContactById = async (req, res) => {
    try {
        const { body } = await req;
        const { id } = body;
        if (!id) {
            res.status(400).send({ status: "Failed", data: { error: "Parameter :id cannot be empty" } });
            return;
        }
        const contact = await contactService.getContactById(id);
        res.status(200).send({ status: "OK", data: contact });
    }
    catch (error) {
        res.status(500).send({ status: "Failed", data: { error: error } });
    }
};
exports.getContactById = getContactById;
const updateContact = async (req, res) => {
    try {
        const { body } = await req;
        const { id, name, email, phone } = body;
        if (!id) {
            res.status(400).send({ status: "Failed", data: { error: "Parameter :id cannot be empty" } });
            return;
        }
        const updatedContact = await contactService.updateContact(id, name, phone, email);
        res.status(200).send({ status: "OK", data: updatedContact });
    }
    catch (error) {
        res.status(500).send({ status: "Failed", data: { error: error } });
    }
};
exports.updateContact = updateContact;
const deleteContact = async (req, res) => {
    try {
        const { body } = await req;
        const { id } = body;
        if (!id) {
            res.status(400).send({ status: "Failed", data: { error: "Parameter :id cannot be empty" } });
            return;
        }
        const deletedContact = await contactService.deleteContact(id);
        res.status(200).send({ status: "OK", data: { message: "Contact deleted successfully" } });
    }
    catch (error) {
        res.status(500).send({ status: "Failed", data: { error: error } });
    }
};
exports.deleteContact = deleteContact;
//# sourceMappingURL=contactController.js.map