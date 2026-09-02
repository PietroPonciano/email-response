import { Email } from "../entities/email.entity.js";


export class EmailResponseDto {
    id: string;
    subject: string;
    from: string;
    body: string;
    receivedAt: Date;
    status: string;

    constructor(email: Email){
        this.id = email.id;
        this.subject = email.subject;
        this.from = email.from;
        this.body = email.body;
        this.receivedAt = email.receivedAt;
        this.status = email.status;
    }
}