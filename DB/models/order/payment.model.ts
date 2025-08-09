import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../connection';

interface PaymentAttributes { payment_id: number; amount_paid: number; payment_method: string; timestamp: Date; totalAmount: number }
interface PaymentCreationAttributes extends Optional<PaymentAttributes, 'payment_id'> {}

export class Payment extends Model<PaymentAttributes, PaymentCreationAttributes> implements PaymentAttributes {
  public payment_id!: number;
  public amount_paid!: number;
  public payment_method!: string;
  public timestamp!: Date;
  public totalAmount!: number;
}

Payment.init({
  payment_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  amount_paid: { type: DataTypes.DECIMAL, allowNull: false },
  payment_method: { type: DataTypes.STRING, allowNull: false },
  timestamp: { type: DataTypes.DATE, allowNull: false },
  totalAmount: { type: DataTypes.DECIMAL, allowNull: false },
}, { sequelize, tableName: 'Payment' });