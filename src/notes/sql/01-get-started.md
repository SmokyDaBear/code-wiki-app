# Getting started with SQL 🖥️ 🪛

## The SQL CREATE DATABASE Statement

The CREATE DATABASE statement is used to create a new SQL database.

### Syntax -

    CREATE DATABASE "databasename";

### CREATE DATABASE Example

The following SQL statement creates a database called "testDB":

    CREATE DATABASE testDB;

#### Tip: Make sure you have admin privilege before creating any database. Once a database is created, you can check it in the list of databases with the following SQL command:

    SHOW DATABASES;

## The SQL DROP DATABASE Statement

The DROP DATABASE statement is used to drop an existing SQL database.

### Syntax

    DROP DATABASE databasename;

### Note: Be careful before dropping a database. Deleting a database will result in complete loss of information stored in the database!

## The SQL BACKUP DATABASE Statement

The BACKUP DATABASE statement is used in SQL Server to create a full back up of an existing SQL database.

### Syntax

    BACKUP DATABASE databasename

    TO DISK = 'filepath';

## The SQL BACKUP WITH DIFFERENTIAL Statement

A differential back up only backs up the parts of the database that have changed since the last full database backup.

### Syntax

    BACKUP DATABASE databasename

    TO DISK = 'filepath'

    WITH DIFFERENTIAL;

### BACKUP DATABASE Example

The following SQL statement creates a full back up of the existing database "testDB" to the D disk:

### Example

    BACKUP DATABASE testDB

    TO DISK = 'D:\backups\testDB.bak';

#### Tip: Always back up the database to a different drive than the actual database. Then, if you get a disk crash, you will not lose your backup file along with the database.

### BACKUP WITH DIFFERENTIAL Example

The following SQL statement creates a differential back up of the database "testDB":

### Example

    BACKUP DATABASE testDB

    TO DISK = 'D:\backups\testDB.bak'

    WITH DIFFERENTIAL;

#### Tip: A differential back up reduces the back up time (since only the changes are backed up).


#### Previous: Explore the SQL learning notes overview in the [Learn SQL 🌎](sql-index.md) notes to understand the structure of the SQL learning material.
