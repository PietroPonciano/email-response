import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Email } from "./entities/email.entity.js";
import { Repository } from "typeorm";
import { EmailResponseDto } from "./dto/email-response.dto.js";
import { CreateEmailDto } from "./dto/create-email.dto.js";



@Injectable()
export class EmailService {
    constructor(
        @InjectRepository(Email)
        private readonly emailRepository: Repository<Email>,
    ) { }

    private generateMessageId(): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        let randomPart = '';

        for (let i = 0; i < 5; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomPart += characters[randomIndex];
        }

        return `msg-${randomPart}`;
    }

    async create(data: CreateEmailDto): Promise<EmailResponseDto> {
        const email = this.emailRepository.create({ ...data, messageId: this.generateMessageId() });

        const savedEmail = await this.emailRepository.save(email);
        return new EmailResponseDto(savedEmail);
    }

    async findAll(): Promise<EmailResponseDto[]> {
        const emails = await this.emailRepository.find({
            order: {
                receivedAt: "DESC",
            },
        });
        return emails.map((email) => new EmailResponseDto(email));
    }

    async findById(id: string): Promise<EmailResponseDto | null> {
        const email = await this.emailRepository.findOne({ where: { id } });
        return email ? new EmailResponseDto(email) : null;
    }
}