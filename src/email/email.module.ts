import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Email } from "./entities/email.entity.js";
import { EmailController } from "./email.controller.js";
import { EmailService } from "./email.service.js";



@Module({
  imports: [ TypeOrmModule.forFeature([Email]) ],
  controllers: [EmailController],
  providers: [EmailService],
  exports: [EmailService],
})
export class EmailModule {}