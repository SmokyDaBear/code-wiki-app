# Rebasing

Rebasing is a Git operation that allows you to integrate changes from one branch into another by moving or combining a sequence of commits. It is an alternative to merging and can help maintain a cleaner project history.

Sometimes, when working on a branch, you may attempt to push changes only to be met with an error message indicating that your local branch is behind its remote counterpart. This situation often arises when new commits have been added to the remote branch since your last pull or fetch.

In such cases, rebasing can be a useful tool to update your local branch with the latest changes from the remote branch before pushing your commits. Instead of creating a merge commit, rebasing rewrites your local commits on top of the latest commits from the remote branch.

## Why Use Rebasing?

- Linear History: Rebasing creates a linear sequence of commits, making it easier to follow the project history.
- Conflict Resolution: It allows you to resolve conflicts as they arise during the rebase process, rather than during a merge.
- Updating Feature Branches: It is commonly used to update feature branches with the latest changes from the main branch.

## How to Rebase

To rebase a branch onto another branch, you can use the `git rebase` command. Here’s a basic example:

```
# First, switch to the branch you want to rebase
git checkout feature-branch
```

```
# Then, rebase it onto the main branch
git rebase main
```

This will take the commits from `feature-branch` and replay them on top of the latest commit in `main`.

## Handling Conflicts

If there are conflicts during the rebase process, Git will pause and allow you to resolve them. You can use `git status` to see which files are in conflict. After resolving the conflicts, you can continue the rebase with:

```
git add <file-with-conflict>
git rebase --continue
```

If you want to abort the rebase process and return to the state before the rebase started, you can use:

```
git rebase --abort
```

## Interactive Rebasing

Interactive rebasing allows you to edit, reorder, squash, or drop commits during the rebase process. You can start an interactive rebase with:

```
git rebase -i <commit-hash>
```

This will open an editor where you can specify how to handle each commit.
