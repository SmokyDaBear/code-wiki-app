# Database Structure In PostgreSQL

A relational database like PostgreSQL organizes data into tables, which consist of rows and columns. Each table represents a specific entity (e.g., users, products, orders), and each row in the table represents a unique record of that entity. Columns define the attributes of the entity.

Parts of a Database Structure:

- Schema: A schema is a logical container that holds database objects such as tables, views, and functions. It helps organize and group related objects within a database.
- Table: A table is a collection of related data organized into rows and columns. Each table has a unique name within a schema.
- Column: A column represents a specific attribute or field of a table. Each column has a name and a data type (e.g., integer, text, date).
- Row: A row represents a single record in a table, containing values for each column defined in the table.
- Primary Key: A primary key is a column or a set of columns that uniquely identifies each row in a table. It ensures that no two rows have the same primary key value.
- Foreign Key: A foreign key is a column or a set of columns in one table that refers to the primary key in another table. It establishes a relationship between the two tables.
- Index: An index is a database object that improves the speed of data retrieval operations on a table. It is created on one or more columns of a table.
- View: A view is a virtual table that is based on the result set of a SQL query. It provides a way to present data from one or more tables in a customized format.
- Function: A function is a reusable piece of code that performs a specific task and can return a value. Functions can be used to encapsulate complex logic and can be called from SQL queries.
- Sequence: A sequence is a database object that generates a sequence of unique numeric values, often used for auto-incrementing primary key columns.
- Constraint: A constraint is a rule that defines certain conditions that data in a table must satisfy. Common types of constraints include NOT NULL, UNIQUE, CHECK, and FOREIGN KEY constraints.
- Trigger: A trigger is a special type of stored procedure that automatically executes in response to certain events on a table, such as INSERT, UPDATE, or DELETE operations.
- Transaction: A transaction is a sequence of one or more SQL operations that are executed as a single unit of work. Transactions ensure data integrity and consistency by following the ACID properties (Atomicity, Consistency, Isolation, Durability).
- Schema Migration: Schema migration refers to the process of making changes to the database schema, such as adding or modifying tables, columns, or constraints. Tools like Flyway or Liquibase can help manage schema migrations in a controlled manner.
- Data Types: PostgreSQL supports a wide range of data types for columns, including numeric types (e.g., INTEGER, FLOAT), character types (e.g., VARCHAR, TEXT), date/time types (e.g., DATE, TIMESTAMP), boolean types (e.g., BOOLEAN), and more complex types like JSON, ARRAY, and UUID.

## Initializing a Database

To begin using a PostgreSQL database, you typically need to create a new database instance. This can be done using the `createdb` command-line utility or through SQL commands.
If using a backend that is hosted by a service like Supabase, the database is usually created for you when you set up a new project.

Next, after the database is created it's time to add a schema (if needed) and tables to store your data.

Here is an example of creating a new database, schema, and table using SQL commands:

```sql
-- Create a new database
CREATE DATABASE my_database;
-- Connect to the newly created database
\c my_database;
-- Create a new schema
CREATE SCHEMA auth;
-- Create a new table within the schema
CREATE TABLE auth.users (
    id UUID PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    password_hash VARCHAR(255) NOT NULL,
    password_updated_at TIMESTAMP DEFAULT NOW(),
    role TEXT DEFAULT 'unassigned'
)
```

This example creates a database named `my_database`, a schema named `auth`, and a `users` table within that schema with various columns to store user information.

Now, you can start inserting data into the tables and performing queries to retrieve and manipulate the data as needed.
