// models/Planificador.ts
export class Planificador {
    private id: number;
    private name: string;
    private details: string;
    private start_date: Date;
    private end_date: Date;
    private start_time: string;
    private end_time: string;

    constructor(id: number, name: string, details: string, start_date: Date, end_date: Date, start_time: string, end_time: string) {
        this.id = id;
        this.name = name;
        this.details = details;
        this.start_date = start_date;
        this.end_date = end_date;
        this.start_time = start_time;
        this.end_time = end_time;
    }
}
