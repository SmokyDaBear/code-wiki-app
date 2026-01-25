# Postrgres Data Types

PostgreSQL offers a rich variety of data types to accommodate different kinds of data. Choosing the appropriate data type for each column in your tables is crucial for optimizing storage, performance, and data integrity.

## Numeric Types

- `SMALLINT`: 2-byte integer, range: -32,768 to 32,767
- `INTEGER` or `INT`: 4-byte integer, range: -2,147,483,648 to 2,147,483,647
- `BIGINT`: 8-byte integer, range: -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
- `DECIMAL` or `NUMERIC`: Variable precision, exact numeric type
- `REAL`: 4-byte floating-point number
- `DOUBLE PRECISION`: 8-byte floating-point number

## Character Types

- `CHAR(n)`: Fixed-length character type, where n is the length
- `VARCHAR(n)`: Variable-length character type with a limit of n characters
- `TEXT`: Variable-length character type with no specific limit

## Date/Time Types

- `DATE`: Calendar date (year, month, day)
- `TIME` [WITHOUT TIME ZONE]: Time of day (hour, minute, second)
- `TIMESTAMP` [WITHOUT TIME ZONE]: Date and time (year, month, day, hour, minute, second)
- `TIMESTAMP WITH TIME ZONE`: Date and time with time zone information
- `TIMESTAMPTZ`: Abbreviation for `TIMESTAMP WITH TIME ZONE`
- `INTERVAL`: Time span

## Boolean Type

- `BOOLEAN`: Represents true/false values

## UUID Type

- `UUID`: Universally Unique Identifier, a 128-bit value used for unique identification

## JSON Types

- `JSON`: Textual JSON data
- `JSONB`: Binary JSON data, more efficient for indexing and querying

## Array Types

- PostgreSQL supports arrays of any data type, e.g., `INTEGER[]`, `TEXT[]`

## Ascending Numbers

Typically used for indexing rows of a table with unique values and usually as primary keys.

- `SERIAL`: Auto-incrementing 4-byte integer
- `BIGSERIAL`: Auto-incrementing 8-byte integer
