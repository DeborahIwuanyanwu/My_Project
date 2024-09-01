const hamburger = () =>{
    const nav = document.getElementById(("nav"))
    nav.classList.toggle("open")
  }
  document.getElementById("hamburger").addEventListener("click", hamburger)

  const cartItem = JSON.parse(localStorage.getItem("cartItems"));

  document.getElementById('iconcircle').innerText = cartItem.length