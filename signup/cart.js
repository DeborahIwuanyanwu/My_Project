const cartItems = JSON.parse(localStorage.getItem("cartItems"));

const cartDisplay = () => {
  const myContainer = document.querySelector(".cardholder");
  let total = 0;

  cartItems.map((item) => {
    const cartItems = document.createElement("div");
    cartItems.className = "cardcontainer";
    cartItems.innerHTML = `   <div class="imgandtextholder">
                  <div class="imgholder"> <img src="${item.image}"/></div>
                  <div class="imgtext">
                    <h3>${item.name}</h3>
                    <p imgsmalltext>Bag</p>
                  </div>
                </div>
                <div class="price">#${item.price}</div>
                <div class="delete" onclick="removeFromCart(${item.productId})"><img src="../myproject/projectimg/images-removebg-preview\ \(1\).png"/></div>`;

    myContainer.appendChild(cartItems);
    total += item.price * item.quantity;
  });
  document.getElementById("Total").textContent = `#${total.toFixed(2)}`;
};

cartDisplay();
// window.onload = () => {
//   cartDisplay();
// };

function removeFromCart(productId) {
  // let display = cartItems;
 let display = cartItems.filter((item) => item.productId != productId); 
 console.log(display)
  localStorage.setItem("cartItems", JSON.stringify(display));
  // cartDisplay();
  console.log(productId)
}

const hamburger = () =>{
  const nav = document.getElementById(("nav"))
  nav.classList.toggle("open")
}
document.getElementById("hamburger").addEventListener("click", hamburger)

const cartItem = JSON.parse(localStorage.getItem("cartItems"));

document.getElementById('iconcircle').innerText = cartItem.length
