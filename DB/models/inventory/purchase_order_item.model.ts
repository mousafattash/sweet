// src/db/models/inventory/purchase_order_item.model.ts
import { Model, DataTypes, Sequelize } from 'sequelize';

export interface PurchaseOrderItemAttributes {
  id: number;
  purchase_order_id: number;
  material_id: number;
  quantity: string;
  unit_price: string;
  received_quantity?: string | null;
  created_at?: Date;
}

export class PurchaseOrderItem extends Model<PurchaseOrderItemAttributes, Partial<PurchaseOrderItemAttributes>> implements PurchaseOrderItemAttributes {
  public id!: number;
  public purchase_order_id!: number;
  public material_id!: number;
  public quantity!: string;
  public unit_price!: string;
  public received_quantity!: string | null;
  public created_at!: Date;

  static initialize(sequelize: Sequelize) {
    PurchaseOrderItem.init({
      id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
      purchase_order_id: { type: DataTypes.BIGINT, allowNull: false },
      material_id: { type: DataTypes.BIGINT, allowNull: false },
      quantity: { type: DataTypes.DECIMAL(12,4), allowNull: false },
      unit_price: { type: DataTypes.DECIMAL(12,4), allowNull: false },
      received_quantity: { type: DataTypes.DECIMAL(12,4), defaultValue: 0 },
      created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    }, { sequelize, tableName: 'purchase_order_item', timestamps: false });
  }
}

export default PurchaseOrderItem;