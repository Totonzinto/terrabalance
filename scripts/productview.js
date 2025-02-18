const agriculturalProducts = [
  {
    name: "High-Tech Tractors",
    description:
      "A powerful and efficient tractor designed for modern farming. Equipped with the latest technology to enhance productivity and reduce operational costs.",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20240705/pngtree-digital-illustration-of-tractor-in-background-technology-concept-image_15937487.jpg",
    specifications: {
      engineCapacity: "120 HP",
      fuelType: "Diesel",
      transmission: "Manual",
      price: "$30,000",
      warranty: "5 years",
    },
  },
  {
    name: "Organic Seeds",
    description:
      "A precision seeding machine that ensures uniform seed distribution and optimal growth conditions.",
    image:
      "https://ecogardener.com/cdn/shop/articles/Gardeners_Guide_to_Buying_Vegetable_Seeds-min.jpg?v=1667563403",
    specifications: {
      capacity: "1000 seeds/min",
      fuelType: "Electric",
      price: "$15,000",
      warranty: "3 years",
    },
  },
  {
    name: "Sprayers",
    description:
      "An AI-powered irrigation system that optimizes water usage based on soil moisture and weather conditions.",
    image:
      "https://brewerint.com/wp-content/uploads/2024/05/Pesticide-Drift-from-Spray-applications.webp",
    specifications: {
      coverage: "50 acres",
      powerSource: "Solar",
      price: "$10,000",
      warranty: "2 years",
    },
  },
  {
    name: "Greenhouses",
    description:
      "A high-performance harvester capable of efficiently harvesting large fields with minimal waste.",
    image:
      "https://housing.com/news/wp-content/uploads/2022/11/green-house-feature-compressed.jpg",
    specifications: {
      engineCapacity: "250 HP",
      fuelType: "Diesel",
      transmission: "Automatic",
      price: "$80,000",
      warranty: "6 years",
    },
  },
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];
const product = document.getElementById("product-detail-container");

function addToCart(button) {
  let buttonId = button.id;
  // Check if item already exists in the cart
  let existingItem = cart.find((item) => item.item.name === buttonId);

  if (existingItem) {
    existingItem.quantity += 1; // Increment quantity
  } else {
    let item = agriculturalProducts.find((item) => (item.name = buttonId));
    cart.push({
      item: item,
      quantity: 1,
    });
  }
  console.log(cart);
  localStorage.setItem("cart", JSON.stringify(cart)); // Save to localStorage
  alert("item added to cart");
  window.location.href = "/cart.html";
}

function view() {
  localStorage.getItem("productView");
  item = agriculturalProducts[localStorage.getItem("productView")];
  console.log(item);
  product.innerHTML = `<div class="product-image">
            <img
              src="${item.image}"
              alt="${item.name}" />
          </div>
          <div class="product-info">
            <h2 class="product-title">${item.name}</h2>
            <p class="product-description">
            ${item.description}
            </p>
            <div class="product-specifications">
              <h3>Specifications:</h3>
              <ul>
                <li>${item.specifications.engineCapacity}</li>
                <li>Fuel Type: ${item.specifications.fuelType}</li>
                <li>Transmission: ${item.specifications.transmission}</li>
                <li>Price: ${item.specifications.price}</li>
                <li>Warranty: ${item.specifications.warranty}</li>
              </ul>
            </div>
            <button class="btn-add-to-cart" id="${item.name}" onclick="addToCart(this)">Add to Cart</button>
          </div>`;
}

view();
