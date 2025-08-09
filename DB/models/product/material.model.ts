import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../connection';

interface MaterialAttributes { material_id: number; name: string; unit: string; description?: string }
interface MaterialCreationAttributes extends Optional<MaterialAttributes, 'material_id' | 'description'> {}

export class Material extends Model<MaterialAttributes, MaterialCreationAttributes> implements MaterialAttributes {
  public material_id!: number;
  public name!: string;
  public unit!: string;
  public description?: string;
}

Material.init({
  material_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  unit: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: true },
}, { sequelize, tableName: 'Material' });