import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../connection';

interface WarehouseHaveMaterialsAttributes { warehouseId: number; material_id: number }
export class WarehouseHaveMaterials extends Model<WarehouseHaveMaterialsAttributes> implements WarehouseHaveMaterialsAttributes {
  public warehouseId!: number;
  public material_id!: number;
}

WarehouseHaveMaterials.init({
  warehouseId: { type: DataTypes.INTEGER, primaryKey: true },
  material_id: { type: DataTypes.INTEGER, primaryKey: true },
}, { sequelize, tableName: 'WarehouseHaveMaterials' });