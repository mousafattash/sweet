// src/db/models/orders/payments.model.ts
import { Model, DataTypes, Sequelize } from 'sequelize';

export interface PaymentsAttributes {
  id: number;
  customer_id: number;
  payment_id: string;
  timestamp?: Date;
  amount_paid: string;
  total_amount: string;
  payment_method: string;
}

export class Payments extends Model<PaymentsAttributes, Partial<PaymentsAttributes>> implements PaymentsAttributes {
  public id!: number;
  public customer_id!: number;
  public payment_id!: string;
  public timestamp!: Date;
  public amount_paid!: string;
  public total_amount!: string;
  public payment_method!: string;

  static initialize(sequelize: Sequelize) {
    Payments.init({
      id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
      customer_id: { type: DataTypes.BIGINT, allowNull: false },
      payment_id: { type: DataTypes.TEXT, allowNull: false, unique: true },
      timestamp: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      amount_paid: { type: DataTypes.DECIMAL(10,2), allowNull: false },
      total_amount: { type: DataTypes.DECIMAL(10,2), allowNull: false },
      payment_method: { type: DataTypes.TEXT, allowNull: false }
    }, { sequelize, tableName: 'payments', timestamps: false });
  }
}

export default Payments;