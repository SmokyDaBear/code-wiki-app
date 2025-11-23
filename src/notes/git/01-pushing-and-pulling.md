# Pushing and Pulling in Git

Once you have initialized a Git repository and made some commits, you may want to share your changes with a remote repository or fetch changes made by others. This is where pushing and pulling come into play.

## Pushing Changes

Pushing is the process of sending your committed changes to a remote repository. This is typically done using the `git push` command.

```bash
git push <remote> <branch>
```

- `<remote>`: The name of the remote repository (e.g., `origin`).
- `<branch>`: The name of the branch you want to push (e.g., `main`).
  For example, to push your changes to the `main` branch of the `origin` remote, you would run:

```bash
git push origin main
```

This command uploads your local commits to the remote repository, making them available to others.

## Pulling Changes

Pulling is the process of fetching and integrating changes from a remote repository into your local repository. This is typically done using the `git pull` command.

```bash
git pull <remote> <branch>
```

- `<remote>`: The name of the remote repository (e.g., `origin`).
- `<branch>`: The name of the branch you want to pull (e.g., `main`).
  For example, to pull changes from the `main` branch of the `origin` remote, you would run:

```bash
git pull origin main
```

This command fetches the latest changes from the remote repository and merges them into your current branch.
