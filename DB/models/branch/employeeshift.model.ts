// src/db/models/empshift.model.ts
import { Model, DataTypes, Sequelize } from 'sequelize';

export interface EmpShiftAttributes {
  date: string;
  branch_id: number;
  user_id: number;
  start_time?: string | null;
  end_time?: string | null;
  is_present: boolean;
}

export class EmpShift extends Model<EmpShiftAttributes, Partial<EmpShiftAttributes>> implements EmpShiftAttributes {
  public date!: string;
  public branch_id!: number;
  public user_id!: number;
  public start_time!: string | null;
  public end_time!: string | null;
  public is_present!: boolean;

  static initialize(sequelize: Sequelize) {
    EmpShift.init({
      date: { type: DataTypes.DATEONLY, primaryKey: true },
      branch_id: { type: DataTypes.BIGINT, primaryKey: true },
      user_id: { type: DataTypes.BIGINT, primaryKey: true },
      start_time: { type: DataTypes.TIME },
      end_time: { type: DataTypes.TIME },
      is_present: { type: DataTypes.BOOLEAN, allowNull: false }
    }, { sequelize, tableName: 'empshift', timestamps: false });
  }
}

export default EmpShift;