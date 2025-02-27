import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";

const Messages = sequelize.define("Messages", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    tableName: "messages",
    timestamps: true,
});

export default Messages;
