// src/db/models/inventory/product_category.model.ts
import { Model, DataTypes, Sequelize } from 'sequelize';

export interface ProductCategoryAttributes {
  name: string;
  description?: string | null;
}

export class ProductCategory extends Model<ProductCategoryAttributes, Partial<ProductCategoryAttributes>> implements ProductCategoryAttributes {
  public name!: string;
  public description!: string | null;

  static initialize(sequelize: Sequelize) {
    ProductCategory.init({
      name: { type: DataTypes.TEXT, primaryKey: true },
      description: { type: DataTypes.TEXT }
    }, { sequelize, tableName: 'product_category', timestamps: false });
  }
}

export default ProductCategory;