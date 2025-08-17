// src/db/models/inventory/is_purchased.model.ts
import { Model, DataTypes, Sequelize } from 'sequelize';

export interface IsPurchasedAttributes {
  id: number;
  date: string;
  unit_price: string;
  vendor_id: number;
  material_id: number;
}

export class IsPurchased extends Model<IsPurchasedAttributes, Partial<IsPurchasedAttributes>> implements IsPurchasedAttributes {
  public id!: number;
  public date!: string;
  public unit_price!: string;
  public vendor_id!: number;
  public material_id!: number;

  static initialize(sequelize: Sequelize) {
    IsPurchased.init({
      id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
      date: { type: DataTypes.DATEONLY, allowNull: false },
      unit_price: { type: DataTypes.DECIMAL(10,2), allowNull: false },
      vendor_id: { type: DataTypes.BIGINT, allowNull: false },
      material_id: { type: DataTypes.BIGINT, allowNull: false }
    }, { sequelize, tableName: 'is_purchased', timestamps: false });
  }
}

export default IsPurchased;