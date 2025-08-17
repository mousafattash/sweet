// src/db/models/inventory/materials.model.ts
import { Model, DataTypes, Sequelize } from 'sequelize';

export interface MaterialsAttributes {
  id: number;
  name: string;
  category?: string | null;
  unit: string;
  quantity_in_stock: string;
  reorder_level: string;
  vendor_id?: number | null;
  price_per_unit: string;
  last_purchase_date?: string | null;
  expiration_date?: string | null;
}

export class Materials extends Model<MaterialsAttributes, Partial<MaterialsAttributes>> implements MaterialsAttributes {
  public id!: number;
  public name!: string;
  public category!: string | null;
  public unit!: string;
  public quantity_in_stock!: string;
  public reorder_level!: string;
  public vendor_id!: number | null;
  public price_per_unit!: string;
  public last_purchase_date!: string | null;
  public expiration_date!: string | null;

  static initialize(sequelize: Sequelize) {
    Materials.init({
      id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.TEXT, allowNull: false },
      category: { type: DataTypes.TEXT },
      unit: { type: DataTypes.TEXT, allowNull: false },
      quantity_in_stock: { type: DataTypes.DECIMAL(10,2), allowNull: false },
      reorder_level: { type: DataTypes.DECIMAL(10,2), allowNull: false },
      vendor_id: { type: DataTypes.BIGINT },
      price_per_unit: { type: DataTypes.DECIMAL(10,2), allowNull: false },
      last_purchase_date: { type: DataTypes.DATEONLY },
      expiration_date: { type: DataTypes.DATEONLY }
    }, { sequelize, tableName: 'materials', timestamps: false });
  }
}

export default Materials;