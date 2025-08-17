// src/db/models/branch.model.ts
import { Model, DataTypes, Sequelize } from 'sequelize';

export interface BranchAttributes {
  branch_id: number;
  name: string;
  phone?: string | null;
}

export class Branch extends Model<BranchAttributes, Partial<BranchAttributes>> implements BranchAttributes {
  public branch_id!: number;
  public name!: string;
  public phone!: string | null;

  static initialize(sequelize: Sequelize) {
    Branch.init({
      branch_id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.TEXT, allowNull: false },
      phone: { type: DataTypes.TEXT }
    }, { sequelize, tableName: 'branch', timestamps: false });
  }
}

export default Branch;