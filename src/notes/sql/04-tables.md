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

## Selecting (Retrieving) Data from a Table

The `SELECT` statement is used to retrieve data from a table.

Using the `*` wildcard allows you to select all columns from the specified table, but normally you would specify particular columns to retrieve.
Remeber that a column is a variable name in a table, like CustomerID or CustomerFirstName in the Customers table, while a row is a single record in that table, containing values for each column.

### Syntax

    ```sql

    SELECT * FROM _tablename;
    ```

`SELECT` and `FROM` are SQL clauses and should be written in uppercase for better readability, while `_tablename` should be replaced with the actual name of the table you want to query.

## Aliasing with the "AS" Keyword

The AS keyword in SQL is used to create an alias, which is a temporary name for a table or column in a query. This can make the output more readable or help avoid naming conflicts.

### Syntax

    ```sql

    SELECT columnname AS aliasname

    FROM tablename;
    ```

    This will return all of the data from the specified column but with the column header renamed to the alias name.

## Removing Duplicates with the Distinct Keyword

The DISTINCT keyword in SQL is used to return only unique (distinct) values from a specified column, eliminating duplicate entries in the result set.

If you have a table called "Inventory" which has several rows with duplicate names like "Apple" and "Banana", using the DISTINCT keyword will ensure that each fruit appears only once in the results.

```sql
SELECT DISTINCT columnname
FROM tablename;
```

## Adding Specificity with the WHERE Clause

The WHERE clause in SQL is used to filter records and specify which rows should be returned based on a given condition.

### Syntax

    ```sql

    SELECT columnname1, columnname2

    FROM tablename

    WHERE condition;
    ```

    This will return only the rows that meet the specified condition in the WHERE clause.

    Examples of conditions include:
    - columnname = value
    - columnname > value
    - columnname < value
    - columnname LIKE pattern
    - columnname IN (value1, value2, ...)
    - columnname BETWEEN value1 AND value2
    - columnname IS NULL / IS NOT NULL

### Checking for NULL of NOT NULL Values

Using the where clause, you can filter for NULL or NOT NULL values in a column using `is` and `is not` operators.

    ```sql

    SELECT columnname1, columnname2

    FROM tablename

    WHERE columnname IS NULL;

    SELECT columnname1, columnname2

    FROM tablename

    WHERE columnname IS NOT NULL;
    ```

#### Tip: The WHERE clause is essential for narrowing down results and retrieving only the data that meets specific criteria, making your queries more efficient and relevant.

### Using the LIKE Pattern Matching Operator and Wildcards (`%` and `_`)

The LIKE operator in SQL is used in the WHERE clause to search for a specified pattern in a column. It allows for wildcard characters to be used for more flexible matching.

Provide a string pattern to match against the values in the specified column.

The patterna starts with a character string, and can include `_` and `%` as wildcard characters.

The underscore (`_`) represents a single character, while the percent sign (`%`) represents zero or more characters.

To match any value that starts with 'a', you would use 'a%'.

To match any value that ends with 'a', you would use '%a'.

To match any value that contains 'a' anywhere, you would use '%a%'.

To match a value with 'a' as the second character, you would use '\_a%'.

To match a value with 'a' as the second to last character, you would use '%a\_'.

To match a an value that starts with 'a' and ends with 'c', you would use 'a%c', or 'a_c' to match a value that starts with 'a', ends with 'c', and has exactly one character in between.

Multiple wildcards can be used in a single pattern.

### Syntax

    ```sql

    SELECT columnname1, columnname2

    FROM tablename

    WHERE columnname LIKE pattern;
    ```

### Using The BETWEEN Operator

The BETWEEN operator in SQL is used in the WHERE clause to filter the result set within a certain range. It can be used with numeric, date, or text data types.

Using BETWEEN, has some interesting properties:

- It is inclusive, meaning it includes the boundary values specified in the range.
- It can be used with numbers, dates, and text (strings).

### Syntax

    ```sql

    SELECT columnname1, columnname2

    FROM tablename

    WHERE columnname BETWEEN value1 AND value2;
    ```

    If wanting to include years in a range, you would use:

    ```sql
    SELECT * FROM tablename
    WHERE year BETWEEN 2000 AND 2020;
    ```

    This would return all rows where the year is between 2000 and 2020, inclusive of both years.

    If using for inclusive text ranges like:

    ```sql
    SELECT * FROM tablename
    WHERE name BETWEEN 'A' AND 'M';
    ```

    This would return all rows where the name starts with letters from A to M, inclusive.

    It is a bit weird however, as if a name is EXACTLY "M", it would be included, but "MARY" would not, since it starts with "MA", which is after "M" in alphabetical order.

## Using the AND operator

The AND operator checks for multiple conditions in the WHERE clause. All conditions separated by AND must be true for a row to be included in the result set.

### Syntax

    ```sql

    SELECT columnname1, columnname2

    FROM tablename

    WHERE name IS NOT NULL AND year BETWEEN 2000 AND 2020;
    ```

    ## OR Operator

The OR operator checks for multiple conditions in the WHERE clause. If any of the conditions separated by OR is true, the row will be included in the result set.

### Syntax

    ```sql

    SELECT columnname1, columnname2

    FROM tablename

    WHERE name IS NULL OR year < 2000;
    ```

#### Tip: Combining AND and OR operators can help create complex filtering criteria to retrieve specific data from a table.
