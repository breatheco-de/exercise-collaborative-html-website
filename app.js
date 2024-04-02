//Guardado de selecciones
let selectedEntrante = null;
let selectedEntranteDescription = "";
let selectedPrimero = null;
let selectedPrimeroDescription = "";
let selectedBebida = null;
let selectedBebidaDescription = "";
let selectedPostre = null;
let selectedPostreDescription = "";

// Función seleccionar entrante
function selectEntrante(option) {
  selectedEntrante = option;
  hideElement("entrante_form");
  showElement("primeros_form");

  // Asigna descripcion e imagen a entrante
  switch (option) {
    case 1:
      selectedEntranteDescription = "Ensalada César.";
      showEntranteImage("img/Cesar.png");
      break;
    case 2:
      selectedEntranteDescription = "Patatas Bravas.";
      showEntranteImage("img/Bravas.png");
      break;
    case 3:
      selectedEntranteDescription = "Alitas Picantes.";
      showEntranteImage("img/Alitas.png");
      break;
  }
  updateOrder();
}

// Función mostrar imagen entrante
function showEntranteImage(imageSrc) {
  document.getElementById(
    "starter_img"
  ).innerHTML = `<img src="${imageSrc}" alt="Entrante ${selectedEntrante}" style="width: 100%;">`;
}

// Función seleccionar primero
function selectPrimero(option) {
  selectedPrimero = option;
  hideElement("primeros_form");
  showElement("bebidas_form");

  // Asigna descripción e imagen a primero.
  switch (option) {
    case 1:
      selectedPrimeroDescription = "Spaghetti a la Bolognesa.";
      showPrimeroImage("img/Pasta.png");
      break;
    case 2:
      selectedPrimeroDescription = "Boss Burger con Patatas.";
      showPrimeroImage("img/Burger.png");
      break;
    case 3:
      selectedPrimeroDescription = "Burrito Mexicano.";
      showPrimeroImage("img/Burrito.png");
      break;
  }
  updateOrder();
}

// Función mostrar imagen primero
function showPrimeroImage(imageSrc) {
  document.getElementById(
    "main_img"
  ).innerHTML = `<img src="${imageSrc}" alt="Primero ${selectedPrimero}" style="width: 100%;">`;
}

// Función seleccionar bebida
function selectBebida(option) {
  selectedBebida = option;
  hideElement("bebidas_form");
  showElement("postres_form");

  // Asigna descripción e imagen bebida
  switch (option) {
    case 1:
      selectedBebidaDescription = "Coca-Cola Original.";
      showBebidaImage("img/Coke.png");
      break;
    case 2:
      selectedBebidaDescription = "Sprite.";
      showBebidaImage("img/Sprite.png");
      break;
    case 3:
      selectedBebidaDescription = "Agua Cabreiroá.";
      showBebidaImage("img/Agua.png");
      break;
  }
  updateOrder();
}

// Función mostrar imagen bebida
function showBebidaImage(imageSrc) {
  document.getElementById(
    "drink_img"
  ).innerHTML = `<img src="${imageSrc}" alt="Bebida ${selectedBebida}" style="width: 100%;">`;
}

// Función seleccionar postre
function selectPostre(option) {
  hideElement("postres_form");
  showElement("boton");
  showElement("post_menu");

  // Asigna descripción e imagen postre
  switch (option) {
    case 1:
      selectedPostreDescription = "Brownie de Chocolate con Nata y Topping.";
      showPostreImage("img/Brownie.png");
      break;
    case 2:
      selectedPostreDescription = "Crepe de Chocolate con Frutos Rojos.";
      showPostreImage("img/Crepe.png");
      break;
    case 3:
      selectedPostreDescription = "Helado de Vainilla con Galleta y Brownie.";
      showPostreImage("img/Helado.png");
      break;
  }
  updateOrder();
}

// Función mostrar imagen postre
function showPostreImage(imageSrc) {
  document.getElementById(
    "dessert_img"
  ).innerHTML = `<img src="${imageSrc}" alt="Postre ${selectedPostre}" style="width: 100%;">`;
}

// Función actualizar el pedido
function updateOrder() {
  document.getElementById(
    "starter_info"
  ).innerText = selectedEntranteDescription;
  document.getElementById("main_info").innerText = selectedPrimeroDescription;
  document.getElementById("drink_info").innerText = selectedBebidaDescription;
  document.getElementById("dessert_info").innerText = selectedPostreDescription;
}

// Funciones mostrar y ocultar
function showElement(id) {
  document.getElementById(id).style.display = "block";
}

function hideElement(id) {
  document.getElementById(id).style.display = "none";
}

// Oculta elementos al cargar la página
window.onload = function () {
  hideElement("primeros_form");
  hideElement("boton");
  hideElement("bebidas_form");
  hideElement("postres_form");
  hideElement("post_menu");
};

// animación fly

function flyToElement(flyer, flyingTo) {
  var $func = $(this);
  var divider = 1.092;
  var initialWidth = 149;
  var initialHeight = 144;

  $(flyer).css({
    width: initialWidth + 'px',
    height: initialHeight + 'px'
  });

  var flyerClone = $(flyer).clone();
  $(flyerClone).css({
    position: 'absolute',
    top: $(flyer).offset().top + "px",
    left: $(flyer).offset().left + "px",
    opacity: 1,
    'z-index': 1000,
    width: initialWidth + 'px',
    height: initialHeight + 'px'
  });
  $('body').append($(flyerClone));

  var gotoX = $(flyingTo).offset().left + ($(flyingTo).width() / 1.7) - (initialWidth / divider) / 2;
  var gotoY = $(flyingTo).offset().top + ($(flyingTo).height() / 1.7) - (initialHeight / divider) / 2;

  $(flyerClone).animate({
    opacity: 0.5,
    left: gotoX,
    top: gotoY,
    width: $(flyer).width() / divider,
    height: $(flyer).height() / divider
  }, 700,
    function () {

      $(flyingTo).fadeIn('fast', function () {

        $(flyerClone).remove();

      });

    });
}

$(document).ready(function () {
  $('.add-to-cart').on('click', function () {
    $('html, body').animate({
      'scrollTop': $(".cart_anchor").position().top
    });
    var itemImg = $(this).parent().find('img').eq(0);
    flyToElement($(itemImg), $('.cart_anchor'));
  });
});

$(document).ready(function () {
  $('.add-to-cart1').on('click', function () {
    $('html, body').animate({
      'scrollTop': $(".cart_anchor1").position().top
    });
    var itemImg = $(this).parent().find('img').eq(0);
    flyToElement($(itemImg), $('.cart_anchor1'));
  });
});

$(document).ready(function () {
  $('.add-to-cart2').on('click', function () {
    $('html, body').animate({
      'scrollTop': $(".cart_anchor2").position().top
    });
    var itemImg = $(this).parent().find('img').eq(0);
    flyToElement($(itemImg), $('.cart_anchor2'));
  });
});

$(document).ready(function () {
  $('.add-to-cart3').on('click', function () {
    $('html, body').animate({
      'scrollTop': $(".cart_anchor3").position().top
    });
    var itemImg = $(this).parent().find('img').eq(0);
    flyToElement($(itemImg), $('.cart_anchor3'));
  });
});






