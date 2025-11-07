// ========================== Navbar ========================== 

// Storing this in a variable because we will use this in multiple occasions.
const toggleButton = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');

function toggleSidebar(){
    sidebar.classList.toggle('close');
    toggleButton.classList.toggle('rotate');

    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
        /* Closes the dropdown menu when the sidebar toggle hide button was clicked */
        ul.classList.remove('show');

        /* Rotates the toggle button of the dropdown buttons when the sidebar was about to be hidden */
        ul.previousElementSibling.classList.remove('rotate');
    });
}

function toggleSubMenu(button){
    button.nextElementSibling.classList.toggle('show');

    // Rotates the SVG arrows.
    button.classList.toggle('rotate');

    /* Opens the sidebar if the drpodown buttons got clicked */
    if(sidebar.classList.contains('close')){
        sidebar.classList.toggle('close');

        /* Rotates the toggle icon SVG if the buttons of the sidebar icons got clicked */
        toggleButton.classList.toggle('rotate');
    }
}

const productPrices = {
  // Cookies
  chocoFudgeCookie: 29,
  chocolateCrinkles: 29,
  cranberryDreamsCookie: 29,
  doubleChocolateCookie: 39,
  oatmealCookie: 59,
  peanutButterCookie: 39,
  puffyChocoChipCookie: 59,
  rockyMountainCookie: 39,

  // Snacks
  chocolateBrownie: 49,
  cinnamonDelight: 89,
  corinthianFlower: 89,
  fruitTart: 59,
  gingerbread: 49,
  macarons: 39,
  pecanPie: 399,
  snowyMuffin: 59,

  // Cupcakes
  chocoSweetheart: 59,
  chocolateFruitDelight: 79,
  dreamyChoco: 49,
  frostyDecadence: 89,
  redVelvet: 59,
  swirlyChocoDeluxe: 79,
  tropicalFiesta: 59,
  vanillaLemon: 59,

  // Beverages
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
};

