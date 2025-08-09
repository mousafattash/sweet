import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../connection';

interface EmployeeShiftAttributes { date: string; isPresent: boolean; startTime: string; endTime: string; employee_id: number; branchId: number }
export class EmployeeShift extends Model<EmployeeShiftAttributes> implements EmployeeShiftAttributes {
  public date!: string;
  public isPresent!: boolean;
  public startTime!: string;
  public endTime!: string;
  public employee_id!: number;
  public branchId!: number;
}

EmployeeShift.init({
  date: { type: DataTypes.DATEONLY, primaryKey: true },
  isPresent: { type: DataTypes.BOOLEAN, allowNull: false },
  startTime: { type: DataTypes.TIME, allowNull: false },
  endTime: { type: DataTypes.TIME, allowNull: false },
  employee_id: { type: DataTypes.INTEGER, primaryKey: true },
  branchId: { type: DataTypes.INTEGER, allowNull: false },
}, { sequelize, tableName: 'Employee_Shift' });