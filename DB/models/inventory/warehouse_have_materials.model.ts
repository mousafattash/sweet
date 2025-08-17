// src/db/models/inventory/warehouse_have_materials.model.ts
import { Model, DataTypes, Sequelize } from 'sequelize';

export interface WarehouseHaveMaterialsAttributes {
  warehouse_id: number;
  material_id: number;
  quantity: string;
  unit_of_measure: string;
}

export class WarehouseHaveMaterials extends Model<WarehouseHaveMaterialsAttributes, Partial<WarehouseHaveMaterialsAttributes>> implements WarehouseHaveMaterialsAttributes {
  public warehouse_id!: number;
  public material_id!: number;
  public quantity!: string;
  public unit_of_measure!: string;

  static initialize(sequelize: Sequelize) {
    WarehouseHaveMaterials.init({
      warehouse_id: { type: DataTypes.BIGINT, primaryKey: true },
      material_id: { type: DataTypes.BIGINT, primaryKey: true },
      quantity: { type: DataTypes.DECIMAL(10,2), allowNull: false },
      unit_of_measure: { type: DataTypes.TEXT, allowNull: false }
    }, { sequelize, tableName: 'warehouse_have_materials', timestamps: false });
  }
}

export default WarehouseHaveMaterials;