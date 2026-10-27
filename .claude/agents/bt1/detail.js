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

const dishes = {
  "com-dui-ga-nuong": {
    name: "Cơm đùi gà nướng",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Cơm đùi gà nướng và rau củ",
    specs: ["Miền Nam", "Món chính"],
    description: "Đùi gà nướng thơm mềm ăn cùng cơm nóng, mang đến bữa ăn đậm đà và thân quen.",
    price: "99.000đ"
  },
  "goi-rau-cu-dau-hu": {
    name: "Gỏi rau củ đậu hũ",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Đĩa rau xanh tươi ngon",
    specs: ["Ba miền", "Món khai vị"],
    description: "Rau củ tươi giòn kết hợp cùng đậu hũ, cho món khai vị thanh mát và nhẹ nhàng.",
    price: "85.000đ"
  },
  "mi-ga-quay-nuoc": {
    name: "Mì gà quay nước",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Tô mì nóng hổi với rau thơm",
    specs: ["Miền Nam", "Món nước"],
    description: "Mì nóng ăn cùng gà quay và nước dùng ngọt thanh, thơm ngon tròn vị.",
    price: "109.000đ"
  },
  "com-chien-hai-san": {
    name: "Cơm chiên hải sản",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Cơm chiên nóng hổi với nguyên liệu tươi",
    specs: ["Miền Nam", "Cơm nhà"],
    description: "Cơm chiên nóng hổi cùng hải sản, thơm lừng và đậm đà cho bữa ăn đủ đầy.",
    price: "199.000đ"
  },
  "banh-canh-tom-cang": {
    name: "Bánh canh tôm càng",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Món canh rau củ nóng sốt",
    specs: ["Miền Trung", "Món nước"],
    description: "Bánh canh nóng với vị ngọt tươi, đậm đà trong từng thìa nước dùng.",
    price: "95.000đ"
  },
  "tra-dao-cam-chanh": {
    name: "Trà đào cam chanh",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Trà trái cây tươi mát",
    specs: ["Miền Nam", "Thức uống"],
    description: "Trà trái cây thơm dịu với vị đào, cam và chanh, mát lành để nhâm nhi.",
    price: "35.000đ"
  }
};

const dishId = new URLSearchParams(window.location.search).get("id");
const dish = dishId ? dishes[dishId] : undefined;
const detailLayout = document.querySelector(".detail-layout");
const notFound = document.querySelector(".detail-not-found");

if (!dish) {
  notFound.hidden = false;
} else {
  document.title = `${dish.name} — Cơm nhà`;
  document.querySelector(".detail-title").textContent = dish.name;
  document.querySelector(".detail-image").src = dish.image;
  document.querySelector(".detail-image").alt = dish.imageAlt;
  document.querySelector(".detail-description").textContent = dish.description;
  document.querySelector(".detail-price").textContent = dish.price;

  const specsContainer = document.querySelector(".detail-specs");
  dish.specs.forEach((spec) => {
    const specItem = document.createElement("span");
    specItem.textContent = spec;
    specsContainer.append(specItem);
  });

  detailLayout.hidden = false;
}
