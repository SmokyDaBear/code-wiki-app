# Manipulating Data in SQL 🛠️

## The SQL INSERT INTO Statement

The INSERT INTO statement is used to insert new records into a table.

### Syntax

    INSERT INTO tablename (column1, column2, column3,...)

    VALUES (value1, value2, value3,...);

### INSERT INTO Example

The following SQL statement inserts a new record into the "Customers" table:

- The INSERT INTO statement specifies the table name (Customers) and the columns to insert data into (CustomerID, CustomerFirstName, CustomerLastName).
- The VALUES clause provides the corresponding values for each column in the new record.

### Example

    INSERT INTO Customers (CustomerID, CustomerFirstName, CustomerLastName)

    VALUES (1, 'John', 'Doe');

## The SQL UPDATE Statement

The UPDATE statement is used to modify existing records in a table.

### Syntax

    UPDATE tablename

    SET column1 = value1, column2 = value2, ...

    WHERE condition;

### UPDATE Example

The following SQL statement updates the last name of the customer with CustomerID 1:

- The UPDATE statement modifies the CustomerLastName column in the Customers table.
- The SET clause specifies the new value for the CustomerLastName column.
- The WHERE clause ensures only the record with CustomerID 1 is updated.

### Example

    UPDATE Customers

    SET CustomerLastName = 'Smith'

    WHERE CustomerID = 1;

#### Tip: Always use the WHERE clause to specify which record(s) to update. If you omit the WHERE clause, all records in the table will be updated!

## The SQL DELETE Statement

The DELETE statement is used to delete existing records in a table.

### Syntax

    DELETE FROM tablename

    WHERE condition;

### DELETE Example

The following SQL statement deletes the customer with CustomerID 1:

- The DELETE FROM statement specifies the table name (Customers) from which to delete records.
- The WHERE clause ensures only the record with CustomerID 1 is deleted.

### Example

    DELETE FROM Customers

    WHERE CustomerID = 1;

#### Tip: Always use the WHERE clause to specify which record(s) to delete. If you omit the WHERE clause, all records in the table will be deleted!


#### Previous: Review the [Tables in SQL 🗄️](tables.md) notes to understand how to create and define tables before manipulating data.
