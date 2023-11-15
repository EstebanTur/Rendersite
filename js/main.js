const navbar = document.querySelector(".navbar");
const sideMenu = document.querySelector(".side-menu");
const serviceSubDescription = document.getElementById("serviceSubDescription");
const main = document.querySelector(".main");
const socialIcons = document.querySelector(".social-icons");
const callToActionButton = document.querySelector(".action-button-container");
const whatsappContainer = document.querySelector(".whatsapp-container");
const servicesList = document.getElementById("services-dropdown-menu");
const descriptionService = document.querySelectorAll(".TextParragraph");
const images = document.querySelectorAll(".img-item");
const allOptions = document.querySelectorAll(".dropdown-item");
const containerDescriptivo = document.getElementById("container-descriptivo");
const gridItem = document.querySelectorAll(".grid-item");

//Slider en el main

// Función para ocultar el navbar y mostrar el menú lateral en pantallas grandes
function showSideMenu() {
  navbar.classList.add("d-none"); // Oculta el navbar
  sideMenu.classList.remove("d-none");
  sideMenu.classList.add("col-lg-1"); // Muestra el menú lateral
  main.classList.remove("col-12"); // Cambia el ancho del main a 10 columnas
  main.classList.add("col-lg-11");
  //Cambio de estilos para el body
  document.body.classList.add("bodystyle");
  //cambio de estilos para el main
  main.classList.add("mainstyle");
  //No mostrar boton wassap
  whatsappContainer.classList.add("d-none");
}

// Función para restablecer el navbar y ocultar el menú lateral en pantallas pequeñas
function hideSideMenu() {
  navbar.classList.remove("d-none"); // Muestra el navbar
  sideMenu.classList.add("d-none"); // Oculta el menú lateral
  sideMenu.classList.remove("col-1");
  main.classList.remove("col-lg-11"); // Restablece el ancho del main
  main.classList.add("col-12"); // Restablece el ancho del main a 12 columnas en pantallas pequeñas
  //cambio de estilos para el main
  main.classList.remove("mainstyle");
  //cambio de estilo para el boton del call to action
}

// Función para cargar el contenido del menú lateral
function loadSideMenuContent() {
  // Define el contenido del menú lateral
  const sideMenuContent = `
  
    <a class="navbar-brand" href="/index.html"><img src="./img/logo menu.png" height="30px" alt="" /></a>
      <ul class="list-unstyled navbar-nav justify-content-end ">
        <li class="my-3"><a href="./index.html" class="my-2 text-decoration-none">Home</a></li>
        <li class="my-3"><a href="./work.html" class="my-2 text-decoration-none">Work</a></li>
        <li class="my-3"><a href="./services.html" class="my-2 text-decoration-none">Services</a></li>
        <li class="my-3"><a href="./contact.html" class="my-2 text-decoration-none">Contact</a></li>
      </ul>
    <div class="social-icons-container">
      <div class="inner-social-icons-container">
        <a href="https://www.facebook.com/javiAbalosArq3d/" target="_blank" class="text-decoration-none  ">
          <img src="img/face-icon.svg" alt="Facebook" height="20px">
        </a>
        <a href="https://www.behance.net/javier_abalos" target="_blank" class="text-decoration-none  ">
          <img src="./img/bhlogo.svg" alt="Twitter" height="20px">
        </a>
        <a href="https://www.instagram.com/javi_abalos_arq3d/" target="_blank" class="text-decoration-none ">
          <img src="./img/instalogo.svg" alt="Instagram" height="20px">
        </a>
      </div>
    </div>
  

  `;

  // Asigna el contenido al menú lateral
  sideMenu.innerHTML = sideMenuContent;
}
function loadListContent() {
  const serviceSubDescriptionContent = `
<div>
<h3 class="h5" >Services title</h3>
  <p class ="text-left">Detailed 3D modeling of both exterior and interior architecture, meticulously crafted using software such as SketchUp or 3ds Max. 
  This intricate modeling process is informed by the project plans, ensuring a highly accurate representation. 
  These 3D models serve a dual purpose: they play a pivotal role in advancing the project's design, while also enabling the generation of 
  photorealistic images and videos that vividly showcase the project's potential.</p>
</div>`;
  serviceSubDescription.classList.remove("d-none");
  serviceSubDescription.innerHTML = serviceSubDescriptionContent;
}
//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES
//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES

//Muestreo de imagenes segun opcion seleccionada
descriptionService.forEach((item) => {
  item.addEventListener("click", () => {
    let lastCharacter = item.id.slice(-1);

    for (i = 0; i < images.length; i++) {
      if (lastCharacter === images[i].id.slice(-1)) {
        images[i].classList.remove("displayNone");
      } else {
        images[i].classList.add("displayNone");
      }
    }
  });
});

//Cambio de Servicios de mobile a desktop
function hideServicesList() {
  servicesList.classList.add("displayNone");
}
function showServicesList() {
  servicesList.classList.remove("displayNone");
}

