import { DataTypes, Model } from "sequelize";
import db from "../config/database.config";
import { PatientAttributes  } from "./attributes/patient-attributes";
import { PaymentInstance } from "./model-payment";
import { PrescriptionInstance } from "./model-prescription";


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

PatientInstance.hasMany(PrescriptionInstance, {
    foreignKey: {
        allowNull: false,
        name: 'patient_id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
});

PatientInstance.hasMany(PaymentInstance, {
    foreignKey: {
        allowNull: false,
        name: 'patient_id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
});
