function remove(event) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.splice(event.id, 1);

  localStorage.setItem("cart", JSON.stringify(cart)); // Save to localStorage
  loadCart();
}
const cartView = document.getElementById("cart-items");
function loadCart() {
  let div = ``;
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  console.log(JSON.parse(localStorage.getItem("cart")), "ades ", cart.length);
  if (cart.length == 0) {
    cartView.innerHTML = "No Item";
  } else {
    cart.forEach((element, i) => {
      div += `<div class="cart-items">
            <div class="cart-item">
              <img src="${
                element.item.image
              }" alt="Product 1" class="cart-item-image" />
              <div class="cart-item-info">
                <h3>${element.item.name}</h3>
                <p>Price: ${element.item.specifications.price}</p>
                <div class="quantity-selector">
                  <label for="quantity1">Quantity: </label>
                  <div>${element.quantity}</div>
                </div>
              </div>
              <div class="cart-item-price">
                <p>$ ${
                  parseFloat(
                    element.item.specifications.price.replace(/[$,]/g, "")
                  ) * element.quantity
                }</p>
              </div>
              <button class="remove-item" id="${i}"onclick="remove(this)">Remove</button>
            </div>`;
    });
    cartView.innerHTML = div;
  }
}

loadCart();
