// src/db/models/orders/work_on.model.ts
import { Model, DataTypes, Sequelize } from 'sequelize';

export interface WorkOnAttributes {
  employee_id: number;
  order_id: number;
  start_time: Date;
  end_time?: Date | null;
  task_description?: string | null;
  status?: string | null;
  created_at?: Date;
}

export class WorkOn extends Model<WorkOnAttributes, Partial<WorkOnAttributes>> implements WorkOnAttributes {
  public employee_id!: number;
  public order_id!: number;
  public start_time!: Date;
  public end_time!: Date | null;
  public task_description!: string | null;
  public status!: string | null;
  public created_at!: Date;

  static initialize(sequelize: Sequelize) {
    WorkOn.init({
      employee_id: { type: DataTypes.BIGINT, primaryKey: true },
      order_id: { type: DataTypes.BIGINT, primaryKey: true },
      start_time: { type: DataTypes.DATE, allowNull: false },
      end_time: { type: DataTypes.DATE },
      task_description: { type: DataTypes.TEXT },
      status: { type: DataTypes.TEXT },
      created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    }, { sequelize, tableName: 'work_on', timestamps: false });
  }
}

export default WorkOn;