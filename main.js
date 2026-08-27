/* =========================================================
   GALERÍA — main.js
   Todo el contenido de las obras vive en el array ARTWORKS.
   Para cargar tus piezas reales: reemplazá "imagen" por la ruta
   a tu foto (ej. "obra-01.jpg") y completá los demás campos.
   ========================================================= */

const GALLERY_NAME = "Natalia Barbiera";
const WHATSAPP_NUMBER = "5492215343249";
const INSTAGRAM_HANDLE = "@nataliabarbiera";
const INSTAGRAM_URL = "https://www.instagram.com/nataliabarbiera/";

const ARTWORKS = [
  {
    id: "01",
    titulo: "Ciudades",
    artista: "Natalia Barbiera",
    anio: 2022,
    tecnica: "Técnica mixta — acrílico",
    dimensiones: "100 × 100 cm",
    descripcion: "",
    imagen: "obra-ciudades.jpg",
    estado: "Disponible",
    precio: "",
    ar: "1600/1561",
    cs: 2
  },
  {
    id: "02",
    titulo: "Múltiplos",
    artista: "Natalia Barbiera",
    anio: 2021,
    tecnica: "Técnica mixta — acrílico",
    dimensiones: "100 × 100 cm",
    descripcion: "",
    imagen: "obra-multiplos.jpg",
    estado: "Disponible",
    precio: "",
    ar: "1600/1581",
    cs: 2
  },
  {
    id: "03",
    titulo: "Laberinto",
    artista: "Natalia Barbiera",
    anio: 2023,
    tecnica: "Técnica mixta — acrílico",
    dimensiones: "80 × 100 cm",
    descripcion: "",
    imagen: "obra-laberinto.jpg",
    estado: "Disponible",
    precio: "",
    ar: "1280/1599",
    cs: 2
  },
  {
    id: "04",
    titulo: "Reflexión",
    artista: "Natalia Barbiera",
    anio: 2022,
    tecnica: "Técnica mixta — acrílico",
    dimensiones: "60 × 80 cm",
    descripcion: "",
    imagen: "obra-reflexion.jpg",
    estado: "Disponible",
    precio: "",
    ar: "1600/1159",
    cs: 3
  },
  {
    id: "05",
    titulo: "Kasbah",
    artista: "Natalia Barbiera",
    anio: 2019,
    tecnica: "Técnica mixta — acrílico",
    dimensiones: "90 × 60 cm",
    descripcion: "",
    imagen: "obra-kasbah.jpg",
    estado: "Disponible",
    precio: "",
    ar: "1405/899",
    cs: 3
  },
  {
    id: "06",
    titulo: "Íntegro",
    artista: "Natalia Barbiera",
    anio: 2021,
    tecnica: "Técnica mixta — acrílico",
    dimensiones: "90 × 110 cm",
    descripcion: "",
    imagen: "obra-integro.jpg",
    estado: "Disponible",
    precio: "",
    ar: "1318/1600",
    cs: 2
  },
  {
    id: "07",
    titulo: "Conectivo",
    artista: "Natalia Barbiera",
    anio: 2020,
    tecnica: "Técnica mixta — acrílico",
    dimensiones: "60 × 80 cm",
    descripcion: "",
    imagen: "obra-conectivo.jpg",
    estado: "Disponible",
    precio: "",
    ar: "945/1279",
    cs: 2
  },
  {
    id: "08",
    titulo: "Diagonal Efímera",
    artista: "Natalia Barbiera",
    anio: 2025,
    tecnica: "Técnica mixta — acrílico",
    dimensiones: "50 × 100 cm",
    descripcion: "",
    imagen: "obra-diagonal-efimera.jpg",
    estado: "Disponible",
    precio: "",
    ar: "772/1598",
    cs: 2
  },
  {
    id: "09",
    titulo: "Terre",
    artista: "Natalia Barbiera",
    anio: 2023,
    tecnica: "Técnica mixta — acrílico",
    dimensiones: "120 × 60 cm",
    descripcion: "",
    imagen: "obra-terre.jpg",
    estado: "Disponible",
    precio: "",
    ar: "1600/749",
    cs: 6
  },
  {
    id: "10",
    titulo: "Encre Noire",
    artista: "Natalia Barbiera",
    anio: 2024,
    tecnica: "Técnica mixta — acrílico",
    dimensiones: "100 × 100 cm",
    descripcion: "",
    imagen: "obra-encre-noire.jpg",
    estado: "Disponible",
    precio: "",
    ar: "1600/1574",
    cs: 2
  },
  {
    id: "11",
    titulo: "Salvatori",
    artista: "Natalia Barbiera",
    anio: 2024,
    tecnica: "Técnica mixta — acrílico",
    dimensiones: "80 × 120 cm",
    descripcion: "",
    imagen: "obra-salvatori.jpg",
    estado: "Disponible",
    precio: "",
    ar: "1063/1600",
    cs: 2
  },
  {
    id: "12",
    titulo: "Dualidades",
    artista: "Natalia Barbiera",
    anio: 2024,
    tecnica: "Técnica mixta — acrílico",
    dimensiones: "100 × 100 cm",
    descripcion: "",
    imagen: "obra-dualidades.jpg",
    estado: "Disponible",
    precio: "",
    ar: "1580/1580",
    cs: 2
  },
  {
    id: "13",
    titulo: "Transición",
    artista: "Natalia Barbiera",
    anio: 2026,
    tecnica: "Técnica mixta — acrílico",
    dimensiones: "100 × 100 cm",
    descripcion: "",
    imagen: "obra-transicion.jpg",
    estado: "Disponible",
    precio: "",
    ar: "1530/1598",
    cs: 2
  },
  {
    id: "14",
    titulo: "Sísmico",
    artista: "Natalia Barbiera",
    anio: 2022,
    tecnica: "Técnica mixta — acrílico",
    dimensiones: "100 × 100 cm",
    descripcion: "",
    imagen: "obra-sismico.jpg",
    estado: "Disponible",
    precio: "",
    ar: "1538/1600",
    cs: 2
  }
];

