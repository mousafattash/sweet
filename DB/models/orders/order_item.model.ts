// src/db/models/orders/order_item.model.ts
import { Model, DataTypes, Sequelize } from 'sequelize';

export interface OrderItemAttributes {
  id: number;
  order_id: number;
  product_id: number;
  quantity: number;
  time: string;
}

export class OrderItem extends Model<OrderItemAttributes, Partial<OrderItemAttributes>> implements OrderItemAttributes {
  public id!: number;
  public order_id!: number;
  public product_id!: number;
  public quantity!: number;
  public time!: string;

  static initialize(sequelize: Sequelize) {
    OrderItem.init({
      id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
      order_id: { type: DataTypes.BIGINT },
      product_id: { type: DataTypes.BIGINT },
      quantity: { type: DataTypes.INTEGER, allowNull: false },
      time: { type: DataTypes.TIME, allowNull: false }
    }, { sequelize, tableName: 'order_item', timestamps: false });
  }
}

export default OrderItem;