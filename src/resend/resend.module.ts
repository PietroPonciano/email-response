import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { Resend } from "resend";
import { ResendController } from "./resend.controller.js";
import { ResendService } from "./resend.service.js";
import { EmailModule } from "../email/email.module.js";


@Module({
    imports: [ConfigModule, EmailModule],
    controllers: [ResendController],
    providers: [
        ResendService,
        {
        provide: Resend,
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => {
            return new Resend(configService.getOrThrow<string>('RESEND_API_KEY'));
        }
    }],
    exports: [ResendService],
})
export class ResendModule {}