import { DataTypes, Model } from "sequelize";
import db from "../config/database.config";
import { UserAttributes  } from "./attributes/user-attributes";


export class UserInstance extends Model<UserAttributes> { }

UserInstance.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        userName: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        token: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize: db,
        tableName: 'user'
    }
);
