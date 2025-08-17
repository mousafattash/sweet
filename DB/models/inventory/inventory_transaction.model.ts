// src/db/models/inventory/inventory_transaction.model.ts
import { Model, DataTypes, Sequelize } from 'sequelize';

export interface InventoryTransactionAttributes {
  id: number;
  material_id: number;
  warehouse_id?: number | null;
  branch_id?: number | null;
  change_qty: string;
  type: string;
  reference_table?: string | null;
  reference_id?: number | null;
  note?: string | null;
  created_by?: number | null;
  created_at?: Date;
}

export class InventoryTransaction extends Model<InventoryTransactionAttributes, Partial<InventoryTransactionAttributes>> implements InventoryTransactionAttributes {
  public id!: number;
  public material_id!: number;
  public warehouse_id!: number | null;
  public branch_id!: number | null;
  public change_qty!: string;
  public type!: string;
  public reference_table!: string | null;
  public reference_id!: number | null;
  public note!: string | null;
  public created_by!: number | null;
  public created_at!: Date;

  static initialize(sequelize: Sequelize) {
    InventoryTransaction.init({
      id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
      material_id: { type: DataTypes.BIGINT, allowNull: false },
      warehouse_id: { type: DataTypes.BIGINT },
      branch_id: { type: DataTypes.BIGINT },
      change_qty: { type: DataTypes.DECIMAL(12,4), allowNull: false },
      type: { type: DataTypes.TEXT, allowNull: false },
      reference_table: { type: DataTypes.TEXT },
      reference_id: { type: DataTypes.BIGINT },
      note: { type: DataTypes.TEXT },
      created_by: { type: DataTypes.BIGINT },
      created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    }, { sequelize, tableName: 'inventory_transaction', timestamps: false });
  }
}

export default InventoryTransaction;