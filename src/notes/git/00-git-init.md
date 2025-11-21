# Git

Git is a distributed version control system that allows you to track changes in your codebase, collaborate with others, and manage different versions of your projects.

Version Control is the idea of tracking and managing changes to software code. It allows multiple developers to work on the same codebase simultaneously without overwriting each other's changes. Version control systems (VCS) keep a history of changes, making it easy to revert to previous versions if needed.

## Installing Git

Note that `bash` commands are to be run in your terminal.

### Linux (Ubuntu/Debian)

```bash
sudo apt update
sudo apt install git
```

### On macOS

You can install Git using Homebrew:

```bash
brew install git
```

### On Windows

You can install Git using the Git for Windows installer:

[https://gitforwindows.org/](https://gitforwindows.org/)

## Initializing a Git Repository

To navigate to your project directory, use the `cd`(change directory) command followed by the path to your project folder. For example:

```
cd path/to/your/project

```

Once you are in the project directory in the terminal, run the following command to initialize a new Git repository:

```
git init
```

This command creates a new subdirectory named `.git` that contains all the necessary files for the repository. You can then start tracking your project files with Git.

The `.git` directory is where Git stores all the information about the repository, including commit history, branches, and configuration settings. It is a hidden directory, so you may need to enable the option to view hidden files in your file explorer to see it.

You can verify that the repository has been initialized by running:

```
git status

```

## Using Git

Once you have initialized a Git repository, you can start using Git commands to manage your project. Here are some basic Git commands:

- `git add <file>`: Stages changes to a specific file for the next commit.
  - staging means preparing the changes to be committed.
- `git add .`: Stages all changes in the current directory for the next commit.
- `git commit -m "message"`: Commits the staged changes with a descriptive message.
- `git status`: Displays the current status of the repository, including staged and unstaged changes.
- `git log`: Shows the commit history of the repository.
- `git branch`: Lists all branches in the repository.

#### Note: A branch in Git is a separate line of development that allows you to work on different features or fixes without affecting the main codebase. Branches enable parallel development and make it easier to manage changes before merging them back into the main branch (usually called `main` or `master`).

- `git branch <branch>`: Creates a new branch with the specified name.
- `git checkout <branch>`: Switches to the specified branch.
- `git merge <branch>`: Merges the specified branch into the current branch.
- `git remote add origin <url>`: Adds a remote repository URL.
- `git push -u origin <branch>`: Pushes the local branch to the remote repository.

## Commits

A commit in Git is a snapshot of your project's files at a specific point in time. Each commit has a unique identifier (SHA-1 hash) and includes information about the changes made, the author, and the timestamp. Commits allow you to track the history of your project and revert to previous versions if needed.

To create a commit, you first need to stage the changes using `git add`, and then use `git commit` to save the changes to the repository. For example:

```
git add . //Using the `.` stages ALL changes in the current directory
git commit -m "Initial commit"// -m flag is used to provide a commit message
```

#### Note that if you only want to commit specific files, you can replace the `.` in the `git add` command with the names of those files like `git add file1.txt file2.txt`
