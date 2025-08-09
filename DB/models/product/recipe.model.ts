import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../connection';

interface RecipeAttributes { id: number; product_id: number; material_id: number; quantityNeeded: number; unitOfMeasure: string }
interface RecipeCreationAttributes extends Optional<RecipeAttributes, 'id'> {}

export class Recipe extends Model<RecipeAttributes, RecipeCreationAttributes> implements RecipeAttributes {
  public id!: number;
  public product_id!: number;
  public material_id!: number;
  public quantityNeeded!: number;
  public unitOfMeasure!: string;
}

Recipe.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  product_id: { type: DataTypes.INTEGER, allowNull: false },
  material_id: { type: DataTypes.INTEGER, allowNull: false },
  quantityNeeded: { type: DataTypes.INTEGER, allowNull: false },
  unitOfMeasure: { type: DataTypes.STRING, allowNull: false },
}, { sequelize, tableName: 'Recipe' });