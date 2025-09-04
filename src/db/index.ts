import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';

export const db = drizzle({ 
  connection: (process.env.NODE_ENV === "production") ? { 
    url: process.env.TURSO_DATABASE_URL!, 
    authToken: process.env.TURSO_AUTH_TOKEN!
  } : {
      url: 'file:./local.sqlite',
    }
});
