let btn1 = document.getElementById("btn1");
let affichage = document.getElementById("affichage");
btn1.addEventListener("click", () => {
  if(getComputedStyle(affichage).display != "block"){
    affichage.style.display = "block";
  } else {
    affichage.style.display = "none";
  }
});

function changeText(){
  let element = document.getElementById("btn1");
  if (element.value=="VOIR PLUS")
    element.value = "VOIR MOINS";
  else
    element.value = "VOIR PLUS";
}

let btn2 = document.getElementById("btn2");
let affichage2 = document.getElementById("affichage2");
btn2.addEventListener("click", () => {
  if(getComputedStyle(affichage2).display != "block"){
    affichage2.style.display = "block";
  } else {
    affichage2.style.display = "none";
  }
});

function changeText2(){
  let element = document.getElementById("btn2");
  if (element.value=="EN SAVOIR PLUS")
    element.value = "FERMER";
  else
    element.value = "EN SAVOIR PLUS";
}
/*
document.addEventListener("DOMContentLoaded", function() {
  function applyTextZoom() {
    const welcomePage = document.querySelector('.eden');
    const content = document.querySelectorAll('body > *:not(.eden)');

    content.forEach(element => {
      if (!element.classList.contains('zoom-75')) {
        element.classList.add('zoom-75');
      }
    });

    // Désactiver l'événement après la première interaction
    window.removeEventListener("click", applyTextZoom);
    window.removeEventListener("scroll", applyTextZoom);
  }

  // Ajouter des écouteurs d'événements pour le clic et le défilement
  window.addEventListener("click", applyTextZoom);
  window.addEventListener("scroll", applyTextZoom);
});
*/
document.addEventListener("DOMContentLoaded", function() {
  // Appliquer un zoom de 80% à l'ensemble du site
  document.body.style.zoom = "90%";
  // ou utiliser transform pour une meilleure compatibilité
  // document.body.style.transform = "scale(0.8)";
  // document.body.style.transformOrigin = "0 0";

  // Réinitialiser le zoom pour la classe .carousel
  const carousel = document.querySelector('.carousel');
  if (carousel) {
      carousel.style.zoom = "125%"; // 100 / 0.8 = 125 pour compenser le zoom global
      // ou utiliser transform pour une meilleure compatibilité
      // carousel.style.transform = "scale(1.25)";
      // carousel.style.transformOrigin = "0 0";
  }
});
    const eden = document.querySelector('.eden');
    if (eden) {
        eden.style.zoom = "106.25%"; // 125 / 0.8 = 156.25 pour compenser le zoom global
        // ou utiliser transform pour une meilleure compatibilité
        // eden.style.transform = "scale(1.5625)";
        // eden.style.transformOrigin = "0 0";
    }

function initmap(){
  const place = {
    lat: 45.653631,
    lng: -1.081460
  };
  const zoomLevel = 13;

  const map = L.map('mapid').setView([place.lat, place.lng], zoomLevel);

  const mainLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidGltd2VzdGJyb29rMCIsImEiOiJjbDFxN2Fna3gwODNlM2VudXNnaXdnbmh4In0.yVUhVIdg2wruq1K5pwKmHA'
  });

  const circle = L.circle([45.659175, -1.075455], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
  }).addTo(map);

  mainLayer.addTo(map);
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-5rem";
  }
  prevScrollpos = currentScrollPos;
};

const slidesContainers = document.querySelectorAll('.slide-container');
const wrapper = document.querySelector('.wrapper');
let panAmount = 5;
function init() {
  slidesContainers.style = (100 + slidesContainers.length * panAmount) + "%";
  for (var i = 0; i < slidesContainers.length; i++) {
    slidesContainers.style = 100 / slidesContainers.length + "%";
  }
}
init();

const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Quand on scroll, on vérifie la position
window.addEventListener('scroll', () => {
  // Si on a défilé de 200px, on affiche le bouton, sinon on le masque
  if (window.pageYOffset > 200) {
    scrollToTopBtn.style.display = 'flex';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

// Au clic, on remonte en haut en douceur
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
