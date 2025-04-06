import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';

import { ScraperController } from './scraper.controller';
import { ScraperService } from './scraper.service';
import { ScraperRepository } from './repository/scraper.repository';

import { ScrapeResult, ScrapeResultSchema } from './schema/scrape-result.schema';

@Module({
    imports: [
        HttpModule,
        MongooseModule.forFeature([
            { name: ScrapeResult.name, schema: ScrapeResultSchema },
        ]),
    ],
    controllers: [ScraperController],
    providers: [ScraperService, ScraperRepository],
})

export class ScraperModule { }