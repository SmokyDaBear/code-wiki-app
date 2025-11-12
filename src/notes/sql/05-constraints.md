# SQL Constraints 📏

SQL constraints are rules applied to table columns to enforce data integrity and consistency. They help ensure that the data entered into the database adheres to specific requirements.

## Common SQL Constraints

Here are some of the most commonly used SQL constraints:

- **NOT NULL**: Ensures that a column cannot have a NULL value. This constraint is used when you want to make sure that a field always contains a value.
- **UNIQUE**: Ensures that all values in a column are unique. This constraint is used when you want to prevent duplicate entries in a column.
- **PRIMARY KEY**: A combination of NOT NULL and UNIQUE. It uniquely identifies each record in a table. Each table can have only one primary key, which can consist of one or more columns.
- **FOREIGN KEY**: A field (or collection of fields) in one table that refers to the PRIMARY KEY in another table. This constraint is used to establish a link between the data in two tables and enforce referential integrity.
- **CHECK**: Ensures that all values in a column satisfy a specific condition. This constraint is used to limit the range of values that can be placed in a column.
- **DEFAULT**: Sets a default value for a column when no value is specified during the insertion of a new record. This constraint is used to ensure that a column always has a value, even if the user does not provide one.

## Example of SQL Constraints

The following SQL statement creates a table called "Employees" with various constraints applied to its columns:

- "EmployeeID" is defined as the PRIMARY KEY, ensuring that each employee has a unique identifier.
- "FirstName" and "LastName" are defined with the NOT NULL constraint, ensuring that these fields must have values.
- "Email" is defined with the UNIQUE constraint, ensuring that no two employees can have the same email address.
- "DepartmentID" is defined as a FOREIGN KEY that references the "Departments" table, establishing a relationship between employees and their departments.
- "Salary" is defined with a CHECK constraint to ensure that the salary is always greater than 0.
- "HireDate" is defined with a DEFAULT constraint to automatically set the hire date to the current date if no value is provided during insertion.

## Example

    CREATE TABLE Employees (
      EmployeeID int PRIMARY KEY,
      FirstName varchar(50) NOT NULL,
      LastName varchar(50) NOT NULL,
      Email varchar(100) UNIQUE,
      DepartmentID int,
      Salary decimal(10, 2) CHECK (Salary > 0),
      HireDate date DEFAULT GETDATE(),
      FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID)
    );

#### Tip: Using constraints effectively can help maintain the quality and reliability of your database by preventing invalid data from being entered, and ensuring relationships between tables are preserved with referential integrity.

## NOT NULL Constraint Example

Useful when you want to ensure that certain fields always have values.

    CREATE TABLE Students (
      StudentID int PRIMARY KEY,
      FirstName varchar(50) NOT NULL,
      LastName varchar(50) NOT NULL,
      Email varchar(100) UNIQUE
    );

## UNIQUE Constraint Example

Useful when you want to prevent duplicate entries in a column, such as email addresses.

    CREATE TABLE Products (
      ProductID int PRIMARY KEY,
      ProductName varchar(100) UNIQUE,
      Price decimal(10, 2)
    );

## PRIMARY KEY Constraint Example

    Essential for uniquely identifying each record in a table.
      CREATE TABLE Categories (
      CategoryID int PRIMARY KEY,
      CategoryName varchar(100) NOT NULL
    );

## FOREIGN KEY Constraint Example

Useful for establishing relationships between tables, such as linking orders to customers.

    CREATE TABLE Orders (
      OrderID int PRIMARY KEY,
      OrderDate date,
      CustomerID int,
      FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
    );


#### Home: Return to the [Learn SQL 🌎](sql-index.md) main index for more SQL topics and resources.
