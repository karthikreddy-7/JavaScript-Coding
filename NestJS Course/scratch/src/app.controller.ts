import { Controller,Get } from "@nestjs/common";

@Controller('/app') //decorator
export class AppController {
    @Get('/asdf')
    getRootRoute(){
        return 'Hi there, this is karthik!';
    }

    @Get('/bye')
    getByeThere(){
        return 'bye There !'
    }
}