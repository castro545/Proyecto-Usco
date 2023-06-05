// src/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreditosModule } from './creditos/creditos.module';

@Module({
  imports: [CreditosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
