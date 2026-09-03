import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Email } from "./entities/email.entity.js";
import { Repository } from "typeorm";
import { EmailResponseDto } from "./dto/email-response.dto.js";
import { CreateEmailDto } from "./dto/create-email.dto.js";
import { CreateReceivedEmailDto } from "../resend/dto/create-received-email.dto.js";



@Injectable()
export class EmailService {
    constructor(
        @InjectRepository(Email)
        private readonly emailRepository: Repository<Email>,
    ) { }

    async create(data: CreateEmailDto): Promise<EmailResponseDto> {
        const email = this.emailRepository.create({
            from: data.from,
            to: data.to,
            subject: data.subject,
            text: data.text,
            html: data.html ?? null,
        });

        const savedEmail = await this.emailRepository.save(email);
        return new EmailResponseDto(savedEmail);
    }

    async createFromResend(
        data: CreateReceivedEmailDto,
    ): Promise<EmailResponseDto> {
        const email = this.emailRepository.create({
            messageId: data.messageId,
            from: data.from,
            to: data.to,
            subject: data.subject,
            text: data.text ?? '',
            html: data.html ?? null,
        });

        const savedEmail = await this.emailRepository.save(email);

        return new EmailResponseDto(savedEmail);
    }

    async findAll(
        page: number = 1,
        limit: number = 10,
    ): Promise<{
        data: EmailResponseDto[];
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        }
    }> {
        const skip = (page - 1) * limit;
        const [emails, total] = await this.emailRepository.findAndCount({
            skip,
            take: limit,
            order: { receivedAt: 'DESC' },
        });

        return {
            data: emails.map(email => new EmailResponseDto(email)),
            meta: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
            }
        };
    }

    async findById(id: string): Promise<EmailResponseDto | null> {
        const email = await this.emailRepository.findOne({ where: { id } });
        return email ? new EmailResponseDto(email) : null;
    }
}