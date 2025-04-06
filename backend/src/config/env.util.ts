export class Env {

    static get(key: string, required = true): string {
        const value = process.env[key];
        if (!value || value.trim() === '') {
            if (required) {
                throw new Error(`Missing required environment variable: ${key}`);
            }
            return '';
        }
        return value;
    }

    static getNumber(key: string, required = true): number {
        const value = this.get(key, required);
        const parsed = Number(value);
        if (isNaN(parsed)) {
            throw new Error(`Environment variable ${key} is not a valid number.`);
        }
        return parsed;
    }

    static getBoolean(key: string, required = true): boolean {
        const value = this.get(key, required).toLowerCase();
        return value === 'true' || value === '1';
    }

    static getOptional(key: string): string {
        return this.get(key, false);
    }

}