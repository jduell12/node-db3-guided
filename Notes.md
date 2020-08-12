## Multi-Table SQL Queries

- Join 2 tables
  - SELECT orders.orderID, customers.customerName, orders. employeeID, orders.orderDate, orders.shipperID FROM Orders JOIN Customers ON Orders.customerID = Customers.customerid;
    - joins two tables together - shows the customer Name as well the the order columns
- Join more than 2 tables
  - SELECT orders.orderID, customers.customerName, orders employeeId, employees.firstName, employees.lastName, orders orderDate, orders.shipperID FROM Orders JOIN Customers ON Orders.customerID = Customers.customerid JOIN Employees ON Orders.EmployeeID = Employees.employeeID;
    - joins 3 tables together
      - orders, employees, customers
- Can give the table title an alias instead of writing out the whole name every time
  - SELECT o.orderID, c.customerName, o.employeeId, e.firstName, e.lastName, o.orderDate, o.shipperID FROM Orders as o JOIN Customers as c ON o.customerID = c.customerid JOIN Employees as e ON o.EmployeeID = e.employeeID;
- Can change the name of the column that is returned on the query
  - SELECT o.orderID, c.customerName as Customer, e.firstName, e.lastName, o.orderDate FROM Orders as o JOIN Customers as c ON o.customerID = c.customerid JOIN Employees as e ON o.EmployeeID = e.employeeID;
    - changes column custerName to Customer
- Add two table names together
  - SELECT o.orderID, c.customerName as Customer, (e.firstName || ' ' || e.lastName) as Sold_By, o.orderDate FROM Orders as o JOIN Customers as c ON o.customerID = c.customerid JOIN Employees as e ON o.EmployeeID = e.employeeID;
    - adds employee first name and last name together in one column named Sold_By

## Multi-table Queries Using Knex

-
