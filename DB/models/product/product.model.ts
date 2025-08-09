import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../connection';

interface ProductAttributes {
  product_id: number;
  name: string;
  price: number;
  stock_qty: number;
  description?: string;
  categoryName: string;
}
interface ProductCreationAttributes extends Optional<ProductAttributes, 'product_id' | 'description'> {}

export class Product extends Model<ProductAttributes, ProductCreationAttributes> implements ProductAttributes {
  public product_id!: number;
  public name!: string;
  public price!: number;
  public stock_qty!: number;
  public description?: string;
  public categoryName!: string;
}

Product.init({
  product_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.DECIMAL, allowNull: false },
  stock_qty: { type: DataTypes.INTEGER, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: true },
  categoryName: { type: DataTypes.STRING, allowNull: false },
}, { sequelize, tableName: 'Product' });