import mysql, { Pool } from "mysql";
import dotenv from "dotenv";
import util from "util";
import { IDBConnection } from "../interface/database/MySQL/IDBConnection";

export class MysqlConnection extends IDBConnection {
  private pool: Pool;

  public constructor() {
    super();
    dotenv.config();
    this.pool = mysql.createPool({
      connectionLimit: 5,
      host: process.env.DB_HOST_DEV,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      port: Number(process.env.DB_PORT),
      timezone: process.env.TIMEZONE,
      insecureAuth: false
    });
    this.pool.getConnection(
      (error, connection): void => {
        if (error) {
          console.error(error);
          if (error.code === "PROTOCOL_CONNECTION_LOST") {
            console.error("Database connection was closed.");
          }
          if (error.code === "ER_CON_COUNT_ERROR") {
            console.error("Database has too many connections.");
          }
          if (error.code === "ECONNREFUSED") {
            console.error("Database connection was refused.");
          }
        }

        if (connection) connection.release();
        return;
      }
    );
    // @ts-ignore TODO: あとで治す. 型引数１つの方が呼ばれて欲しいのに何故？
    this.pool.query = util.promisify(this.pool.query);

    this.pool.on(
      "connection",
      (): void => {
        console.log("mysql connection create");
      }
    );

    this.pool.on(
      "release",
      (connection): void => {
        console.log("Connection %d released", connection.threadId);
      }
    );
  }

  public execute(
    query: string,
    params: number | string | null = null
  ): mysql.Query {
    if (params !== null) {
      return this.pool.query(query, params);
    } else {
      return this.pool.query(query);
    }
  }
}
