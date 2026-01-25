# Row Level Security (RLS)

Row level security allows administrators of a database to control and limit access to data within a table based on the characteristics of the user executing a query. This means that different users can have different levels of access to the same table, depending on the policies defined.

## Enabling Row Level Security

After a table has been created, RLS can be enabled using the following command:

```sql

ALTER TABLE table_name ENABLE ROW LEVEL SECURITY;

```

After enabling RLS, the table will be inaccessible to all users except for the table owner and superusers until policies are defined.

If you want to disable RLS for a table, you can use the following command:

```sql

ALTER TABLE table_name DISABLE ROW LEVEL SECURITY;

```

And lastly, if you want to force RLS to be applied even for table owners and superusers, you can use the following command:

```sql

ALTER TABLE table_name FORCE ROW LEVEL SECURITY;

```

Forcing RLS ensures that all users, including table owners and superusers, are subject to the defined RLS policies when accessing the table.
This is useful in scenarios where strict data access control is required, regardless of user privileges like with PII data (social security numbers, etc.).

## Assigning Policies to a Command

The available commands for retrieving, inserting, updating, or deleting rows in a table are:

- SELECT
- INSERT
- UPDATE
- DELETE

Same as SQL.

To allow a user to perform a specific command on a table, a policy must be created for that command. For example, to allow users to SELECT rows from a table based on a condition, the following command can be used:

```sql
CREATE POLICY policy_name ON table_name
    FOR SELECT
    USING (condition);
```

### USING vs WITH CHECK

USING and WITH CHECK are two different clauses used to test a condition before allowing access to rows in a table with RLS policies.

They are slightly different in their application:

- USING: This clause is used to filter rows when a user is trying to SELECT or DELETE rows from a table. The condition specified in the USING clause is evaluated for each row, and only those rows that satisfy the condition are returned to the user.
- WITH CHECK: This clause is used to validate rows when a user is trying to INSERT or UPDATE rows in a table. The condition specified in the WITH CHECK clause is evaluated for each row being inserted or updated, and only those rows that satisfy the condition are allowed to be added or modified in the table.

Using one in place of the other can lead to different behaviors when accessing or modifying data in a table with RLS policies.
Typically, and error will be thrown if the wrong clause is used for the command.

## Example

Consider a table named "employees" with the following structure:

```sql
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(100),
    salary NUMERIC
);
```

To enable RLS on the "employees" table, the following command can be used:

```sql

ALTER TABLE employees ENABLE ROW LEVEL SECURITY;

```

Next, a policy can be created to allow users to SELECT rows from the "employees" table only if they belong to the same department as the user. Assuming there is a function `current_user_department()` that returns the department of the current user, the policy can be created as follows:

```sql
CREATE POLICY select_department_policy ON employees
    FOR SELECT
    USING (department = current_user_department());
```

With this policy in place, when a user tries to SELECT rows from the "employees" table, they will only see the rows where the department matches their own department.

Typically, such as with Supabase, there is an auth schema that contains user information that is useful for authentication and authorization.

This can be used such as in the case of checking the user's UUID against a "user_id" column in a table to ensure that users can only access their own data.
For example, if there is a "projects" table with a "user_id" column, a policy can be created to allow users to SELECT only their own projects as follows:

```sql
CREATE POLICY select_own_projects_policy ON projects
    FOR SELECT
    USING (user_id = auth.uid());
```

With this policy in place, when a user tries to SELECT rows from the "projects" table, they will only see the rows where the "user_id" matches their own UUID.