// ---------------------------------------------------------
// Render de la grilla
// ---------------------------------------------------------
const grid = document.getElementById("grid");

function renderGrid(){
  grid.innerHTML = ARTWORKS.map((w, i) => `
    <figure class="piece" style="--ar:${w.ar}; --cs:${w.cs};" data-index="${i}" tabindex="0" role="button" aria-label="Ver obra ${w.titulo}">
      <div class="frame">
        <img src="${w.imagen}" alt="${w.titulo}, ${w.tecnica}, ${w.anio}" loading="lazy">
      </div>
      <figcaption class="tag">
        <span class="t-title">${w.titulo}</span>
        <span class="t-year">${w.anio}</span>
      </figcaption>
    </figure>
  `).join("");

  document.querySelectorAll(".piece").forEach(el => {
    el.addEventListener("click", () => openLightbox(Number(el.dataset.index)));
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " "){
        e.preventDefault();
        openLightbox(Number(el.dataset.index));
      }
    });
  });

  revealObserver();
}

// ---------------------------------------------------------
// Scroll reveal
// ---------------------------------------------------------
function revealObserver(){
  const items = document.querySelectorAll(".piece, .reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(el => io.observe(el));
}

// ---------------------------------------------------------
// Lightbox
// ---------------------------------------------------------
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lb-img");
const lbTitle = document.getElementById("lb-title");
const lbArtist = document.getElementById("lb-artist");
const lbMeta = document.getElementById("lb-meta");
const lbDesc = document.getElementById("lb-desc");
const lbStatus = document.getElementById("lb-status");
const lbInquire = document.getElementById("lb-inquire");

let currentIndex = 0;

function openLightbox(index){
  currentIndex = index;
  renderLightbox();
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox(){
  lightbox.classList.remove("open");
  document.body.style.overflow = "";
}

function renderLightbox(){
  const w = ARTWORKS[currentIndex];

  lbImg.classList.remove("loaded");
  lbImg.src = w.imagen;
  lbImg.alt = `${w.titulo}, ${w.tecnica}, ${w.anio}`;
  lbImg.onload = () => lbImg.classList.add("loaded");

  lbTitle.textContent = w.titulo;
  lbArtist.textContent = w.artista;

  const rows = [
    ["Año", w.anio],
    ["Técnica", w.tecnica],
    ["Dimensiones", w.dimensiones]
  ];
  if (w.precio){ rows.push(["Precio", w.precio]); }

  lbMeta.innerHTML = rows.map(([k, v]) => `<div><span>${k}</span><span>${v}</span></div>`).join("");
  lbDesc.textContent = w.descripcion;
  lbStatus.textContent = w.estado;

  const mensaje = encodeURIComponent(`Hola, me interesa consultar por la obra "${w.titulo}" (${w.anio}).`);
  lbInquire.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensaje}`;
}

function nextWork(){
  currentIndex = (currentIndex + 1) % ARTWORKS.length;
  renderLightbox();
}
function prevWork(){
  currentIndex = (currentIndex - 1 + ARTWORKS.length) % ARTWORKS.length;
  renderLightbox();
}

document.getElementById("lb-close").addEventListener("click", closeLightbox);
document.getElementById("lb-next").addEventListener("click", nextWork);
document.getElementById("lb-prev").addEventListener("click", prevWork);

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox || e.target.classList.contains("lightbox-inner")) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") nextWork();
  if (e.key === "ArrowLeft") prevWork();
});

// ---------------------------------------------------------
// Menú móvil
// ---------------------------------------------------------
const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.classList.toggle("open", isOpen);
});

document.querySelectorAll(".main-nav a, .discover").forEach(a => {
  a.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.classList.remove("open");
  });
});

// ---------------------------------------------------------
// Datos de contacto / marca en el DOM
// ---------------------------------------------------------
document.querySelectorAll("[data-gallery-name]").forEach(el => el.textContent = GALLERY_NAME);
document.querySelectorAll("[data-instagram-handle]").forEach(el => el.textContent = INSTAGRAM_HANDLE);
document.querySelectorAll("[data-instagram-url]").forEach(el => el.setAttribute("href", INSTAGRAM_URL));
document.querySelectorAll("[data-whatsapp-url]").forEach(el => el.setAttribute("href", `https://wa.me/${WHATSAPP_NUMBER}`));
document.getElementById("year").textContent = new Date().getFullYear();

// ---------------------------------------------------------
// Init
// ---------------------------------------------------------
renderGrid();
revealObserver();
