// src/db/models/inventory/recipe.model.ts
import { Model, DataTypes, Sequelize } from 'sequelize';

export interface RecipeAttributes {
  product_id: number;
  material_id: number;
  quantity_needed: string;
  unit_of_measure: string;
}

export class Recipe extends Model<RecipeAttributes, Partial<RecipeAttributes>> implements RecipeAttributes {
  public product_id!: number;
  public material_id!: number;
  public quantity_needed!: string;
  public unit_of_measure!: string;

  static initialize(sequelize: Sequelize) {
    Recipe.init({
      product_id: { type: DataTypes.BIGINT, primaryKey: true },
      material_id: { type: DataTypes.BIGINT, primaryKey: true },
      quantity_needed: { type: DataTypes.DECIMAL(10,2), allowNull: false },
      unit_of_measure: { type: DataTypes.TEXT, allowNull: false }
    }, { sequelize, tableName: 'recipe', timestamps: false });
  }
}

export default Recipe;