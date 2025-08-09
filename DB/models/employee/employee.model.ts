import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../connection';

interface EmployeeAttributes {
  employee_id: number;
  identityCard: string;
  branchId: number;
  userId: number;
}
interface EmployeeCreationAttributes extends Optional<EmployeeAttributes, 'employee_id'> {}

export class Employee extends Model<EmployeeAttributes, EmployeeCreationAttributes> implements EmployeeAttributes {
  public employee_id!: number;
  public identityCard!: string;
  public branchId!: number;
  public userId!: number;
}

Employee.init({
  employee_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  identityCard: { type: DataTypes.STRING, allowNull: false, unique: true },
  branchId: { type: DataTypes.INTEGER, allowNull: false },
  userId: { type: DataTypes.INTEGER, allowNull: false },
}, { sequelize, tableName: 'Employee' });