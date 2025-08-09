import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../connection';

interface CustomerAttributes {
  id: number;
  address: string;
  type: string;
  userId: number;
}
interface CustomerCreationAttributes extends Optional<CustomerAttributes, 'id'> {}

export class Customer extends Model<CustomerAttributes, CustomerCreationAttributes> implements CustomerAttributes {
  public id!: number;
  public address!: string;
  public type!: string;
  public userId!: number;
}

Customer.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  address: { type: DataTypes.STRING, allowNull: false },
  type: { type: DataTypes.STRING, allowNull: false },
  userId: { type: DataTypes.INTEGER, allowNull: false },
}, { sequelize, tableName: 'Customer' });