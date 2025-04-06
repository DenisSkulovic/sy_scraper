import { Env } from './env.util';

export const MONGO_HOST = Env.get('MONGO_HOST');
export const MONGO_PORT = Env.get('MONGO_PORT');
export const MONGO_DB = Env.get('MONGO_DB');

console.log("MONGO_HOST", MONGO_HOST);
console.log("MONGO_PORT", MONGO_PORT);
console.log("MONGO_DB", MONGO_DB);

export const MONGO_URI = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`;

console.log("MONGO_URI", MONGO_URI);