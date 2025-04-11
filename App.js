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
// Attendre que le DOM soit complètement chargé
document.addEventListener("DOMContentLoaded", function() {
  // Fonction pour appliquer un zoom de 80% uniquement au texte
  function applyTextZoom() {
    const textElements = document.querySelectorAll('.content p, .content h1, .content h2, .content h3');
    textElements.forEach(element => {
      element.classList.add('text-zoom');
    });
    // Désactiver l'événement après la première interaction
    window.removeEventListener("click", applyTextZoom);
    window.removeEventListener("scroll", applyTextZoom);
  }

  // Ajouter des écouteurs d'événements pour le clic et le défilement
  window.addEventListener("click", applyTextZoom);
  window.addEventListener("scroll", applyTextZoom);
});

// Appliquer un zoom de 80% au chargement de la page
 // document.body.style.zoom = "75%";

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
