import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { ScraperRepository } from './repository/scraper.repository';
import { ScrapeRequestDto } from './dto/scrape-request.dto';
import { ScrapeResultDto } from './dto/scrape-result.dto';

@Injectable()
export class ScraperService {
    constructor(
        private readonly http: HttpService,
        private readonly repository: ScraperRepository,
    ) { }

    async triggerScraping(dto: ScrapeRequestDto): Promise<ScrapeResultDto> {
        try {
            console.log("[ScraperService - triggerScraping] dto", dto);
            const response = await lastValueFrom(
                this.http.post<ScrapeResultDto>('http://scraper:8000/scrape', dto),
            );
            console.log("[ScraperService - triggerScraping] response", response);

            // Save to DB for tracking purposes
            await this.repository.save(response.data as any);
            console.log("[ScraperService - triggerScraping] saved to DB", response.data);
            return response.data;
        } catch (err) {
            console.log("[ScraperService - triggerScraping] error", err);
            throw new HttpException(
                `Scraper service failed: ${err.message}`,
                HttpStatus.BAD_GATEWAY,
            );
        }
    }

    async getAllResults(): Promise<ScrapeResultDto[]> {
        const rawResults = await this.repository.findAll();
        console.log("[ScraperService - getAllResults] rawResults", rawResults);
        const results = rawResults.map((r) => ({
            url: r.url,
            domains: r.domains,
            urls: r.urls,
            timestamp: r.timestamp.toISOString(),
        }));

        console.log("[ScraperService - getAllResults] results", results);
        return results;
    }
}