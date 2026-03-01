import mysql from 'mysql2/promise';

export class DbHandler {
    private connection: any;

    async connect() {
        this.connection = await mysql.createConnection({
            host: process.env.DB_HOST || 'localhost',
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASSWORD || '',
            database: process.env.DB_DATABSE || 'orangehrm'
        });
    }
    async executeQuery(query: string, params: any[]) {
        const [rows] = await this.connection.execute(query, params);
        return rows
    }
    async close() {
        await this.connection.end()
    }


}

