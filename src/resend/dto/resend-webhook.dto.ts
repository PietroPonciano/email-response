export class ResendReceivedEmailDto {

  email_id: string;

  message_id: string;

  from: string;

  to: string[];

  subject: string;

  received_for: string[];

}



export class ResendWebhookDto {

  type: string;

  created_at: string;

  data: ResendReceivedEmailDto;

}