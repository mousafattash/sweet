// src/db/models/cash_drawer_closure.model.ts
import { Model, DataTypes, Sequelize } from 'sequelize';

export interface CashDrawerClosureAttributes {
  id: number;
  branch_id?: number | null;
  cashier_user_id?: number | null;
  opened_at?: Date | null;
  closed_at?: Date | null;
  starting_cash?: string | null;
  counted_cash?: string | null;
  discrepancy?: string | null;
  notes?: string | null;
  created_at?: Date;
}

export class CashDrawerClosure extends Model<CashDrawerClosureAttributes, Partial<CashDrawerClosureAttributes>> implements CashDrawerClosureAttributes {
  public id!: number;
  public branch_id!: number | null;
  public cashier_user_id!: number | null;
  public opened_at!: Date | null;
  public closed_at!: Date | null;
  public starting_cash!: string | null;
  public counted_cash!: string | null;
  public discrepancy!: string | null;
  public notes!: string | null;
  public created_at!: Date;

  static initialize(sequelize: Sequelize) {
    CashDrawerClosure.init({
      id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
      branch_id: { type: DataTypes.BIGINT },
      cashier_user_id: { type: DataTypes.BIGINT },
      opened_at: { type: DataTypes.DATE },
      closed_at: { type: DataTypes.DATE },
      starting_cash: { type: DataTypes.DECIMAL(12,2) },
      counted_cash: { type: DataTypes.DECIMAL(12,2) },
      discrepancy: { type: DataTypes.DECIMAL(12,2) },
      notes: { type: DataTypes.TEXT },
      created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    }, { sequelize, tableName: 'cash_drawer_closure', timestamps: false });
  }
}

export default CashDrawerClosure;