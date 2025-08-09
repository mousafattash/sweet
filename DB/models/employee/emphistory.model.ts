import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../connection';

interface EmpHistoryAttributes { id: number; hire_date: Date; terminate_date?: Date; employee_id: number }
interface EmpHistoryCreationAttributes extends Optional<EmpHistoryAttributes, 'id' | 'terminate_date'> {}

export class EmpHistory extends Model<EmpHistoryAttributes, EmpHistoryCreationAttributes> implements EmpHistoryAttributes {
  public id!: number;
  public hire_date!: Date;
  public terminate_date?: Date;
  public employee_id!: number;
}

EmpHistory.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  hire_date: { type: DataTypes.DATE, allowNull: false },
  terminate_date: { type: DataTypes.DATE, allowNull: true },
  employee_id: { type: DataTypes.INTEGER, allowNull: false },
}, { sequelize, tableName: 'EmpHistory' });