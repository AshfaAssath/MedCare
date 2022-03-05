import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";

dotenv.config();
let DB_NAME = process.env["DB_NAME"];
let DB_USER = process.env["DB_USER"];
let DB_PASS = process.env["DB_PASS"];

const db = new Sequelize({
  database: DB_NAME,
  username: DB_USER,
  password: DB_PASS,
  host: "127.0.0.1",
  dialect: "mysql",
  logging: false,

});

export default db;