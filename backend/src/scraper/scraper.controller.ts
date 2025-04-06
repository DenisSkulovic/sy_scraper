import { Controller, Post, Body, Get } from '@nestjs/common';
import { ScraperService } from './scraper.service';
import { ScrapeRequestDto } from './dto/scrape-request.dto';

@Controller('scraper')
export class ScraperController {
    constructor(private readonly scraperService: ScraperService) { }

    @Post()
    async triggerScrape(@Body() dto: ScrapeRequestDto) {
        console.log("[ScraperController - triggerScrape] dto", dto);
        const result = await this.scraperService.triggerScraping(dto);
        console.log("[ScraperController - triggerScrape] result", result);
        return result;
    }

    @Get()
    async getResults() {
        return this.scraperService.getAllResults();
    }
}