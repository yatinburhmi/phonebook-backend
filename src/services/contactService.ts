import ContactDB from "../database/contactDb"
import { Contact } from "@prisma/client";


class ContactService {
    constructor(private contactDb: ContactDB){};

    async addContact(name: string, phone: string, email?: string): Promise<Contact> {
        try{
            return await this.contactDb.addContact(name, phone, email);
        }catch(error){
            throw error;
        }
    }


    async getContacts() : Promise<Contact[]> {
        try{
            return await this.contactDb.getContacts();
        }
        catch(error){
            throw error;
        }
    }

    async getContactById(id: string) : Promise<Contact | null> {
        try{
            return await this.contactDb.getContactById(id);
        } catch(error){
            throw error;
        }
    }

    async updateContact(id:string, name?: string, phone?: string, email?: string) : Promise<Contact>{
        try{
            return await this.contactDb.updateContact(id, name, phone, email)
        }catch(error){
            throw error;
        }
    }

    async deleteContact(id:string): Promise<Contact>{
        try{
            return await this.contactDb.deleteContact(id);
        }catch(error){
            throw error;
        }
    }

}

export default ContactService;