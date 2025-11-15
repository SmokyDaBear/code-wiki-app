# Tables in SQL 🗄️

to get started with tables in SQL, you first need to understand the concept of variables and datatypes in SQL.

#### You can review the [SQL Data Types 📊](data-types.md) notes for more information on SQL data types.

#### Tip: In SQL, a table is a collection of related data held in a structured format within a database. Each table consists of rows and columns, where each row represents a record and each column represents a field.

## The SQL CREATE TABLE Statement

The CREATE TABLE statement is used to create a new table in a database.
Constraints can also be added to columns to enforce rules on the data in the table, such as NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK, and DEFAULT.

#### Learn more about SQL constraints in the [SQL Constraints 📏](constraints.md) notes.

### Syntax

    CREATE TABLE tablename (
     column1 datatype constraint,
     column2 datatype constraint,
     column3 datatype constraint,
     ....);

### CREATE TABLE Example

The following SQL statement creates a table called "Customers" with three columns:

- "CustomerID"
- "CustomerFirstName"
- "CustomerLastName":

### Example

      CREATE TABLE Customers (
        CustomerID int,
        CustomerFirstName varchar(255),
        CustomerLastName varchar(255)
        );

#### Tip: Always define the appropriate data type for each column based on the kind of data you expect to store in that column. This helps in optimizing storage and ensuring data integrity.

## Columns and Rows in SQL Tables

In SQL tables, data is organized into columns and rows:

### Columns

- Columns represent the fields or attributes of the data. Each column has a specific data type that defines the kind of data it can hold (e.g., integer, varchar, date).
- In the "Customers" table example above, "CustomerID", "CustomerFirstName", and "CustomerLastName" are the columns.

### Rows

- Rows represent individual records or entries in the table. Each row contains data for each column defined in the table.
- For example, a row in the "Customers" table might contain the following data:
  - CustomerID: 1
  - CustomerFirstName: 'John'
  - CustomerLastName: 'Doe'

## Dropping a Table

The DROP TABLE statement is used to delete an existing table and all of its data from the database.

### Syntax

    DROP TABLE tablename;

### Drop Table Example

The following SQL statement deletes the "Customers" table:

- The DROP TABLE statement specifies the table name (Customers) to be deleted.

### Example

    DROP TABLE Customers;

### IMPORTANT‼️: Be cautious when using the DROP TABLE statement, as it permanently removes the table and all its data. Make sure to back up any important data before dropping a table.

## Altering a Table

The ALTER TABLE statement is used to modify the structure of an existing table, such as adding, deleting, or modifying columns.

### Syntax

    ALTER TABLE tablename

    ADD columnname datatype;

    ALTER TABLE tablename

    DROP COLUMN columnname;

    ALTER TABLE tablename

    MODIFY COLUMN columnname datatype;

### ALTER TABLE Example

The following SQL statements demonstrate how to alter the "Customers" table by adding, dropping, and modifying columns:

- The first statement adds a new column "CustomerEmail" of type varchar(255) to the "Customers" table.
  - This is used when you want to add a new field to your table, such as an email address, or maybe you want to store a tag for each customer like "VIP" or "Regular".
- The second statement drops the "CustomerLastName" column from the "Customers" table.
  - This is used when you no longer need a column in your table and want to remove it to save space or simplify the table structure.
- The third statement modifies the data type of the "CustomerFirstName" column to varchar(100).
  - This is useful when you need to change the size of the column to accommodate different lengths of names.
  - Can also be used in a case where you need to change the datatype of a column to better fit the data being stored like from int to bigint.

### Example

    ALTER TABLE Customers
    ADD COLUMN CustomerEmail varchar(255);

    ALTER TABLE Customers
    DROP COLUMN CustomerLastName;

    ALTER TABLE Customers
    MODIFY COLUMN CustomerFirstName varchar(100);

#### Tip: When altering a table, ensure that any changes made do not violate existing data integrity constraints or relationships with other tables.

## Selecting Data from a Table

The `SELECT` statement is used to retrieve data from a table.

Using the `*` wildcard allows you to select all columns from the specified table, but normally you would specify particular columns to retrieve.
Remeber that a column is a variable name in a table, like CustomerID or CustomerFirstName in the Customers table, while a row is a single record in that table, containing values for each column.

### Syntax

    SELECT * FROM _tablename;

`SELECT` and `FROM` are SQL clauses and should be written in uppercase for better readability, while `_tablename` should be replaced with the actual name of the table you want to query.

#### Previous: Review the [SQL Data Types 📊](data-types.md) notes to understand different data types available in SQL before creating tables.
