# Merging in Git

Merging in Git is the process of integrating changes from one branch into another. This is typically done using the `git merge` command.

## Basic Merge

To merge changes from one branch into another, first, ensure you are on the branch you want to merge into (the target branch). You can switch branches using the `git checkout` command:

```bash
git checkout <target-branch>
```

You can then merge the changes from the source branch using the `git merge` command:

```bash
git merge <source-branch>
```

### Target and Source Branches

- The `<target-branch>` is the branch you want to merge changes into.
- The `<source-branch>` is the branch you want to merge changes from.

For example, to merge changes from a branch named `feature` into the `main` branch, you would run:

```bash
git checkout main
git merge feature
```

## Merge Conflicts

Sometimes, Git may encounter conflicts when merging branches. This happens when changes in the source branch conflict with changes in the target branch. When a conflict occurs, Git will pause the merge process and mark the conflicted files. You will need to manually resolve the conflicts by editing the files and choosing which changes to keep.

If using VS Code, it provides a user-friendly interface to resolve merge conflicts, and you can go line by line to accept incoming changes, keep current changes, or combine both.
After resolving the conflicts, you need to stage the resolved files and complete the merge by committing the changes:

```bash
git add <resolved-file>
git commit -m "Resolved merge conflicts"
```

## Fast-Forward Merge

A fast-forward merge occurs when the target branch has not diverged from the source branch. In this case, Git simply moves the pointer of the target branch forward to the latest commit of the source branch.
To perform a fast-forward merge, use the same `git merge` command as before. If a fast-forward merge is possible, Git will automatically perform it without creating a new commit.

```bash
git checkout main
git merge feature
```
