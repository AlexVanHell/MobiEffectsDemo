
// This will load the environment variables from the file .env
require('dotenv').config({ path: '.env' });

// And these variables will be appended into procces.env
const env = process.env;

// These are the main settings for my app
export const settings = {
  db: {
    host: env.DB_HOST,
    port: env.DB_PORT,
    name: env.DB_NAME,
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD
  }
};

console.log(settings);