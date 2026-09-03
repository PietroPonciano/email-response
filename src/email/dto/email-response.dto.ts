import { Email } from "../entities/email.entity.js";


export class EmailResponseDto {
    id: string;
    subject: string;
    from: string;
    text: string;
    html: string | null;
    receivedAt: Date;
    status: string;

    constructor(email: Email){
        this.id = email.id;
        this.subject = email.subject;
        this.from = email.from;
        this.text = email.text;
        this.html = email.html;
        this.receivedAt = email.receivedAt;
        this.status = email.status;
    }
}