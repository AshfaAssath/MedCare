import express from 'express';
import db from './config/database.config';
import userRouter from './route/user-route';
import * as dotenv from "dotenv";

dotenv.config();


db.sync().then(() => {
    console.log("connect to DB")
})

const app = express();
const port = process.env.PORT || 9001;

app.use(express.json());

app.use("/api/faf_lms/", userRouter)

app.listen(port, () => {
    console.log("server is running on port: " + port);
})