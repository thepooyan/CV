import { isProd } from '@/lib/utils';
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';


export const db = drizzle({ 
  connection: isProd() ? { 
    url: process.env.TURSO_DATABASE_URL!, 
    authToken: process.env.TURSO_AUTH_TOKEN!
  } : {
      url: 'file:./local.sqlite',
    }
});
