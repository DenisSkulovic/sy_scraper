import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ScrapeResult {
    @Prop()
    url: string;

    @Prop({ type: [String] })
    domains: string[];

    @Prop({ type: [String] })
    urls: string[];

    @Prop()
    timestamp: Date;
}

export type ScrapeResultDocument = ScrapeResult & Document;
export const ScrapeResultSchema = SchemaFactory.createForClass(ScrapeResult);
