import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../connection';

interface MortgageAttributes { mortgage_id: number; amount: number; deposit_date: Date; due_date: Date; return_date?: Date; status: string }
interface MortgageCreationAttributes extends Optional<MortgageAttributes, 'mortgage_id' | 'return_date'> {}

export class Deposit extends Model<MortgageAttributes, MortgageCreationAttributes> implements MortgageAttributes {
  public mortgage_id!: number;
  public amount!: number;
  public deposit_date!: Date;
  public due_date!: Date;
  public return_date?: Date;
  public status!: string;
}

Deposit.init({
  mortgage_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  amount: { type: DataTypes.DECIMAL, allowNull: false },
  deposit_date: { type: DataTypes.DATE, allowNull: false },
  due_date: { type: DataTypes.DATE, allowNull: false },
  return_date: { type: DataTypes.DATE, allowNull: true },
  status: { type: DataTypes.STRING, allowNull: false },
}, { sequelize, tableName: 'Mortgage' });