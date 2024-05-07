const sql = require('mssql');

const dbConfig = require('./Config/dbconfig.json').development;

const config = {
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    server: dbConfig.URI,
    database: dbConfig.DB,
    pool: {
        max: 10, // Maximum number of connections in pool
        min: 0, // Minimum number of connections in pool
        idleTimeoutMillis: 30000 // Close idle connections after 30 seconds
    },
    options: {
        encrypt: true, // For Azure SQL. Use "trustServerCertificate: true" for local development with self-signed certificates
        trustServerCertificate: true // Change to true if on a local/self-signed cert
    }
};

// Ensure the global pool is available throughout your application
global.pool = new sql.ConnectionPool(config);
global.pool.connect(err => {
    if (err) {
        console.error('Database Connection Failed', err);
    } else {
        console.log('Connected to Database');
    }
});
