// src/db/models/inventory/warehouse.model.ts
import { Model, DataTypes, Sequelize } from 'sequelize';

export interface WarehouseAttributes {
  warehouse_id: number;
  name: string;
  phone?: string | null;
  location?: string | null;
}

export class Warehouse extends Model<WarehouseAttributes, Partial<WarehouseAttributes>> implements WarehouseAttributes {
  public warehouse_id!: number;
  public name!: string;
  public phone!: string | null;
  public location!: string | null;

  static initialize(sequelize: Sequelize) {
    Warehouse.init({
      warehouse_id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.TEXT, allowNull: false },
      phone: { type: DataTypes.TEXT },
      location: { type: DataTypes.TEXT }
    }, { sequelize, tableName: 'warehouse', timestamps: false });
  }
}

export default Warehouse;