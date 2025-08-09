import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../connection';

interface OrderAttributes { order_id: number; discount: number; customerId: number; mortgage_id?: number; payment_id?: number }
interface OrderCreationAttributes extends Optional<OrderAttributes, 'order_id'> {}

export class Order extends Model<OrderAttributes, OrderCreationAttributes> implements OrderAttributes {
  public order_id!: number;
  public discount!: number;
  public customerId!: number;
  public mortgage_id?: number;
  public payment_id?: number;
}

Order.init({
  order_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  discount: { type: DataTypes.DECIMAL, allowNull: false },
  customerId: { type: DataTypes.INTEGER, allowNull: false },
  mortgage_id: { type: DataTypes.INTEGER, allowNull: true },
  payment_id: { type: DataTypes.INTEGER, allowNull: true },
}, { sequelize, tableName: 'Order' });