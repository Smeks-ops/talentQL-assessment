import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AgeCalculatorModule } from './age-calculator/age-calculator.module';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ThrottlerModule.forRoot({
      limit: 3,
    }),
    AgeCalculatorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
