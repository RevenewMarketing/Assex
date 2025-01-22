# Assex

This document provides step-by-step instructions for installing, running, and pushing changes to the application on GitHub.

## Prerequisites

1. **Node.js**: Install [Node.js](https://nodejs.org/) (version 14 or later recommended).
2. **Git**: Install [Git](https://git-scm.com/).
3. **Code Editor**: Install a code editor like [VS Code](https://code.visualstudio.com/).
4. **GitHub Account**: Ensure you have a GitHub account.

## Installation

1. **Clone the Repository**:

   ```bash
   git clone <repository-url>
   ```

   Replace `<repository-url>` with the HTTPS or SSH link to your GitHub repository.
   OPTIONAL: You can also download the repository as a ZIP file and extract it to a local directory.

2. **Navigate to the Project Directory**:

   ```bash
   cd <project-directory-name>
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

## Running the Application

1. **Start the Development Server**:

   ```bash
   npm run dev
   ```

2. **Access the Application**:
   Open your browser and navigate to the URL displayed in the terminal (usually `http://localhost:5173`).

## Making Changes

1. **Edit Code**:

   - Use your code editor to modify files in the `src` directory.

2. **Test Changes**:
   - Ensure your changes are reflected by checking the app in your browser.

## Pushing Changes to GitHub

**NOTE:** Any changes made to the main branch will be LIVE on the website.

1. **Check the Status of Your Changes**:

   ```bash
   git status
   ```

2. **Stage Changes**:

   ```bash
   git add .
   ```

3. **Commit Changes**:

   ```bash
   git commit -m "Your commit message here"
   ```

   Replace `Your commit message here` with a descriptive message about your changes.

4. **Push Changes to the Repository**:
   ```bash
   git push origin <branch-name>
   ```
   Replace `<branch-name>` with the name of the branch you're working on (e.g., `main` or `feature-branch`).

## Additional Commands

1. **Building for Production**:

   ```bash
   npm run build
   ```

   The production-ready files will be in the `dist` directory.

2. **Previewing the Production Build**:
   ```bash
   npm run preview
   ```

## Troubleshooting

- If you encounter issues during installation or running the app:

  1. Ensure all prerequisites are installed and up-to-date.
  2. Delete the `node_modules` directory and `package-lock.json`, then reinstall dependencies:
     ```bash
     rm -rf node_modules package-lock.json
     npm install
     ```
  3. Check for error messages and resolve them as needed.

- For Git-related issues, ensure your credentials are properly configured.
  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "youremail@example.com"
  ```

## Notes

- Always create a new branch for significant changes to avoid impacting the main branch as the main branch is LIVE.

  ```bash
  git checkout -b <new-branch-name>
  ```

- Follow best practices for commit messages and code formatting.

Happy coding!
