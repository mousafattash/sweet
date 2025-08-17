// src/db/models/users/employees.model.ts
import { Model, DataTypes, Sequelize } from 'sequelize';

export interface EmployeesAttributes {
  user_id: number;
  identity_card?: string | null;
}

export class Employees extends Model<EmployeesAttributes, Partial<EmployeesAttributes>> implements EmployeesAttributes {
  public user_id!: number;
  public identity_card!: string | null;

  static initialize(sequelize: Sequelize) {
    Employees.init({
      user_id: { type: DataTypes.BIGINT, primaryKey: true },
      identity_card: { type: DataTypes.TEXT, unique: true }
    }, { sequelize, tableName: 'employees', timestamps: false });
  }
}

export default Employees;