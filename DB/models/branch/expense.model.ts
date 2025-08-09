import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../connection';

interface ExpenseAttributes { expenseId: number; amount: number; timestamp: Date; branchId: number; categoryName: string }
interface ExpenseCreationAttributes extends Optional<ExpenseAttributes, 'expenseId'> {}

export class Expense extends Model<ExpenseAttributes, ExpenseCreationAttributes> implements ExpenseAttributes {
  public expenseId!: number;
  public amount!: number;
  public timestamp!: Date;
  public branchId!: number;
  public categoryName!: string;
}

Expense.init({
  expenseId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  amount: { type: DataTypes.DECIMAL, allowNull: false },
  timestamp: { type: DataTypes.DATE, allowNull: false },
  branchId: { type: DataTypes.INTEGER, allowNull: false },
  categoryName: { type: DataTypes.STRING, allowNull: false },
}, { sequelize, tableName: 'Expense' });