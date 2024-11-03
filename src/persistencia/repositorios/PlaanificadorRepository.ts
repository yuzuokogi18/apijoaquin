// repositorios/PlanificadorRepository.ts
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import { Planificador } from '../models/Planificador';

dotenv.config();

export class PlanificadorRepository {
    private connection: mysql.Pool;

    constructor() {
        this.connection = mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            database: process.env.DB_DATABASE,
            password: process.env.DB_PASSWORD,
            waitForConnections: true,
            connectionLimit: 10,
        });
    }
    async getAllPlanificadores(): Promise<Planificador[] | null> {
        const [rows] = await this.connection.execute('SELECT * FROM planificador') as any[]; // Fuerza a `rows` como un array de cualquier tipo
        return rows.map((row: any) => new Planificador(
            row.id,
            row.name,
            row.details,
            row.start_date,
            row.end_date,
            row.start_time,
            row.end_time
        ));
    }
    
    
    

    async getPlanificadorById(id: number): Promise<Planificador | null> {
        const [rows]: any = await this.connection.execute('SELECT * FROM planificador WHERE id = ?', [id]);
        if (rows.length > 0) {
            return new Planificador(
                rows[0].id,
                rows[0].name,
                rows[0].details,
                rows[0].start_date,
                rows[0].end_date,
                rows[0].start_time,
                rows[0].end_time,
            );
        }
        return null;
    }
    
    async createPlanificador(data: any): Promise<Planificador | null> {
        const [result]: any = await this.connection.execute('INSERT INTO planificador (name, details, start_date, end_date, start_time, end_time) VALUES (?, ?, ?, ?, ?, ?)', [data.name, data.details, data.start_date, data.end_date, data.start_time, data.end_time]);
        return new Planificador(result.insertId, data.name, data.details, data.start_date, data.end_date, data.start_time, data.end_time);
    }
    
    async updatePlanificador(id: number, data: any): Promise<Planificador | null> {
        await this.connection.execute('UPDATE planificador SET name=?, details=?, start_date=?, end_date=?, start_time=?, end_time=? WHERE id=?', [data.name, data.details, data.start_date, data.end_date, data.start_time, data.end_time, id]);
        return new Planificador(id, data.name, data.details, data.start_date, data.end_date, data.start_time, data.end_time);
    }
    
    async deletePlanificador(id: number): Promise<boolean> {
        const [result]: any = await this.connection.execute('DELETE FROM planificador WHERE id=?', [id]);
        return result.affectedRows > 0;
    }
}    
