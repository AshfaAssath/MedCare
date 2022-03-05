import express from 'express';
import db from './config/database.config';
import userRouter from './route/user-route';
import patientRouter from './route/patient-route';
import prescriptionRouter from './route/prescription-route';
import paymentRouter from './route/payment-route';

import * as dotenv from "dotenv";
import cors from 'cors';

dotenv.config();


db.sync().then(() => {
    console.log("connect to DB")
})

const app = express();
const port = process.env.PORT || 9001;

app.use(express.json());

// Add a list of allowed origins.
// If you have more origins you would like to add, you can add them to the array below.
const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

// Then pass these options to cors:
app.use(cors(options));


app.use("/api/med_care/user", userRouter)
app.use("/api/med_care/patient", patientRouter)
app.use("/api/med_care/payment", paymentRouter)
app.use("/api/med_care/prescription", prescriptionRouter)

app.listen(port, () => {
    console.log("server is running on port: " + port);
})