//index Slider buttons//index Slider buttons//index Slider buttons//index Slider buttons//index Slider buttons
//index Slider buttons//index Slider buttons//index Slider buttons//index Slider buttons//index Slider buttons

// const despuesButton = document.getElementById("despues");
// const antesButton = document.getElementById("antes");
// const sliderTrack = document.querySelector(".slider-track");
// let posicionActual = 0;

// function obtenerPosicionX() {
//   posicionActual = sliderTrack.getBoundingClientRect().x;

//   // Solicitar el próximo fotograma
//   requestAnimationFrame(obtenerPosicionX);
// }

// // Iniciar la obtención de la posición X
// obtenerPosicionX();
// antesButton.addEventListener("click", () => {
//   sliderTrack.classList.remove("speed-animation");
//   sliderTrack.style.animationName = "reverse-scroll";
// });
// despuesButton.addEventListener("click", () => {
//   sliderTrack.classList.add("speed-animation");
//   sliderTrack.classList.remove("reverse-animation");
// });

///CODIGO DE SERVIS MOBILE BUTTON AND LIST///CODIGO DE SERVIS MOBILE BUTTON AND LIST///CODIGO DE SERVIS MOBILE BUTTON AND LIST
//Bucle para iterar los clickevents
allOptions.forEach((item) => {
  const itemId = item.id;
  const numeroIdDeItem = `${itemId.slice(-1)}`;
  item.addEventListener("click", () => {
    toggleClass(numeroIdDeItem);
  });
});

function toggleClass(elementId) {
  for (let i = 0; i < images.length; i++) {
    if (images[i].id.slice(-1) === elementId) {
      images[i].classList.remove("displayNone");
      images[i].classList.remove("d-none");
      images[i].classList.add("d-block");
    } else {
      images[i].classList.add("displayNone");
    }
  }

  descriptionService.forEach((DescriptionIndividual) => {
    if (DescriptionIndividual.id.slice(-1) === elementId) {
      DescriptionIndividual.classList.remove("d-none");
      containerDescriptivo.classList.remove("d-none");
    } else {
      DescriptionIndividual.classList.add("d-none");
    }
  });
}

//REPONSIVE; SEGUN EL TAMAÑO DE PANTALLA PONGO DISPLAY A ELEMENTOS, Y SACO DISPLAY DE OTROS
function handleScreenSizeChange() {
  // //Configuracion botones de slider
  // const prevButton = document.getElementById("antes");
  // const nextButton = document.getElementById("despues");
  // const sliderTrack = document.querySelector(".slider-track");

  // // Función para mover el slider hacia la izquierda
  // function slideLeft() {

  // }
  // // Función para mover el slider hacia la derecha
  // function slideRight() {

  // }

  // // Event listener para el botón izquierdo
  // prevButton.addEventListener("click", slideLeft);

  // // Event listener para el botón derecho
  // nextButton.addEventListener("click", slideRight);
  if (window.innerWidth > 992) {
    //Foreach para agregar todos los items de la lista
    descriptionService.forEach((DescriptionIndividual, i) => {
      DescriptionIndividual.classList.remove("d-none");
    });
    loadSideMenuContent(); //CREO HTML DENTRO DEL DIV "SIDEMENU"
    document.addEventListener("DOMContentLoaded", function () {
      loadListContent();
    });
    showSideMenu(); //AGREGO EL SIDE MENU, BORRO EL NAV RESPONSIVE, CAMBIO COLUMNAS DE MAIN Y SIDE PARA QUE SE VEA MEJOR
    //Remueve el display none de texto descriptivo

    //PAGINA DE SERVICIOS //PAGINA DE SERVICIOS
    hideServicesList(); //EN PANTALLA GRANDE OCULTO EL BOTON DE SERIVICIOS Y SACO LA CLASE DROPDOWN DE LA LISTA
  } else if (window.innerWidth <= 768) {
    hideSideMenu();
    showServicesList();
    containerDescriptivo.classList.add("d-none");
    serviceSubDescription.classList.add("d-none");
  } else {
    serviceSubDescription.classList.add("d-none");
    // Rango intermedio (768px - 992px)
    navbar.classList.remove("d-none"); // Muestra el navbar
    sideMenu.classList.add("d-none"); // Oculta el menú lateral
    // hideServicesList();
    containerDescriptivo.classList.remove("d-none");
    loadListContent();
    //Foreach para agregar todos los items de la lista
    descriptionService.forEach((DescriptionIndividual, i) => {
      DescriptionIndividual.classList.remove("d-none");
    });
  }
}

// Agregar evento de cambio de tamaño de pantalla
window.addEventListener("resize", handleScreenSizeChange);

// Inicialmente, verifica el tamaño de la pantalla
handleScreenSizeChange();
//Work Section//Work Section//Work Section//Work Section//Work Section//Work Section//Work Section//Work Section//Work Section//Work Section
lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
  disableScrolling: true,
});
