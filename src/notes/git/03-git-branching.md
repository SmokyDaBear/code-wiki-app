# Branching in Git

Branching is a powerful feature in Git that allows you to create separate lines of development within a repository. Each branch represents an independent version of your codebase, enabling you to work on new features, bug fixes, or experiments without affecting the main codebase.

This is the whole point of git basically, whether you are working solo or in a team.

#### For solo use:

- You can create branches to try out new ideas or features without risking the stability of your main codebase.

#### For team use:

- Branches allow multiple developers to work on different features or fixes simultaneously without interfering with each other's work.
- The branches can later be merged back into the main branch (usually called `main` or `master`) once the changes are tested and reviewed.

## Creating a Branch

To create a new branch in Git, you can use the `git branch` command followed by the name of the branch you want to create. For example, to create a branch named `feature-xyz`, you would run:

```
git branch feature-xyz

```

this will now put any new commits on this branch, leaving the main branch unaffected until you decide to merge it back.

## Switching Between Branches

To switch to a different branch, you can use the `git checkout` command followed by the name of the branch you want to switch to. For example, to switch to the `feature-xyz` branch, you would run:

```
git checkout feature-xyz
```
