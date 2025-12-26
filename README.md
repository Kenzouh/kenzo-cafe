# Kenzo Cafe Pages

## About Us Page

This section talks about the fictitious company "Kenzo Cafe."

It explains that Kenzo Cafe is a fictitious café shop programmed mainly as a 3rd assignment in Web Development, featuring HTML Forms.

---

## Customer Reviews

This page is dedicated for showcasing the customer reviews from Kenzo Cafe's services.

It features the comments, suggestions, and the ratings of the customers who ordered delicacies in Kenzo Cafe.
    
---

## Frequently Asked Questions (FAQs)

This section is for compiling the frequently asked questions of the Kenzo Cafe customers.

It features 5 of the frequently asked questions, such as:

1. What time are you open?
2. Are there parking lots near your cafe?
3. What is your best-selling food and drink?
4. Do you offer free Wi-Fi?
5. Do you have loyalty programs? What are the benefits if yes?

This page will help answer the questions of Kenzo Cafe's customers which will prevent confusions.

---

## Loyalty Programs

This section is for showcasing the awards the VIP customer can get, such as having a Factory Trip to Kenzo Cafe's Factory, then winning a travel trip to Switzerland if lucky enough to be chosen.

These loyalty programs will show your support to Kenzo Cafe.
---

## Order

In this section, the customer can choose and order products he wants to buy.

This includes an HTML payment form for assisting the user in selecting the products, type of payments, and discounts they want to avail.

---

## Products

This section is dedicated on displaying the sweets and beverages that Kenzo Cafe sells.

The products include:

**Cookies**
chocoFudgeCookie: 29,
chocolateCrinkles: 29,
cranberryDreamsCookie: 29,
doubleChocolateCookie: 39,
oatmealCookie: 59,
peanutButterCookie: 39,
puffyChocoChipCookie: 59,
rockyMountainCookie: 39,

**Snacks**
chocolateBrownie: 49,
cinnamonDelight: 89,
corinthianFlower: 89,
fruitTart: 59,
gingerbread: 49,
macarons: 39,
pecanPie: 399,
snowyMuffin: 59,

**Cupcakes**
chocoSweetheart: 59,
chocolateFruitDelight: 79,
dreamyChoco: 49,
frostyDecadence: 89,
redVelvet: 59,
swirlyChocoDeluxe: 79,
tropicalFiesta: 59,
vanillaLemon: 59,

**Beverages**
caffeLatte_Presto: 110,
caffeLatte_Moderato: 135,
caffeLatte_Largo: 160,
caffeLatte_Grave: 185,

caffeMacchiato_Presto: 120,
caffeMacchiato_Moderato: 145,
caffeMacchiato_Largo: 170,
caffeMacchiato_Grave: 195,

dalgonaCoffee_Presto: 95,
dalgonaCoffee_Moderato: 120,
dalgonaCoffee_Largo: 140,
dalgonaCoffee_Grave: 165,

chocolateSundae_Presto: 80,
chocolateSundae_Moderato: 100,
chocolateSundae_Largo: 120,
chocolateSundae_Grave: 140,

---

## Special Offers

This section showcases the VIP perks you can get if you subscribed to the VIP subscription in Kenzo Cafe, such as:

  1. Trip to Switzerland
  2. Trip to Kenzo Cafe factory
  3. 5% VIP discount on your total purchase (stackable)
  4. 2% Birth Month discount on your total purchase (stackable)
  5. 2% Senior discount on your total purchase (stackable)!
  6. 2% Employee discount on your total purchase (stackable)!
  7. Sneak peaks on future products!

---

# Package Installation

This section is dedicated for explaining the gist of how this setup with node and Tailwind is modified.

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

---

# Definition of Terms:

1. Node Package Manager (NPM) = the primary package manager for Node.js and the JavaScript ecosystem. Its core purpose in programming is to facilitate the management and sharing of reusable code packages.

2. Tailwind CSS = an open-source CSS framework focused on utility classes that helps in styling web interfaces. It helps streamline the web development process by removing the need to write and maintain large, custom CSS files.

