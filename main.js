/* =========================================================
   GALERÍA — main.js
   Todo el contenido de las obras vive en el array ARTWORKS.
   Para cargar tus piezas reales: reemplazá "imagen" por la ruta
   a tu foto (ej. "images/obra-01.jpg") y completá los demás campos.
   ========================================================= */

const GALLERY_NAME = "Estudio Meridiano";
const WHATSAPP_NUMBER = "5491100000000"; // TODO: reemplazar por tu número real, con código de país, sin + ni espacios
const INSTAGRAM_HANDLE = "@estudiomeridiano"; // TODO: reemplazar
const INSTAGRAM_URL = "https://instagram.com/estudiomeridiano"; // TODO: reemplazar
const CONTACT_EMAIL = "hola@estudiomeridiano.art"; // TODO: reemplazar u omitir

const ARTWORKS = [
  {
    id: "01",
    titulo: "Umbral",
    artista: "M. Losada",
    anio: 2022,
    tecnica: "Óleo sobre lienzo",
    dimensiones: "80 × 100 cm",
    descripcion: "Un estudio sobre los límites entre el espacio interior y el exterior, resuelto en capas translúcidas de ocre y tierra.",
    imagen: "images/obra-01.svg",
    estado: "Disponible",
    precio: "",
    ar: "4/5",
    cs: 2
  },
  {
    id: "02",
    titulo: "Deriva Norte",
    artista: "M. Losada",
    anio: 2021,
    tecnica: "Óleo sobre lienzo",
    dimensiones: "100 × 70 cm",
    descripcion: "Paisaje construido de memoria más que de observación directa; el horizonte aparece y desaparece entre veladuras azules.",
    imagen: "images/obra-02.svg",
    estado: "Vendida",
    precio: "",
    ar: "10/7",
    cs: 3
  },
  {
    id: "03",
    titulo: "Nocturno II",
    artista: "M. Losada",
    anio: 2023,
    tecnica: "Acrílico sobre lienzo",
    dimensiones: "60 × 90 cm",
    descripcion: "Segunda variación de una serie sobre la luz artificial y sus sombras largas en el espacio doméstico.",
    imagen: "images/obra-03.svg",
    estado: "Disponible",
    precio: "",
    ar: "2/3",
    cs: 2
  },
  {
    id: "04",
    titulo: "Composición en ocre",
    artista: "M. Losada",
    anio: 2020,
    tecnica: "Técnica mixta sobre lienzo",
    dimensiones: "90 × 90 cm",
    descripcion: "Ejercicio de color puro: planos superpuestos que buscan el equilibrio antes que la representación.",
    imagen: "images/obra-04.svg",
    estado: "Disponible",
    precio: "",
    ar: "1/1",
    cs: 2
  },
  {
    id: "05",
    titulo: "Silencio",
    artista: "M. Losada",
    anio: 2022,
    tecnica: "Óleo sobre lienzo",
    dimensiones: "70 × 100 cm",
    descripcion: "Pieza central de la colección. Una habitación vacía tratada casi como un retrato.",
    imagen: "images/obra-05.svg",
    estado: "Consultar",
    precio: "",
    ar: "7/10",
    cs: 2
  },
  {
    id: "06",
    titulo: "Horizonte doble",
    artista: "M. Losada",
    anio: 2023,
    tecnica: "Óleo sobre lienzo",
    dimensiones: "150 × 60 cm",
    descripcion: "Formato panorámico pensado para un muro largo; dos horizontes que nunca terminan de encontrarse.",
    imagen: "images/obra-06.svg",
    estado: "Disponible",
    precio: "",
    ar: "5/2",
    cs: 6
  },
  {
    id: "07",
    titulo: "Fragmento I",
    artista: "M. Losada",
    anio: 2021,
    tecnica: "Acrílico sobre tabla",
    dimensiones: "50 × 70 cm",
    descripcion: "Primera pieza de una serie sobre restos y recortes de composiciones anteriores.",
    imagen: "images/obra-07.svg",
    estado: "Disponible",
    precio: "",
    ar: "5/7",
    cs: 2
  },
  {
    id: "08",
    titulo: "Interior",
    artista: "M. Losada",
    anio: 2019,
    tecnica: "Óleo sobre lienzo",
    dimensiones: "80 × 80 cm",
    descripcion: "Una de las primeras piezas de la colección; marca el inicio de la exploración cromática que continúa hasta hoy.",
    imagen: "images/obra-08.svg",
    estado: "Vendida",
    precio: "",
    ar: "1/1",
    cs: 2
  },
  {
    id: "09",
    titulo: "Estudio en gris",
    artista: "M. Losada",
    anio: 2023,
    tecnica: "Técnica mixta sobre papel",
    dimensiones: "60 × 80 cm",
    descripcion: "Boceto llevado a término: una gama reducida de grises tibios sostiene toda la composición.",
    imagen: "images/obra-09.svg",
    estado: "Disponible",
    precio: "",
    ar: "3/4",
    cs: 2
  },
  {
    id: "10",
    titulo: "Marea",
    artista: "M. Losada",
    anio: 2022,
    tecnica: "Óleo sobre lienzo",
    dimensiones: "100 × 80 cm",
    descripcion: "El movimiento del agua traducido en pinceladas horizontales superpuestas, casi en relieve.",
    imagen: "images/obra-10.svg",
    estado: "Disponible",
    precio: "",
    ar: "5/4",
    cs: 3
  },
  {
    id: "11",
    titulo: "Vestigio",
    artista: "M. Losada",
    anio: 2020,
    tecnica: "Acrílico sobre lienzo",
    dimensiones: "90 × 120 cm",
    descripcion: "Obra de cierre de la colección: síntesis de las formas y colores que aparecen en las piezas anteriores.",
    imagen: "images/obra-11.svg",
    estado: "Disponible",
    precio: "",
    ar: "3/4",
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
document.querySelectorAll("[data-email]").forEach(el => {
  el.textContent = CONTACT_EMAIL;
  el.setAttribute("href", `mailto:${CONTACT_EMAIL}`);
});
document.getElementById("year").textContent = new Date().getFullYear();

// ---------------------------------------------------------
// Init
// ---------------------------------------------------------
renderGrid();
revealObserver();
