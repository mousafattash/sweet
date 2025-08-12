import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../connection';

interface HoldsAttributes { material_id: number; branchId: number; quantity_on_hand: number; last_counted_date: Date; location_within_branch: string; reorder_level: number; reorder_quantity: number }
export class Holds extends Model<HoldsAttributes> implements HoldsAttributes {
  public material_id!: number;
  public branchId!: number;
  public quantity_on_hand!: number;
  public last_counted_date!: Date;
  public location_within_branch!: string;
  public reorder_level!: number;
  public reorder_quantity!: number;
}

Holds.init({
  material_id: { type: DataTypes.INTEGER, primaryKey: true },
  branchId: { type: DataTypes.INTEGER, primaryKey: true },
  quantity_on_hand: { type: DataTypes.INTEGER, allowNull: false },
  last_counted_date: { type: DataTypes.DATE, allowNull: false },
  location_within_branch: { type: DataTypes.STRING, allowNull: false },
  reorder_level: { type: DataTypes.INTEGER, allowNull: false },
  reorder_quantity: { type: DataTypes.INTEGER, allowNull: false },
}, { sequelize, tableName: 'Hold_material' });