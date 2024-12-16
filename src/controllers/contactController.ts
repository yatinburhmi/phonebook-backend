import { Request, Response } from "express";
import ContactService from "../services/contactService";
import ContactDB from "../database/contactDb";

const contactDb = new ContactDB();
const contactService = new ContactService(contactDb);

// create a contact
const addContact = async (req: Request, res: Response) => {
    console.log("API Hit!")
    debugger;
   try{
    const { body } = await req;
    console.log("🚀 ~ addContact ~ body:", body)
    const {name, phone, email} = body;
    if(name.length === 0 || phone.length === 0){
        console.log("Hello")
        res.status(400).send({status:"Failed", data:{ error: "One of the following keys is missing in req body: name, phone"}});
        return;
    }
    const contact = await contactService.addContact(name, phone, email)
    res.status(201).send({status: "OK", data: contact})
    return;
   }catch(error){
    res.status(500).send({status:"Failed", error:error})
   }
}

// get all the contacts 
// Todo: Add pagination, searching, sorting
const getContact = async (req: Request, res: Response) => {
    try{
        const contacts = await contactService.getContacts();
        res.status(200).send({status:"OK", data:contacts});
        return;
    }catch(error){
    res.status(500).send({status:"Failed", error:error})
   }
}

// get one contact by id
// Todo: Add a feature to get contact by name, phone number as well
const getContactById = async (req: Request, res: Response) => {
    try{
        const {body} = await req;
        const {id} = body;
        if(!id){
            res.status(400).send({status:"Failed", data:{error:"Parameter :id cannot be empty"}});
            return;
        }
        const contact = await contactService.getContactById(id);
        res.status(200).send({status:"OK", data:contact});
    }catch(error){
        res.status(500).send({status:"Failed", data:{error:error}});
    }
}

const updateContact = async(req: Request, res: Response) => {
    try{
        const {body} = await req;
        const {id, name, email, phone} = body;
        if(!id){
            res.status(400).send({status:"Failed", data:{error:"Parameter :id cannot be empty"}});
            return;
        }
        const updatedContact = await contactService.updateContact(id, name, phone, email);
        res.status(200).send({status: "OK", data:updatedContact});
    }catch(error){
        res.status(500).send({status:"Failed", data:{error:error}});
    }
}

const deleteContact = async(req: Request, res:Response) => {
    try{
        const {body} = await req;
        const {id} = body;
        if(!id){
            res.status(400).send({status:"Failed", data:{error:"Parameter :id cannot be empty"}});
            return;
        }
        const deletedContact = await contactService.deleteContact(id);
        res.status(200).send({status: "OK", data:{message:"Contact deleted successfully"}});
    }catch(error){
        res.status(500).send({status:"Failed", data:{error:error}});
    }
}

export{
    addContact, updateContact, getContact, getContactById, deleteContact
}
