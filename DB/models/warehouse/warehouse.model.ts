import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../connection';

interface WarehouseAttributes { warehouseId: number; name: string; location: string; phone: string }
export class Warehouse extends Model<WarehouseAttributes> implements WarehouseAttributes {
  public warehouseId!: number;
  public name!: string;
  public location!: string;
  public phone!: string;
}

Warehouse.init({
  warehouseId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  location: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: false },
}, { sequelize, tableName: 'Warehouse' });