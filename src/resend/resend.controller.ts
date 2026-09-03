import { Body, Controller, Post } from '@nestjs/common';
import { ResendService } from './resend.service.js';
import { EmailService } from '../email/email.service.js';
import { ResendWebhookDto } from './dto/resend-webhook.dto.js';


@Controller('webhooks/resend')
export class ResendController {
  constructor(
    private readonly resendService: ResendService,
    private readonly emailsService: EmailService,
  ) {}

  @Post()
  async handleWebhook(@Body() body: ResendWebhookDto) {
    if (body.type !== 'email.received') {
      return {
        received: true,
      };
    }

    const receivedEmail = await this.resendService.getReceivedEmail(
      body.data.email_id,
    );

    await this.emailsService.createFromResend({
      messageId: body.data.message_id,
      from: body.data.from,
      to: body.data.to[0],
      subject: body.data.subject,
      text: receivedEmail.text,
      html: receivedEmail.html ?? null,
    });

    return {
      received: true,
    };
  }
}