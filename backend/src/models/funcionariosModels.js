import { DataTypes } from "sequelize";
import conn from "../config/conn.js"

const Funcionarios = conn.define("funcionarios", {
    identificador: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    },
    {
        tableName: "funcionarios",
    }
)  

export default Funcionarios