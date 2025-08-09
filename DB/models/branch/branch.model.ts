import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../connection';

interface BranchAttributes {
  branchId: number;
  name: string;
  phone: string;
  address: string;
  email: string;
}
interface BranchCreationAttributes extends Optional<BranchAttributes, 'branchId'> {}

export class Branch extends Model<BranchAttributes, BranchCreationAttributes> implements BranchAttributes {
  public branchId!: number;
  public name!: string;
  public phone!: string;
  public address!: string;
  public email!: string;
}

Branch.init({
  branchId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: false },
  address: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
}, { sequelize, tableName: 'Branch' });