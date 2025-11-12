# Advanced Manipulating Data in SQL 🛠️

## The SQL MERGE Statement

The MERGE statement is used to perform insert, update, or delete operations on a target table based on the results of a join with a source table.

### Use Case

The MERGE statement is particularly useful for synchronizing two tables by applying changes from one table to another.

### Syntax

In the following example, we demonstrate the basic syntax of the MERGE statement

- TargetTable: The table to be modified.
- SourceTable: The table providing the new data.
- INTO TargetTable AS target: Specifies the target table and assigns it an alias.
- USING SourceTable AS source: Specifies the source table and assigns it an alias.
- ON target.ID = source.ID: Defines the condition for matching records between the target and source tables.
- WHEN MATCHED THEN: Specifies the action to take when a match is found (e.g., update).
- WHEN NOT MATCHED THEN: Specifies the action to take when no match is found (e.g., insert).
- WHEN NOT MATCHED BY SOURCE THEN: Specifies the action to take when a record in the target table has no corresponding record in the source table (e.g., delete).

### MERGE Example

The following SQL statement merges data from the "SourceTable" into the "TargetTable":

    MERGE INTO TargetTable AS target
    USING SourceTable AS source
    ON target.ID = source.ID
    WHEN MATCHED THEN
        UPDATE SET target.Name = source.Name, target.Age = source.Age
    WHEN NOT MATCHED THEN
        INSERT (ID, Name, Age) VALUES (source.ID, source.Name, source.Age)
    WHEN NOT MATCHED BY SOURCE THEN
        DELETE;

#### Tip: The MERGE statement can help reduce the complexity of multiple insert, update, and delete operations by combining them into a single statement.

## The SQL UPSERT Operation

The UPSERT operation is a combination of "update" and "insert". It allows you to insert a new record or update an existing record if a conflict occurs (e.g., duplicate key).

### Syntax

The following example demonstrates the basic syntax of the UPSERT operation using the INSERT ... ON CONFLICT statement (PostgreSQL syntax):

    INSERT INTO tablename (column1, column2, column3)
    VALUES (value1, value2, value3)
    ON CONFLICT (conflict_column)
    DO UPDATE SET column1 = EXCLUDED.column1, column2 = EXCLUDED.column2;

### UPSERT Example

The following SQL statement performs an UPSERT operation on the "Customers" table:
INSERT INTO Customers (CustomerID, CustomerFirstName, CustomerLastName)
VALUES (1, 'Jane', 'Doe')
ON CONFLICT (CustomerID)
DO UPDATE SET CustomerFirstName = EXCLUDED.CustomerFirstName, CustomerLastName = EXCLUDED.CustomerLastName;

#### Tip: The UPSERT operation is useful for maintaining data integrity and avoiding duplicate records in a table.
