import { DataTypes, Model } from "sequelize";
import connection from "../database/connection.js";
import ProductModel from "./ProductModel.js";

class Opicoes extends Model {}

Opicoes.init(
    {
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: ProductModel,
                key: "id"
            },
            onDelete: 'CASCADE'
        },
        title: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        shape: {
            type: DataTypes.ENUM("square","circle")
        },
        radius: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        type: {
            type: DataTypes.ENUM("text", "color")
        },
        values: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: "option-product",
        timestamps: false,
        sequelize: connection
    }
)

export default Opicoes;