3. Loyalty Programs = programs offered in Kenzo Cafe, such as **Factory Trip** and **Trip to Switzerland** to VIP customers.    

4. npm run dev = a command used for executing custom script named "dev" defined within the scripts section of the project's package.json file.

5. npm install -D tailwindcss = adds Tailwind CSS and its needed parts to the system.

6. npx tailwindcss init = a command used for setting up Tailwind CSS.
  - Node Package eXecute (npx) = NPX is a command-line tool that allows you to run any JavaScript package from the npm registry without having to install it globally or locally first. It is useful for one-off commands, running projects that are only needed temporarily, and avoiding "package pollution" from globally installed packages.
  - tailwindcss = a utility-first CSS framework designed for rapidly building custom user interfaces directly within HTML.
  - init = initialize.

7. @tailwind base = the first layer of the framework's CSS, which includes a reset stylesheet called "Preflight" that provides a consistent starting point by applying sensible default styles to basic HTML elements like headings, paragraphs, and links.

8. @tailwind components = a directive that is used in Tailwind CSS to define reusable UI components, such as buttons, cards, and navigation bars, which are composed of smaller utility classes.

9. @tailwind utilities = is a directive in a CSS file, which serves as a placeholder for where all Tailwind's pre-built utility classes will be injected during the compilation process.

10. input.css = the main CSS file where you import Tailwind's base styles, components, and utilities, and where you might add your own custom CSS.

11. output.css = the final, compiled CSS file that contains all the styles your project actually uses.

12. -i = input

13. -o = output

14. --watch = this flag is a command-line option used with the Tailwind CLI tool to automatically rebuild your CSS file whenever changes are made to your source files (HTML, JavaScript, etc.).

15. package.json = serves as a central hub for metadata about a project or package. It is a JSON file located in the root directory of a project.

16. scripts = this field is an object that defines a set of custom commands or "scripts" that can be executed using npm run (or yarn run). These scripts automate common development tasks, making them easier to manage and share among team members.

17. Git Bash = is a command-line interface (CLI) application for Microsoft Windows that provides a Unix-like environment for using Git and other command-line tools.

18. terminal = a text-based interface that allows users to interact with a computer's operating system and run programs using commands. It provides a command-line interface (CLI) where users type commands and receive text-based output.

19. Embedded JavaScript (EJS) = a popular, simple, and lightweight templating language (or view engine) that allows developers to generate HTML markup with plain JavaScript code. 

20. dev = is a shortcut command that compiles Tailwind CSS and automatically refreshes the output every time you edit your files.

21. npm run = is a command provided by the npm CLI which allows you to instantiate a shell and execute the command provided in the package.json file of your project.

22. -D = this flag installs the package as a development dependency.

23. node = an abbreviation of Node.js, which is a JavaScript runtime environment that allows developers to run JavaScript code outside of a web browser.

23. express = provides a minimalist, flexible, and robust web application framework for Node.js.

24. JavaScript Object Notation (json) = a lightweight, text-based data interchange format designed to be human-readable and machine-parsable.

25. Hypertext Markup Language (HTML) = is the standard markup language for documents designed to be displayed in a web browser.

26. Cascading Style Sheets (CSS) = is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML.

27. JavaScript (JS) = an OOP programming language commonly used to create interactive effects within web browsers.

28. Partials = a folder that contains reusable fragment of code or markup.  

29. Views = is the folder that contains the user interface (UI) component responsible for presenting data to the user and handling their interactions, like buttons and forms, using technologies such as HTML, CSS, and JavaScript.

30. src = is a conventional location for the original raw code that needs processing by the build tools. It is where the development-related files that require a build process to become production-ready are kept.

31. img = is a folder containing the images used in this project.

32. package-lock.json = is a lockfile that records the exact version of every installed dependency and sub-dependency in a Node.js project.

33. public = is a directory that stores static files that are directly accessible to a web browser or client via a URL. It serves as the web-accessible root of the application.