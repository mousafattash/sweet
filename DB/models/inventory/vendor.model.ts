// src/db/models/inventory/vendor.model.ts
import { Model, DataTypes, Sequelize } from 'sequelize';

export interface VendorAttributes {
  vendor_id: number;
  name: string;
  contact_info?: any;
}

export class Vendor extends Model<VendorAttributes, Partial<VendorAttributes>> implements VendorAttributes {
  public vendor_id!: number;
  public name!: string;
  public contact_info!: any;

  static initialize(sequelize: Sequelize) {
    Vendor.init({
      vendor_id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.TEXT, allowNull: false },
      contact_info: { type: DataTypes.JSONB }
    }, { sequelize, tableName: 'vendor', timestamps: false });
  }
}

export default Vendor;