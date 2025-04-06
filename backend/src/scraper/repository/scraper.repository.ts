import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ScrapeResult, ScrapeResultDocument } from '../schema/scrape-result.schema';

@Injectable()
export class ScraperRepository {
    constructor(
        @InjectModel(ScrapeResult.name)
        private readonly model: Model<ScrapeResultDocument>,
    ) { }

    async save(data: ScrapeResult): Promise<ScrapeResult> {
        console.log("[ScraperRepository - save] data", data);
        const created = new this.model(data);
        console.log("[ScraperRepository - save] created", created);
        return created.save();
    }

    async findAll(): Promise<ScrapeResult[]> {
        console.log("[ScraperRepository - findAll] finding all");
        const results = await this.model.find().sort({ timestamp: -1 }).lean();
        console.log("[ScraperRepository - findAll] results", results);
        return results;
    }
}
