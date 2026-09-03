import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { EmailService } from "./email.service.js";



@Controller('email')
export class EmailController {
    constructor(private readonly emailService: EmailService){}

    @Post()
    create(@Body() body: any) {
        return this.emailService.create(body);
    }

    @Get()
    findAll(
        @Query('page') page: number = 1,
        @Query('limit') limit: number = 10,
    ) {
        return this.emailService.findAll(
            page, 
            limit);
    }

    @Get(':id')
    findById(@Body('id') id: string) {
        return this.emailService.findById(id);
    }
}