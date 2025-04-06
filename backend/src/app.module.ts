import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { ScraperModule } from './scraper/scraper.module';
import { MONGO_URI } from './config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(MONGO_URI),
    ScraperModule,
  ],
})

export class AppModule { }