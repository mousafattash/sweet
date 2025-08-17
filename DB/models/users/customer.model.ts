// src/db/models/users/customers.model.ts
import { Model, DataTypes, Sequelize } from 'sequelize';

export interface CustomersAttributes {
  user_id: number;
  loyalty_points?: number;
  address?: string | null;
  type?: string | null;
}

export class Customers extends Model<CustomersAttributes, Partial<CustomersAttributes>> implements CustomersAttributes {
  public user_id!: number;
  public loyalty_points!: number;
  public address!: string | null;
  public type!: string | null;

  static initialize(sequelize: Sequelize) {
    Customers.init({
      user_id: { type: DataTypes.BIGINT, primaryKey: true },
      loyalty_points: { type: DataTypes.INTEGER, defaultValue: 0 },
      address: { type: DataTypes.TEXT },
      type: { type: DataTypes.TEXT }
    }, { sequelize, tableName: 'customers', timestamps: false });
  }
}

export default Customers;