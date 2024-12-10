const knex = require('knex');
require('dotenv').config();

const HOST = process.env.DB_HOST;
const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const DATABASE = process.env.DB_NAME;

const config = {
    client: 'mysql2', // or 'mysql', 'sqlite3', etc.
    connection: {
        host: HOST,
        user: USER,
        password: PASSWORD,
        database: DATABASE
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations'
    }
};

module.exports = {
    ...config
};