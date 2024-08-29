const cartItem = JSON.parse(localStorage.getItem("cartItems"));
console.log(cartItem);
const cartDisplay = () => {
  const myContainer = document.querySelector(".cardholder");
  let total = 0

  
  cartItem.map((item) => {
    const cartItems = document.createElement("div");
    cartItems.className = "cardcontainer";
    cartItems.innerHTML = `   <div class="imgandtextholder">
                  <div class="imgholder"> <img src="${item.image}"/></div>
                  <div class="imgtext">
                    <h3>${item.name}</h3>
                    <p imgsmalltext>Bag</p>
                  </div>
                </div>
                <div class="price">#${item.price}</div>`;

    myContainer.appendChild(cartItems);
    total += item.price * item.quantity
  });
  document.getElementById("Total").textContent = `#${total.toFixed(2)}`
};

cartDisplay();
