// src/db/models/users/emp_history.model.ts
import { Model, DataTypes, Sequelize } from 'sequelize';

export interface EmpHistoryAttributes {
  emp_id: number;
  job_title?: string | null;
  hire_date?: string | null; // date string
  terminate_date?: string | null;
  points?: number | null;
  hourly_wage?: string | null;
}

export class EmpHistory extends Model<EmpHistoryAttributes, Partial<EmpHistoryAttributes>> implements EmpHistoryAttributes {
  public emp_id!: number;
  public job_title!: string | null;
  public hire_date!: string | null;
  public terminate_date!: string | null;
  public points!: number | null;
  public hourly_wage!: string | null;

  static initialize(sequelize: Sequelize) {
    EmpHistory.init({
      emp_id: { type: DataTypes.BIGINT, primaryKey: true },
      job_title: { type: DataTypes.TEXT },
      hire_date: { type: DataTypes.DATEONLY },
      terminate_date: { type: DataTypes.DATEONLY },
      points: { type: DataTypes.INTEGER },
      hourly_wage: { type: DataTypes.DECIMAL(10,2) }
    }, { sequelize, tableName: 'emp_history', timestamps: false });
  }
}

export default EmpHistory;