import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../connection';

interface WorkOnAttributes { order_id: number; employee_id: number }
export class WorkOn extends Model<WorkOnAttributes> implements WorkOnAttributes {
  public order_id!: number;
  public employee_id!: number;
}

WorkOn.init({
  order_id: { type: DataTypes.INTEGER, primaryKey: true },
  employee_id: { type: DataTypes.INTEGER, primaryKey: true },
}, { sequelize, tableName: 'WorkOn' });