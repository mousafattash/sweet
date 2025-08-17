// src/db/models/wastage.model.ts
import { Model, DataTypes, Sequelize } from 'sequelize';

export interface WastageAttributes {
  material_id: number;
  branch_id: number;
  quantity: string;
  reason?: string | null;
  reported_by?: number | null;
  reported_at?: Date;
}

export class Wastage extends Model<WastageAttributes, Partial<WastageAttributes>> implements WastageAttributes {
  public material_id!: number;
  public branch_id!: number;
  public quantity!: string;
  public reason!: string | null;
  public reported_by!: number | null;
  public reported_at!: Date;

  static initialize(sequelize: Sequelize) {
    Wastage.init({
      material_id: { type: DataTypes.BIGINT, primaryKey: true },
      branch_id: { type: DataTypes.BIGINT, primaryKey: true },
      quantity: { type: DataTypes.DECIMAL(12,4), allowNull: false },
      reason: { type: DataTypes.TEXT },
      reported_by: { type: DataTypes.BIGINT },
      reported_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    }, { sequelize, tableName: 'wastage', timestamps: false });
  }
}

export default Wastage;