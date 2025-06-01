const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const navSearch = document.getElementById("nav-search");

navSearch.addEventListener("click", (e) => {
  navSearch.classList.toggle("open");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

/* Search bar and Category Section for Product */
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");
const productCards = document.querySelectorAll(".product__card");
const searchBtn = document.getElementById("searchBtn");

function filterProducts() {
  const query = searchInput.value.trim().toLowerCase();
  const selectedCategory = categorySelect.value.toLowerCase();

  productCards.forEach((card) => {
    const title = card.querySelector("h4").textContent.toLowerCase();
    const keywords = card.dataset.keywords.toLowerCase();
    const categories = card.dataset.category
      .toLowerCase()
      .split(",")
      .map(cat => cat.trim());
    const categoryMatch = selectedCategory === "all" || categories.includes(selectedCategory);
    const searchMatch = query === "" || title.includes(query) || keywords.includes(query);
    if (categoryMatch && searchMatch) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

searchInput.addEventListener("input", filterProducts);
categorySelect.addEventListener("change", filterProducts);
searchBtn.addEventListener("click", filterProducts);
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    filterProducts();
  }
});
filterProducts();

//Scroll Reveal
ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content div", {
  duration: 1000,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".about__card", {
  duration: 1000,
  interval: 500,
  delay: 500,
});

