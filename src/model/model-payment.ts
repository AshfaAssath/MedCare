import { DataTypes, Model } from "sequelize";
import db from "../config/database.config";
import { PaymentAttributes  } from "./attributes/payment-attributes";


export class PaymentInstance extends Model<PaymentAttributes> { }

PaymentInstance.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        date:{
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        patient_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        amount: {
            type: DataTypes.DOUBLE,
            allowNull: false
        }
    },
    {
        sequelize: db,
        tableName: 'payment'
    }
);
