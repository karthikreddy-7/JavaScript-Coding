import { MessagesRepository } from "./messages.repository";

export class MessagesService{
    messagesRepo : MessagesRepository;
    constructor(){
        // service is creating it's own dependencies
        //only for making it as scratch purpose.
        // in real Apps, DI (injection will be done).
        this.messagesRepo=new MessagesRepository();
    }

    findOne(id:string){
        return this.messagesRepo.findOne(id);
    }

    findAll(){
        return this.messagesRepo.findAll();
    }

    create(content:string){
        return this.messagesRepo.create(content);
    }

}