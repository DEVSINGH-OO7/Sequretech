// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

// Product category tabs
const tabButtons = document.querySelectorAll(".tab-btn");
const productCards = document.querySelectorAll(".product-card");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // active state for tabs
    tabButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const tab = btn.dataset.tab;

    productCards.forEach((card) => {
      const category = card.dataset.category;
      if (tab === "all" || tab === category) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Auto year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
