import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../connection';

// Import models from their correct paths
import Users from './users/user.model';
import Customers from './users/customer.model';
import Employees from './users/employee.model';
import EmpHistory from './users/emp_history.model';
import Payments from './orders/payments.model';
import Orders from './orders/orders.model';
import OrderItem from './orders/order_item.model';
import WorkOn from './orders/work_on.model';

import Branch from './branch/branch.model';
import EmpShift from './branch/employeeshift.model';
import Expense from './branch/expense.model';
import Holds from './branch/holdMaterial.model';
import Wastage from './branch/wastage.model';
import CashDrawerClosure from './branch/cash_drawer_closure.model';

import Product from './inventory/product.model';
import ProductCategory from './inventory/Product_category.model';
import Materials from './inventory/materials.model';
import Recipe from './inventory/recipe.model';
import Vendor from './inventory/vendor.model';
import Warehouse from './inventory/warehouse.model';
import WarehouseHaveMaterials from './inventory/warehouse_have_materials.model';
import PurchaseOrder from './inventory/purchase_order.model';
import PurchaseOrderItem from './inventory/purchase_order_item.model';
import InventoryTransaction from './inventory/inventory_transaction.model';
import IsPurchased from './inventory/is_purchased.model';

// Import other models
import { Deposit } from './deposit.model';

export function initModels(sequelizeInstance: Sequelize = sequelize) {
  Users.initialize(sequelizeInstance);
  Customers.initialize(sequelizeInstance);
  Employees.initialize(sequelizeInstance);
  EmpHistory.initialize(sequelizeInstance);
  Payments.initialize(sequelizeInstance);
  Orders.initialize(sequelizeInstance);
  OrderItem.initialize(sequelizeInstance);
  WorkOn.initialize(sequelizeInstance);
  
  Branch.initialize(sequelizeInstance);
  EmpShift.initialize(sequelizeInstance);
  Expense.initialize(sequelizeInstance);
  Holds.initialize(sequelizeInstance);
  Wastage.initialize(sequelizeInstance);
  CashDrawerClosure.initialize(sequelizeInstance);
  
  Product.initialize(sequelizeInstance);
  ProductCategory.initialize(sequelizeInstance);
  Materials.initialize(sequelizeInstance);
  Recipe.initialize(sequelizeInstance);
  Vendor.initialize(sequelizeInstance);
  Warehouse.initialize(sequelizeInstance);
  WarehouseHaveMaterials.initialize(sequelizeInstance);
  PurchaseOrder.initialize(sequelizeInstance);
  PurchaseOrderItem.initialize(sequelizeInstance);
  InventoryTransaction.initialize(sequelizeInstance);
  IsPurchased.initialize(sequelizeInstance);
  
  // Initialize Deposit model
  Deposit.init({
    deposit_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    amount: { type: DataTypes.DECIMAL, allowNull: false },
    deposit_date: { type: DataTypes.DATE, allowNull: false },
    due_date: { type: DataTypes.DATE, allowNull: false },
    return_date: { type: DataTypes.DATE },
    status: { type: DataTypes.STRING, allowNull: false }
  }, { sequelize: sequelizeInstance, tableName: 'deposit', timestamps: false });

  // --- Associations ---
  // User relationships
  Users.hasOne(Customers, { foreignKey: 'user_id' });
  Customers.belongsTo(Users, { foreignKey: 'user_id' });

  Users.hasOne(Employees, { foreignKey: 'user_id' });
  Employees.belongsTo(Users, { foreignKey: 'user_id' });

  // Employee relationships
  Employees.hasMany(EmpHistory, { foreignKey: 'employee_id' });
  EmpHistory.belongsTo(Employees, { foreignKey: 'employee_id' });

  // Customer relationships
  Customers.hasMany(Payments, { foreignKey: 'customer_id' });
  Payments.belongsTo(Customers, { foreignKey: 'customer_id' });

  // Order relationships
  Customers.hasMany(Orders, { foreignKey: 'customer_id' });
  Orders.belongsTo(Customers, { foreignKey: 'customer_id' });

  Employees.hasMany(Orders, { foreignKey: 'employee_id' });
  Orders.belongsTo(Employees, { foreignKey: 'employee_id' });

  Orders.hasMany(OrderItem, { foreignKey: 'order_id' });
  OrderItem.belongsTo(Orders, { foreignKey: 'order_id' });

  // Product relationships
  Product.hasMany(OrderItem, { foreignKey: 'product_id' });
  OrderItem.belongsTo(Product, { foreignKey: 'product_id' });

  // Branch relationships
  Branch.hasMany(EmpShift, { foreignKey: 'branch_id' });
  EmpShift.belongsTo(Branch, { foreignKey: 'branch_id' });
  
  Branch.hasMany(Expense, { foreignKey: 'branch_id' });
  Expense.belongsTo(Branch, { foreignKey: 'branch_id' });
  
  Branch.hasMany(Holds, { foreignKey: 'branch_id' });
  Holds.belongsTo(Branch, { foreignKey: 'branch_id' });

  // Warehouse relationships
  Warehouse.belongsToMany(Materials, { 
    through: WarehouseHaveMaterials, 
    foreignKey: 'warehouse_id', 
    otherKey: 'material_id' 
  });
  Materials.belongsToMany(Warehouse, { 
    through: WarehouseHaveMaterials, 
    foreignKey: 'material_id', 
    otherKey: 'warehouse_id' 
  });

  // Product relationships
  Product.belongsTo(ProductCategory, { 
    foreignKey: 'category_name', 
    targetKey: 'name' 
  });
  ProductCategory.hasMany(Product, { 
    foreignKey: 'category_name', 
    sourceKey: 'name' 
  });
  
  // Recipe relationships
  Product.hasMany(Recipe, { foreignKey: 'product_id' });
  Recipe.belongsTo(Product, { foreignKey: 'product_id' });
  
  Materials.hasMany(Recipe, { foreignKey: 'material_id' });
  Recipe.belongsTo(Materials, { foreignKey: 'material_id' });
  
  // Inventory transaction relationships
  Materials.hasMany(InventoryTransaction, { foreignKey: 'material_id' });
  InventoryTransaction.belongsTo(Materials, { foreignKey: 'material_id' });
  
  // Purchase order relationships
  Vendor.hasMany(PurchaseOrder, { foreignKey: 'vendor_id' });
  PurchaseOrder.belongsTo(Vendor, { foreignKey: 'vendor_id' });
  
  PurchaseOrder.hasMany(PurchaseOrderItem, { foreignKey: 'purchase_order_id' });
  PurchaseOrderItem.belongsTo(PurchaseOrder, { foreignKey: 'purchase_order_id' });
  
  Materials.hasMany(PurchaseOrderItem, { foreignKey: 'material_id' });
  PurchaseOrderItem.belongsTo(Materials, { foreignKey: 'material_id' });
}

export {
  Users,
  Customers,
  Employees,
  EmpHistory,
  Payments,
  Orders,
  OrderItem,
  WorkOn,
  
  Branch,
  EmpShift,
  Expense,
  Holds,
  Wastage,
  CashDrawerClosure,
  
  Product,
  ProductCategory,
  Materials,
  Recipe,
  Vendor,
  Warehouse,
  WarehouseHaveMaterials,
  PurchaseOrder,
  PurchaseOrderItem,
  InventoryTransaction,
  IsPurchased,

  Deposit
};