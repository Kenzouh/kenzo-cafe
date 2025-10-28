# Kenzo Cafe Pages

## About Us Page

This section talks about the fictitious company "Kenzo Cafe."

---

# Package Installation

## NPM Guide and Installation of packages:

1. npm init -y
2. npm i ejs
3. npm i express

4. Git Bash: node index.js

---

## Tailwind CSS Installation:

1. npm install -D tailwindcss
2. npx tailwindcss init (Terminal! Not GitBash)
3. In input.css:
    3.1 @tailwind base;
    3.2 @tailwind components;
    3.3 @tailwind utilities;
4. npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
5. In package.json under "scripts":
    5.1 "dev": "tailwindcss -i ./src/input.css -o ./src/output.css --watch"
6. In terminal (for shortcut):
    6.1 "npm run dev"