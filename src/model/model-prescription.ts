import { DataTypes, Model } from "sequelize";
import db from "../config/database.config";
import { PrescriptionAttributes  } from "./attributes/prescription-attributes";


export class PrescriptionInstance extends Model<PrescriptionAttributes> { }

PrescriptionInstance.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        details: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        patient_id:{
            type: DataTypes.INTEGER,
            allowNull: false,

        }
    },
    {
        sequelize: db,
        tableName: 'prescription'
    }
);