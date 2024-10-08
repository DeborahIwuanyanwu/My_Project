



const handleRegister = (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = { name, email, password };
  localStorage.setItem("users", JSON.stringify(user));

  alert("Account created Succesfully!");
  window.location.href = "signin.html";
};

const handleLogin = (event) => {
  event.preventDefault();
  const loginEmail = document.getElementById("loginEmail").value;
  const loginPassword = document.getElementById("loginPassword").value;

  // retrieve the user details from local storage
  const loginUser = JSON.parse(localStorage.getItem("users"));
  console.log(loginUser);

  if (
    loginUser &&
    loginUser.email === loginEmail &&
    loginUser.password === loginPassword
  ) {
    alert("Login Successful!");
    window.location.href = "project.html";
  } else {
    alert("Login Failed!");
    window.location.href = "signin.html";
  }
};
let cartItems = [];

function addToCart(productId, price, name, image) {
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  const product = {
    id: productId,
    price: price,
    name: name,
    image: image,
    quantity: 1,
  };

  let itemExists = false;

  cartItems.forEach((item) => {
    if (item.id === productId) {
      itemExists.quantity += 1;
      itemExists = true;
    }
  });

  if (!itemExists) {
    cartItems.push(product);
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cartItems");
  cartList.textContent = "";
  const cartItem = JSON.parse(localStorage.getItem("cartItems"));
  let total = 0;

  cartItem.map((item) => {
    const list = document.createElement("li");
    list.innerHTML = `
      product name: ${item.name} - Quantity:
      <button onClick= "decreaseQty(${item.id})"> - </button>
      ${item.quantity}
      <button onClick= "increaseQty(${item.id})"> + </button>
      - Price ${item.price * item.quantity}
      `;

    cartList.appendChild(list);
    total += item.price * item.quantity;

    return list;
  });

  document.getElementById("cartTotal").textContent = total.toFixed(2);
}
