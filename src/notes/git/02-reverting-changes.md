# Reverting Changes in Git

In Git, reverting changes refers to the process of undoing modifications made to files in your repository. There are several ways to revert changes depending on the state of the changes (staged, unstaged, or committed).

## Reverting Unstaged Changes

If you have made changes to a file but have not yet staged them (i.e., you haven't run `git add`), you can revert those changes using the following command:

```bash
git checkout -- <file>
```

This command will discard the changes made to the specified file and restore it to the last committed state.

## Reverting Staged Changes

If you have staged changes (i.e., you have run `git add`), but want to unstage them, you can use the following command:

```bash
git reset HEAD <file>
```

This command will unstage the specified file, but keep the changes in your working directory. You can then choose to either discard the changes or modify them further.

## Reverting Committed Changes

If you have already committed changes and want to revert them, you can use the `git revert` command. This command creates a new commit that undoes the changes made in a specific commit.

```bash
git revert <commit-hash>
```

- `<commit-hash>`: The hash of the commit you want to revert.
  For example, to revert the most recent commit, you can use:

```bash
git revert HEAD
```

This will open your default text editor to create a commit message for the revert. Save and close the editor to complete the revert.

## Force Reverting to a Previous Commit

If you want to discard all changes after a specific commit and reset your branch to that commit, you can use the `git reset` command with the `--hard` option:

```bash
git reset --hard <commit-hash>
```

- `<commit-hash>`: The hash of the commit you want to reset to.
  For example, to reset to the commit before the most recent one, you can use:

```bash
git reset --hard HEAD~1
```

**Warning:** This command will discard all changes made after the specified commit, including uncommitted changes. Use it with caution.
