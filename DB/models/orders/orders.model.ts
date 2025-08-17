// src/db/models/orders/orders.model.ts
import { Model, DataTypes, Sequelize } from 'sequelize';

export interface OrdersAttributes {
  id: number;
  customer_id: number | null;
  employee_id?: number | null;
  discount?: string | null;
  date?: string | null;
  payment_status?: string | null;
}

export class Orders extends Model<OrdersAttributes, Partial<OrdersAttributes>> implements OrdersAttributes {
  public id!: number;
  public customer_id!: number | null;
  public employee_id!: number | null;
  public discount!: string | null;
  public date!: string | null;
  public payment_status!: string | null;

  static initialize(sequelize: Sequelize) {
    Orders.init({
      id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
      customer_id: { type: DataTypes.BIGINT },
      employee_id: { type: DataTypes.BIGINT },
      discount: { type: DataTypes.DECIMAL(5,2), defaultValue: 0 },
      date: { type: DataTypes.DATEONLY },
      payment_status: { type: DataTypes.TEXT }
    }, { sequelize, tableName: 'orders', timestamps: false });
  }
}

export default Orders;