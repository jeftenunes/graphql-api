import { ModelsInterface } from "./ModelsInterface";
import * as Sequelize from "sequelize";

export interface DbContext extends ModelsInterface {
    sequelize: Sequelize.Sequelize;
}