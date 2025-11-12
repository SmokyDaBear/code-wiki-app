# Overview of SQL Data Types

SQL data types define the kind of data that can be stored in a column of a database table. Choosing the correct data type is essential for data integrity, storage efficiency, and query performance.

## Main Categories of SQL Data Types

### Numeric Data Types

| Data Type | Description                | Range/Size                                              |
| --------- | -------------------------- | ------------------------------------------------------- |
| INT       | Standard integer values    | -2,147,483,648 to 2,147,483,647                         |
| BIGINT    | Large integer numbers      | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 |
| SMALLINT  | Small integers             | -32,768 to 32,767                                       |
| TINYINT   | Very small integers        | 0 to 255                                                |
| DECIMAL   | Exact fixed-point numbers  | -10^38 + 1 to 10^38 - 1                                 |
| FLOAT     | Approximate numeric values | -1.79E+308 to 1.79E+308                                 |

### Character and String Data Types

| Data Type | Description                      | Max Length              |
| --------- | -------------------------------- | ----------------------- |
| CHAR      | Fixed-length character string    | 1 to 8,000 characters   |
| VARCHAR   | Variable-length character string | 1 to 8,000 characters   |
| TEXT      | Large variable-length string     | Up to 2^31-1 characters |

### Date and Time Data Types

| Data Type | Description                      |
| --------- | -------------------------------- |
| DATE      | Stores date values               |
| TIME      | Stores time values               |
| DATETIME  | Stores both date and time values |

### Binary Data Types

| Data Type | Description                 | Max Length         |
| --------- | --------------------------- | ------------------ |
| BINARY    | Fixed-length binary data    | 1 to 8,000 bytes   |
| VARBINARY | Variable-length binary data | 1 to 8,000 bytes   |
| BLOB      | Stores binary large objects | Up to 2^31-1 bytes |

### Miscellaneous Data Types

| Data Type | Description                |
| --------- | -------------------------- |
| BOOLEAN   | Stores TRUE or FALSE       |
| JSON      | Stores JSON formatted data |
| XML       | Stores XML data            |

### Importance of Choosing the Right Data Type

Selecting the appropriate data type ensures efficient storage, accurate operations, and validation of input data. It also helps in optimizing query performance and maintaining data integrity. Always consult the documentation for your specific SQL database system to understand the nuances of data types.

## Variables in SQL

Variables are used to store data values. When creating tables, you need to define the datatype for each column in the table.

#### Up Next: Learn about creating tables in SQL and how to define columns with appropriate data types in the [Tables in SQL 🗄️](tables.md) notes.

#### Previous: Review the [SQL Basics 📝](basics.md) notes to understand fundamental SQL concepts before diving into data types and tables.
