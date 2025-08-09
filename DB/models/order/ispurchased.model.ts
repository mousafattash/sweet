import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../connection';

interface IsPurchasedAttributes { vendor_id: number; material_id: number; date: Date; unit_price: number }
export class IsPurchased extends Model<IsPurchasedAttributes> implements IsPurchasedAttributes {
  public vendor_id!: number;
  public material_id!: number;
  public date!: Date;
  public unit_price!: number;
}

IsPurchased.init({
  vendor_id: { type: DataTypes.INTEGER, primaryKey: true },
  material_id: { type: DataTypes.INTEGER, primaryKey: true },
  date: { type: DataTypes.DATE, allowNull: false },
  unit_price: { type: DataTypes.DECIMAL, allowNull: false },
}, { sequelize, tableName: 'IsPurchased' });