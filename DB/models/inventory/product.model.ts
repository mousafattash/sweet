// src/db/models/inventory/product.model.ts
import { Model, DataTypes, Sequelize } from 'sequelize';

export interface ProductAttributes {
  product_id: number;
  name: string;
  description?: string | null;
  price: string;
  stock_qty: number;
  reorder_quantity: number;
  category_name?: string | null;
}

export class Product extends Model<ProductAttributes, Partial<ProductAttributes>> implements ProductAttributes {
  public product_id!: number;
  public name!: string;
  public description!: string | null;
  public price!: string;
  public stock_qty!: number;
  public reorder_quantity!: number;
  public category_name!: string | null;

  static initialize(sequelize: Sequelize) {
    Product.init({
      product_id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.TEXT, allowNull: false },
      description: { type: DataTypes.TEXT },
      price: { type: DataTypes.DECIMAL(10,2), allowNull: false },
      stock_qty: { type: DataTypes.INTEGER, allowNull: false },
      reorder_quantity: { type: DataTypes.INTEGER, allowNull: false },
      category_name: { type: DataTypes.TEXT }
    }, { sequelize, tableName: 'product', timestamps: false });
  }
}

export default Product;