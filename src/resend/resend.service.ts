import { Injectable } from "@nestjs/common";
import { Resend } from "resend";

@Injectable()
export class ResendService {
    constructor(private readonly resend: Resend) {}

    async getReceivedEmail(emailId: string) {
        const { data, error } =
            await this.resend.emails.receiving.get(emailId);

        if (error) {
            throw new Error(
                `Failed to fetch received email: ${error.message}`,
            );
        }

        return data;
    }
}