const orderContainer = document.getElementById("orderContainer");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", () => {
  const uniqueId = Date.now(); // Unique ID for new element set

  const newSet = document.createElement("div");
  newSet.className = "flex justify-center space-x-4 mt-4";
  newSet.innerHTML = `
    <select id="product-${uniqueId}" class="block text-white placeholder:text-slate-500 bg-transparent border 
      border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-customBrown2-veryLight 
      focus:border-customBrown2-veryDark">
      <optgroup label="Cookies" class="text-black">
        <option value="chocoFudgeCookie">Choco Fudge Cookie</option>
        <option value="chocolateCrinkles">Chocolate Crinkles</option>
        <option value="cranberryDreamsCookie">Cranberry Dreams Cookie</option>
        <option value="doubleChocolateCookie">Double Chocolate Cookie</option>
        <option value="oatmealCookie">Oatmeal Cookie</option>
        <option value="peanutButterCookie">Peanut Butter Cookie</option>
        <option value="puffyChocoChipCookie">Puffy Choco Chip Cookie</option>
        <option value="rockyMountainCookie">Rocky Mountain Cookie</option>
      </optgroup>
      <optgroup label="Snacks" class="text-black">
        <option value="chocolateBrownie">Chocolate Brownie</option>
        <option value="cinnamonDelight">Cinnamon Delight</option>
        <option value="corinthianFlower">Corinthian Flower</option>
        <option value="fruitTart">Fruit Tart</option>
        <option value="gingerbread">Gingerbread</option>
        <option value="macarons">Macarons</option>
        <option value="pecanPie">Pecan Pie</option>
        <option value="snowyMuffin">Snowy Muffin</option>
      </optgroup>
      <optgroup label="Cupcakes" class="text-black">
        <option value="chocoSweetheart">Choco Sweetheart</option>
        <option value="chocolateFruitDelight">Chocolate Fruit Delight</option>
        <option value="dreamyChoco">Dreamy Choco</option>
        <option value="frostyDecadence">Frosty Decadence</option>
        <option value="redVelvet">Red Velvet</option>
        <option value="swirlyChocoDeluxe">Swirly Choco Deluxe</option>
        <option value="tropicalFiesta">Tropical Fiesta</option>
        <option value="vanillaLemon">Vanilla Lemon</option>
      </optgroup>
      <optgroup label="Beverages" class="text-black">
        <option value="caffeLatte">Caffè Latte</option>
        <option value="caffeMacchiato">Caffè Macchiato</option>
        <option value="dalgonaCoffee">Dalgona Coffee</option>
        <option value="chocolateSundae">Chocolate Sundae</option>
      </optgroup>
    </select>

    <select id="size-${uniqueId}" class=" text-white placeholder:text-slate-500 bg-transparent border 
      border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-customBrown2-veryLight 
      focus:border-customBrown2-veryDark hidden">
      <option value="Presto" class="text-black">SM (8 oz)</option>
      <option value="Moderato" class="text-black">M (12 oz)</option>
      <option value="Largo" class="text-black">L (16 oz)</option>
      <option value="Grave" class="text-black">XL (20 oz)</option>
    </select>

    <input type="number" id="quantity-${uniqueId}" min="0" max="99" value="1" class="block 
   text-white placeholder:text-slate-500 bg-transparent border border-white/20 rounded-lg 
    px-4 py-6 focus:outline-none focus:ring-2 focus:ring-customBrown2-veryLight 
    focus:border-customBrown2-veryDark" />

    <div id="price-${uniqueId}" class="px-6 py-4  border-2 border-green-800 rounded-xl text-green-400">
      P0
    </div>

    <div id="delete-button-${uniqueId}" class="xIcon">
    x
    </div>
  `;


  orderContainer.appendChild(newSet);

  const productSelect = document.getElementById(`product-${uniqueId}`);
  const sizeSelect = document.getElementById(`size-${uniqueId}`);
  const quantityInput = document.getElementById(`quantity-${uniqueId}`);
  const priceDiv = document.getElementById(`price-${uniqueId}`);

  const updatePrice = () => {
    const selectedProduct = productSelect.value;
    const size = sizeSelect.value || "";
    const quantity = parseInt(quantityInput.value, 10) || 0;
    const priceKey = `${selectedProduct}_${size}`.replace(/_$/, "");
    const pricePerUnit = productPrices[priceKey] || 0;

    const totalPrice = pricePerUnit * quantity;
    priceDiv.textContent = `P${totalPrice.toFixed(2)}`;
  };

  productSelect.addEventListener("change", () => {
    if (["caffeLatte", "caffeMacchiato", "dalgonaCoffee", "chocolateSundae"].includes(productSelect.value)) {
      sizeSelect.classList.remove("hidden");
    } else {
      sizeSelect.classList.add("hidden");
      sizeSelect.value = ""; // Reset size for non-beverages
    }
    updatePrice();
  });

  sizeSelect.addEventListener("change", updatePrice);
  quantityInput.addEventListener("input", updatePrice);

  const deleteButton = document.getElementById(`delete-button-${uniqueId}`);
  deleteButton.addEventListener("click", () => {
    orderContainer.removeChild(newSet);
  });

  updatePrice();
});








  // Helper function to calculate the discounts
  const calculateDiscount = (subtotal) => {
    let discount = 0;

    if (document.getElementById("birthMonthDiscount").checked) {
      discount += 0.02; // 2% for birth month
    }
    if (document.getElementById("vipDiscount").checked) {
      discount += 0.05; // 5% for VIP
    }
    if (document.getElementById("seniorDiscount").checked) {
      discount += 0.02; // 2% for senior
    }
    if (document.getElementById("employeeDiscount").checked) {
      discount += 0.02; // 2% for employee
    }

    return subtotal * discount;
  };

  const calculateTotal = () => {
    let originalTotal = 0;

    // Iterate through all product rows in the order container
    const orderContainer = document.getElementById("orderContainer");
    const orders = orderContainer.children;

    for (const order of orders) {
      const productSelect = order.querySelector("[id^='product-']");
      const sizeSelect = order.querySelector("[id^='size-']");
      const quantityInput = order.querySelector("[id^='quantity-']");

      const product = productSelect.value;
      const size = sizeSelect && !sizeSelect.classList.contains("hidden") ? sizeSelect.value : "";
      const quantity = parseInt(quantityInput.value, 10) || 0;

      const priceKey = `${product}_${size}`.replace(/_$/, "");
      const pricePerUnit = productPrices[priceKey] || 0;

      originalTotal += pricePerUnit * quantity;
    }

    // Add VIP subscription if applicable
    if (document.getElementById("vip").checked) {
      originalTotal += 799; // Add P799 for VIP subscription
    }

    // Calculate the discount
    const discount = calculateDiscount(originalTotal);
    const total = originalTotal - discount;

    // Update the original price and total price display
    const originalPriceDiv = document.getElementById("original-price");
    originalPriceDiv.textContent = `P${originalTotal.toFixed(2)}`;

    const totalPriceDiv = document.getElementById("total-price");
    totalPriceDiv.textContent = `Total Price: P${total.toFixed(2)}`;
  };

  // Event listeners to update prices
  document.getElementById("orderContainer").addEventListener("input", calculateTotal);
  document.getElementById("vip").addEventListener("change", calculateTotal);
  document.getElementById("birthMonthDiscount").addEventListener("change", calculateTotal);
  document.getElementById("vipDiscount").addEventListener("change", calculateTotal);
  document.getElementById("seniorDiscount").addEventListener("change", calculateTotal);
  document.getElementById("employeeDiscount").addEventListener("change", calculateTotal);

  // Initialize calculation on page load
  calculateTotal();