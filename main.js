document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu-items");
  
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
      menu.classList.toggle("flex");
    });
  });
  