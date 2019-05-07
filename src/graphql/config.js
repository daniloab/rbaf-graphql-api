import path from 'path'
import dotenv from 'dotenv'

const root = path.join.bind(this, __dirname, '../')

const ENV = process.env

// Database Settings
const dBdevelopment = ENV.MONGO_URL || 'mongodb://localhost/database'
const dBproduction = ENV.MONGO_URL || 'mongodb://localhost/database'

// Test Database Settings
// const test = 'mongodb://localhost/awesome-test';

// Export DB Settings
export const databaseConfig = ENV.NODE_ENV === 'production' ? dBproduction : dBdevelopment;

// Export GraphQL Server settings
export const graphqlPort = ENV.GRAPHQL_PORT || 9001;
export const jwtSecret = ENV.JWT_KEY || 'jwt_secret';