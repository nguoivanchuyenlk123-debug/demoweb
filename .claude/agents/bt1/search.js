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

const searchInput = document.querySelector("#results-search");
const searchSummary = document.querySelector(".search-summary");
const searchCards = document.querySelectorAll("[data-search-item]");
const noResults = document.querySelector(".no-results");
const searchParams = new URLSearchParams(window.location.search);
const searchTerm = searchParams.get("q")?.trim() ?? "";
const categoryParam = searchParams.get("category") ?? "";
const validCategories = ["rice", "soup", "drink"];
const activeCategory = validCategories.includes(categoryParam) ? categoryParam : "";
const categoryInput = document.querySelector("#results-category");
const menuTabs = document.querySelectorAll(".search-tabs .menu-tab");

function normalize(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLocaleLowerCase("vi");
}

searchInput.value = searchTerm;
categoryInput.value = activeCategory;

menuTabs.forEach((tab) => {
  const isActive = tab.dataset.filter === (activeCategory || "all");
  tab.classList.toggle("is-active", isActive);
  tab.setAttribute("aria-pressed", String(isActive));

  tab.addEventListener("click", () => {
    const params = new URLSearchParams(window.location.search);
    if (tab.dataset.filter === "all") {
      params.delete("category");
    } else {
      params.set("category", tab.dataset.filter);
    }

    const query = params.toString();
    window.location.assign(`${window.location.pathname}${query ? `?${query}` : ""}`);
  });
});

const normalizedTerms = normalize(searchTerm).split(/\s+/).filter(Boolean);
let matchingCount = 0;

searchCards.forEach((card) => {
  const searchableText = normalize(card.dataset.name);
  const matchesQuery = normalizedTerms.every((term) => searchableText.includes(term));
  const matchesCategory = !activeCategory || card.dataset.category === activeCategory;
  const matches = matchesQuery && matchesCategory;

  card.hidden = !matches;
  if (matches) matchingCount += 1;
});

if (searchTerm || activeCategory) {
  searchSummary.textContent = `Tìm thấy ${matchingCount} món`;
} else {
  searchSummary.textContent = "Nhập tên món bạn muốn tìm.";
}

noResults.hidden = (!searchTerm && !activeCategory) || matchingCount > 0;
