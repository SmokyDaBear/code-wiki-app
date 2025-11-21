# SQLite

SQLite is a lightweight, serverless, self-contained SQL database engine. It is widely used in mobile applications, embedded systems, and for prototyping due to its simplicity and minimal setup requirements.

### PRO's

- Lightweight and fast
- Serverless architecture
- Zero configuration
- Cross-platform compatibility
- Public domain and free to use

### CON's

- Limited concurrency support
- **Doesn't validate data types strictly**
- Not suitable for high-volume, multi-user applications
- Only one write operation at a time, though multiple read operations can occur simultaneously
- Lacks some advanced features found in larger RDBMS (e.g., stored procedures, user-defined functions)

## Installing SQLite

Note that `bash` commands are to be run in your terminal.

### On Linux (Ubuntu/Debian)

```bash
sudo apt update
sudo apt install sqlite3
```

### On macOS

You can install SQLite using Homebrew:

```bash
brew install sqlite3
```

### On Windows

1. Download the precompiled binaries from the [SQLite download page](https://www.sqlite.org/download.html). It should be labeled as sqlite-tools.... .zip.

   - Depending on your system architecture, download either the 32-bit or 64-bit version of the SQLite tools (e.g., `sqlite-tools-win32-x86-xxxxxx.zip`).
   - Select the arm64 version if you are using a Windows device with an ARM processor.
   - Select the x64 version if you are using a Windows device with an Intel or AMD processor.

#### If you are unsure which version to download, check your system information:

- Open the Start menu and type "System Information".
- Look for "System Type" to see if it says "x64-based PC" (64-bit) or "ARM-based PC" (ARM).

2. Extract the files and add the directory containing `sqlite3.exe` to your system's PATH.

- Recommended Path: `C:\Program Files\SQLite`

- To add SQLite to your PATH:
  - Right-click on 'This PC' or 'Computer' on the desktop or in File Explorer.
  - Select 'Properties'.
  - Click on 'Advanced system settings'.
  - Click on the 'Environment Variables' button.
  - In the 'System variables' section, find and select the 'Path' variable, then click 'Edit'.
  - Click 'New' and add the path to the directory where `sqlite3.exe` is located (e.g., `C:\Program Files\SQLite`).
  - Click 'OK' to close all dialog boxes.

3. Test the installation by opening Command Prompt or Powershell and typing:

```bash
sqlite3 --version
```

## Using SQLite

Once installed, you can start using SQLite by running the following command in your terminal:

```bash
sqlite3 database.db
```

This command opens an interactive SQLite shell where you can execute SQL commands.

## Basic SQLite Commands

Once you have SQLite installed, you can use the following basic commands to interact with your SQLite database:

- `.open database.db` - Opens (or creates) a database file named `database.db`.
- `.tables` - Lists all tables in the current database.
- `.schema tablename` - Displays the schema (structure) of the specified table.
- `.exit` - Exits the SQLite shell.
