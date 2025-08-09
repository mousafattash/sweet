import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../connection';

interface CategoryAttributes { name: string; description?: string }
export class Category extends Model<CategoryAttributes> implements CategoryAttributes {
  public name!: string;
  public description?: string;
}

Category.init({ name: { type: DataTypes.STRING, primaryKey: true }, description: { type: DataTypes.STRING } }, { sequelize, tableName: 'Categories' });