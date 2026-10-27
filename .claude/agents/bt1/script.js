const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Mở menu" : "Đóng menu");
  mainNav.classList.toggle("is-open", !isExpanded);
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Mở menu");
    mainNav.classList.remove("is-open");
  });
});

const menuTabs = document.querySelectorAll(".menu-tab");
const dishCards = document.querySelectorAll(".dish-card");
const searchCategoryInput = document.querySelector("#home-category");
const validFilters = ["all", "rice", "soup", "drink"];
const initialFilter = new URLSearchParams(window.location.search).get("category");

function selectMenuFilter(filter) {
  menuTabs.forEach((item) => {
    const isActive = item.dataset.filter === filter;
    item.classList.toggle("is-active", isActive);
    item.setAttribute("aria-pressed", String(isActive));
  });

  dishCards.forEach((card) => {
    card.hidden = filter !== "all" && card.dataset.category !== filter;
  });

  if (searchCategoryInput) {
    searchCategoryInput.value = filter === "all" ? "" : filter;
  }
}

menuTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const filter = tab.dataset.filter;
    selectMenuFilter(filter);

    const params = new URLSearchParams(window.location.search);
    if (filter === "all") {
      params.delete("category");
    } else {
      params.set("category", filter);
    }

    const query = params.toString();
    const nextUrl = `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`;
    window.history.replaceState(null, "", nextUrl);
  });
});

selectMenuFilter(validFilters.includes(initialFilter) ? initialFilter : "all");
