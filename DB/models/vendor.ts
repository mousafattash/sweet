import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../connection';

interface VendorAttributes { vendor_id: number; name: string; contact_info: string }
interface VendorCreationAttributes extends Optional<VendorAttributes, 'vendor_id'> {}

export class Vendor extends Model<VendorAttributes, VendorCreationAttributes> implements VendorAttributes {
  public vendor_id!: number;
  public name!: string;
  public contact_info!: string;
}

Vendor.init({
  vendor_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  contact_info: { type: DataTypes.STRING, allowNull: false },
}, { sequelize, tableName: 'Vendor' });