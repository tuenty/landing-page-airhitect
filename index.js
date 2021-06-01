// carousel
$(".carousel__lista").owlCarousel({
  margin: 10,
  loop: true,
  autoplay: false,
  autoplayTimeout: 4000,
  autoplayHoverpause: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 3,
      nav: false,
    },
    1000: {
      items: 3,
      nav: false,
    },
  },
});

//mapa

const tilesProvider = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

let map = L.map("map").setView([47.494, 19.034], 13);

L.tileLayer(tilesProvider, {
  maxZoom: 18,
}).addTo(map);

let marker = L.marker([47.494, 19.034]).addTo(map);

// Aos
AOS.init();

// navbar

document.addEventListener("DOMcontentLoaded", () => {
  onClickMenu();
});

function onClickMenu() {
  document.getElementById("menu").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
}
