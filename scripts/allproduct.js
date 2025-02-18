const cart = [];
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
const allproduct = document.getElementById("all_product");

function getId(button) {
  let buttonId = button.id;
  console.log("buttonId: ", buttonId);
  localStorage.setItem("productView", buttonId);
  window.location.href = "/product_view.html";
}

function all_product() {
  let div = ``;
  let count = 0;
  while (count < 3) {
    agriculturalProducts.forEach((value, i) => {
      div += `<div class="featured-product-card">
                <img
                  src="${value.image}"
                  alt="${value.name}" />
                <h3>${value.name}</h3>
                <p>${value.description}</p>
                <button class="btn-view" id="${i}" onclick="getId(this)">View Product</button>
              </div>`;
    });
    count++;
  }
  allproduct.innerHTML = div;
}
all_product();

let viewProduct = 0;
