import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module.js';
import { EmailModule } from './email/email.module.js';
import { ResendModule } from './resend/resend.module.js';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    EmailModule,
    ResendModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
