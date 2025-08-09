// central place to import all models and define associations
import './user';
import './customer/customer.model';
import './employee/employee.model';
import './branch/branch.model';
import './employee/employeeshift.model';
import './employee/emphistory.model';
import './employee/jobtitle.model';
import './branch/expense.model';
import './product/category.model';
import './product/product.model';
import './product/recipe.model';
import './product/material.model';
import './holds';
import './warehouse/warehouse.model';
import './warehouse/warehouseHaveMaterials.model';
import './vendor';
import './order/ispurchased.model';
import './order/order.model';
import './order/workon.model';
import './order/payment.model';
import './customer/mortgage.model';

// after importing, grab the classes from require cache (or import them by name)
import { sequelize } from '../connection';
import { User } from './user';
import { Customer } from './customer/customer.model';
import { Employee } from './employee/employee.model';
import { Branch } from './branch/branch.model';
import { EmployeeShift } from './employee/employeeshift.model';
import { EmpHistory } from './employee/emphistory.model';
import { JobTitle } from './employee/jobtitle.model';
import { Expense } from './branch/expense.model';
import { Category } from './product/category.model';
import { Product } from './product/product.model';
import { Recipe } from './product/recipe.model';
import { Material } from './product/material.model';
import { Holds } from './branch/hold_material.model';
import { Warehouse } from './warehouse/warehouse.model';
import { WarehouseHaveMaterials } from './warehouse/warehouseHaveMaterials.model';
import { Vendor } from './vendor';
import { IsPurchased } from './order/ispurchased.model';
import { Order } from './order/order.model';
import { WorkOn } from './order/workon.model';
import { Payment } from './order/payment.model';
import { Mortgage } from './customer/mortgage.model';

// define junction for EmpHistory <-> JobTitle
const EmpHistory_JobTitle = sequelize.define('EmpHistory_JobTitle', {
  EmpId: { type: (sequelize as any).Sequelize.DataTypes.INTEGER, allowNull: false },
  JobTitle: { type: (sequelize as any).Sequelize.DataTypes.INTEGER, allowNull: false }
}, { timestamps: false });

// associations (copy from main file)
User.hasMany(Customer, { foreignKey: 'userId' });
Customer.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Employee, { foreignKey: 'userId' });
Employee.belongsTo(User, { foreignKey: 'userId' });

Branch.hasMany(Employee, { foreignKey: 'branchId' });
Employee.belongsTo(Branch, { foreignKey: 'branchId' });

Employee.hasMany(EmployeeShift, { foreignKey: 'employee_id' });
EmployeeShift.belongsTo(Employee, { foreignKey: 'employee_id' });

Branch.hasMany(EmployeeShift, { foreignKey: 'branchId' });
EmployeeShift.belongsTo(Branch, { foreignKey: 'branchId' });

Employee.hasMany(EmpHistory, { foreignKey: 'employee_id' });
EmpHistory.belongsTo(Employee, { foreignKey: 'employee_id' });

EmpHistory.belongsToMany(JobTitle, { through: EmpHistory_JobTitle, foreignKey: 'EmpId' });
JobTitle.belongsToMany(EmpHistory, { through: EmpHistory_JobTitle, foreignKey: 'JobTitle' });

Branch.hasMany(Expense, { foreignKey: 'branchId' });
Expense.belongsTo(Branch, { foreignKey: 'branchId' });

Category.hasMany(Expense, { foreignKey: 'categoryName', sourceKey: 'name' });
Expense.belongsTo(Category, { foreignKey: 'categoryName', targetKey: 'name' });

Category.hasMany(Product, { foreignKey: 'categoryName', sourceKey: 'name' });
Product.belongsTo(Category, { foreignKey: 'categoryName', targetKey: 'name' });

Product.hasMany(Recipe, { foreignKey: 'product_id' });
Recipe.belongsTo(Product, { foreignKey: 'product_id' });

Material.hasMany(Recipe, { foreignKey: 'material_id' });
Recipe.belongsTo(Material, { foreignKey: 'material_id' });

Material.hasMany(Holds, { foreignKey: 'material_id' });
Holds.belongsTo(Material, { foreignKey: 'material_id' });

Branch.hasMany(Holds, { foreignKey: 'branchId' });
Holds.belongsTo(Branch, { foreignKey: 'branchId' });

Warehouse.hasMany(WarehouseHaveMaterials, { foreignKey: 'warehouseId' });
WarehouseHaveMaterials.belongsTo(Warehouse, { foreignKey: 'warehouseId' });

Customer.hasMany(Order, { foreignKey: 'customerId' });
Order.belongsTo(Customer, { foreignKey: 'customerId' });

Product.hasMany(Order, { foreignKey: 'order_id' });
Order.belongsTo(Product, { foreignKey: 'order_id' });

Mortgage.hasMany(Order, { foreignKey: 'mortgage_id' });
Order.belongsTo(Mortgage, { foreignKey: 'mortgage_id' });

Payment.hasMany(Order, { foreignKey: 'payment_id' });
Order.belongsTo(Payment, { foreignKey: 'payment_id' });

Order.belongsToMany(Employee, { through: WorkOn, foreignKey: 'order_id' });
Employee.belongsToMany(Order, { through: WorkOn, foreignKey: 'employee_id' });

Vendor.hasMany(IsPurchased, { foreignKey: 'vendor_id' });
IsPurchased.belongsTo(Vendor, { foreignKey: 'vendor_id' });

Material.hasMany(IsPurchased, { foreignKey: 'material_id' });
IsPurchased.belongsTo(Material, { foreignKey: 'material_id' });

export {
  sequelize,
  User, Customer, Employee, Branch, EmployeeShift, EmpHistory, JobTitle,
  Expense, Category, Product, Recipe, Material, Holds, Warehouse, WarehouseHaveMaterials,
  Vendor, IsPurchased, Order, WorkOn, Payment, Mortgage,
};

// optionally sync: sequelize.sync({ alter: true });