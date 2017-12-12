import * as Sequelize from 'sequelize';
import { BaseModelInterface } from '../interfaces/BaseModelInterface';
import { ModelsInterface } from '../interfaces/ModelsInterface';

export interface ObjectiveAttributes {
    id?: number;
    deadline?: Date;
    createdAt?: Date;
    updatedAt?: Date;
    finished?: boolean;
    achieved?: boolean;
    description?: string;
}

export interface ObjectiveInstance extends Sequelize.Instance<ObjectiveAttributes>, ObjectiveAttributes { }

export interface ObjectiveModel extends BaseModelInterface, 
    Sequelize.Model<ObjectiveInstance, ObjectiveAttributes> { }

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes) => {
    const Objective: ObjectiveModel = 
        sequelize.define('Objective', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false,
                primaryKey: false,
            },
            achieved: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            finished: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            createdAt: {
                type: DataTypes.DATE
            },
            updatedAt: {
                type: DataTypes.DATE
            }
        },  {
            tableName: 'objectives',
        });
    
    Objective.prototype.associate = (models: ModelsInterface): void => {
        Objective.belongsTo(models.User, {
            foreignKey: {
              name: 'user',
              field: 'user',
              allowNull: false,
            },
            as: 'objectives'
        });
    };
    
    return Objective;
}