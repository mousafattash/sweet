import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../connection';

interface UserAttributes {
  id: number;
  name: string;
  email: string;
  phone?: string;
  hashedPassword: string;
}
interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'phone'> {}

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public name!: string;
  public email!: string;
  public phone?: string;
  public hashedPassword!: string;
}

User.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  phone: { type: DataTypes.STRING, allowNull: true },
  hashedPassword: { type: DataTypes.STRING, allowNull: false },
}, { sequelize, tableName: 'User' });