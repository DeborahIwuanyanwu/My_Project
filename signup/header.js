const hamburger = () =>{
    const nav = document.getElementById(("nav"))
    nav.classList.toggle("open")
  }
  document.getElementById("hamburger").addEventListener("click", hamburger)