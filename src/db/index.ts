import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';

const isProd = process.env.NODE_ENV === 'production'


export const db = drizzle({ 
  connection: isProd ? { 
    url: process.env.TURSO_DATABASE_URL!, 
    authToken: process.env.TURSO_AUTH_TOKEN!
  } : {
      url: 'file:./local.sqlite',
    }
});
