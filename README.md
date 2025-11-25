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