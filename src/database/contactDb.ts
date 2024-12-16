import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class ContactDB {
    async addContact(name: string, phone: string, email?: string){
       try{
        return await prisma.contact.create({
            data:{
                name, phone, email
            },
        })
       }catch(error){
        throw { status: 500, message: error };
       }
    }

    async getContacts(){
        try{
            return await prisma.contact.findMany();
        }catch(error){
        throw { status: 500, message: error };
       }
    }

    async getContactById(id: string){
        try{
            return await prisma.contact.findUnique({
                where:{
                    id: id
                }
            }
            )
        }catch(error){
            throw {status: 500, message: error}
        }
    }

    async updateContact(id: string, name?: string, phone?: string, email?: string){
        try{
            return await prisma.contact.update({
                where:{
                    id: id
                }, data:{
                    name, phone, email
                }
            })
        }catch(error){
            throw {status: 500, message: error}
        }
    }

    async deleteContact(id: string){
        try{
            return await prisma.contact.delete({
                where: {
                    id: id
                }
            })
        }catch(error){
            throw {status: 500, message: error}
        }
    }


}

export default ContactDB;