import postgre from "pg";
import config from "./config";
import { resolve } from "path";

export class Database {
    constructor() {
        this.clientPostgres = new postgre.Client({
            user: config.user,
            database: config.name_database,
            password: config.password,
            port: config.port
        });
    }

    PostgresConnect() {
        return new Promise((resolve, reject) => {
            this.clientPostgres.connect((err) => {
                if (err) {
                    reject(err)
                } else {
                    return resolve();
                }
            })
        });
    }


}