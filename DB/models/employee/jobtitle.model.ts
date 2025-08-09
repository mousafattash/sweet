import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../connection';

interface JobTitleAttributes { id: number; name: string }
interface JobTitleCreationAttributes extends Optional<JobTitleAttributes, 'id'> {}

export class JobTitle extends Model<JobTitleAttributes, JobTitleCreationAttributes> implements JobTitleAttributes {
  public id!: number;
  public name!: string;
}

JobTitle.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
}, { sequelize, tableName: 'JobTitle' });