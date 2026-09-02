import { Body, Controller, Get, Post } from "@nestjs/common";
import { EmailService } from "./email.service.js";



@Controller('email')
export class EmailController {
    constructor(private readonly emailService: EmailService){}

    @Post()
    create(@Body() body: any) {
        return this.emailService.create(body);
    }

    @Get()
    findAll() {
        return this.emailService.findAll();
    }

    @Get(':id')
    findById(@Body('id') id: string) {
        return this.emailService.findById(id);
    }
}