import { DataTypes, Model } from "sequelize";
import db from "../config/database.config";
import { PatientAttributes  } from "./attributes/patient-attributes";


export class PatientInstance extends Model<PatientAttributes> { }

PatientInstance.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type:DataTypes.STRING,
            allowNull:false
        },
        birthday :{
            type:DataTypes.DATEONLY,
            allowNull:false
        },
        contactNo: {
            type:DataTypes.STRING,
            allowNull:false
        },
        NIC: {
            type:DataTypes.STRING,
            allowNull:false
        },
        notes: {
            type:DataTypes.STRING,
            allowNull:false
        },
        photo: {
            type:DataTypes.BLOB,
            allowNull:false
        }
       
    },
    {
        sequelize: db,
        tableName: 'patient'
    }
);