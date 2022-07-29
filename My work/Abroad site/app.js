let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");

// ------------------------------\-\-\- On scrolling this Action will be performed -/-/-/---------------------------

window.onscroll = () => {
    searchBtn.classList.remove("fa-times");
    searchBar.classList.remove("active");
  };

  // ------------------------------------------------\-\-\- For Search Bar -/-/-/-------------------------------------
searchBtn.addEventListener("click", () => {
    searchBtn.classList.toggle("fa-times");
    searchBar.classList.toggle("active");
  });