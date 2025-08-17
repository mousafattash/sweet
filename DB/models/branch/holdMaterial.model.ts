// src/db/models/holds.model.ts
import { Model, DataTypes, Sequelize } from 'sequelize';

export interface HoldsAttributes {
  material_id: number;
  branch_id: number;
  quantity_on_hand: string;
  last_counted_date?: string | null;
  location_within_branch?: string | null;
  reorder_level?: string | null;
  reorder_quantity?: string | null;
}

export class Holds extends Model<HoldsAttributes, Partial<HoldsAttributes>> implements HoldsAttributes {
  public material_id!: number;
  public branch_id!: number;
  public quantity_on_hand!: string;
  public last_counted_date!: string | null;
  public location_within_branch!: string | null;
  public reorder_level!: string | null;
  public reorder_quantity!: string | null;

  static initialize(sequelize: Sequelize) {
    Holds.init({
      material_id: { type: DataTypes.BIGINT, primaryKey: true },
      branch_id: { type: DataTypes.BIGINT, primaryKey: true },
      quantity_on_hand: { type: DataTypes.DECIMAL(10,2), allowNull: false },
      last_counted_date: { type: DataTypes.DATEONLY },
      location_within_branch: { type: DataTypes.TEXT },
      reorder_level: { type: DataTypes.DECIMAL(10,2) },
      reorder_quantity: { type: DataTypes.DECIMAL(10,2) }
    }, { sequelize, tableName: 'holds', timestamps: false });
  }
}

export default Holds;