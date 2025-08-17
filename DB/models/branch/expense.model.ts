// src/db/models/expense.model.ts
import { Model, DataTypes, Sequelize } from 'sequelize';

export interface ExpenseAttributes {
  expense_id: number;
  timestamp?: Date;
  amount: string;
  category_name?: string | null;
  branch_id?: number | null;
}

export class Expense extends Model<ExpenseAttributes, Partial<ExpenseAttributes>> implements ExpenseAttributes {
  public expense_id!: number;
  public timestamp!: Date;
  public amount!: string;
  public category_name!: string | null;
  public branch_id!: number | null;

  static initialize(sequelize: Sequelize) {
    Expense.init({
      expense_id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
      timestamp: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      amount: { type: DataTypes.DECIMAL(10,2), allowNull: false },
      category_name: { type: DataTypes.TEXT },
      branch_id: { type: DataTypes.BIGINT }
    }, { sequelize, tableName: 'expense', timestamps: false });
  }
}

export default Expense;