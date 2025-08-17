// src/db/models/inventory/purchase_order.model.ts
import { Model, DataTypes, Sequelize } from 'sequelize';

export interface PurchaseOrderAttributes {
  id: number;
  vendor_id?: number | null;
  po_number?: string | null;
  status?: string | null;
  expected_date?: string | null;
  created_by?: number | null;
  created_at?: Date;
}

export class PurchaseOrder extends Model<PurchaseOrderAttributes, Partial<PurchaseOrderAttributes>> implements PurchaseOrderAttributes {
  public id!: number;
  public vendor_id!: number | null;
  public po_number!: string | null;
  public status!: string | null;
  public expected_date!: string | null;
  public created_by!: number | null;
  public created_at!: Date;

  static initialize(sequelize: Sequelize) {
    PurchaseOrder.init({
      id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
      vendor_id: { type: DataTypes.BIGINT },
      po_number: { type: DataTypes.TEXT, unique: true },
      status: { type: DataTypes.TEXT, defaultValue: 'created' },
      expected_date: { type: DataTypes.DATEONLY },
      created_by: { type: DataTypes.BIGINT },
      created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    }, { sequelize, tableName: 'purchase_order', timestamps: false });
  }
}

export default PurchaseOrder;