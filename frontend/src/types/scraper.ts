export interface ScrapeRequest {
    url: string;
}

export interface ScrapeResult {
    url: string;
    domains: string[];
    urls: string[];
    timestamp: string;
}
