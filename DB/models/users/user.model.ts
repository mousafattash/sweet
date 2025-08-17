// src/db/models/users/users.model.ts
import { Model, DataTypes, Sequelize } from 'sequelize';

export interface UsersAttributes {
  id: number;
  name: string;
  email: string;
  phone?: string | null;
  address?: string | null;
  is_customer?: boolean;
  is_employee?: boolean;
  created_at?: Date;
}

export class Users extends Model<UsersAttributes, Partial<UsersAttributes>> implements UsersAttributes {
  public id!: number;
  public name!: string;
  public email!: string;
  public phone!: string | null;
  public address!: string | null;
  public is_customer!: boolean;
  public is_employee!: boolean;
  public readonly created_at!: Date;

  static initialize(sequelize: Sequelize) {
    Users.init({
      id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.TEXT, allowNull: false },
      email: { type: DataTypes.TEXT, allowNull: false, unique: true },
      phone: { type: DataTypes.TEXT },
      address: { type: DataTypes.TEXT },
      is_customer: { type: DataTypes.BOOLEAN, defaultValue: false },
      is_employee: { type: DataTypes.BOOLEAN, defaultValue: false },
      created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    }, { sequelize, tableName: 'users', timestamps: false });
  }
}

export default Users;