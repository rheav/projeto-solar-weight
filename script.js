"use strict";

// Utils
const planetList = [
  "Sun",
  "Mercury",
  "Venus",
  "Earth",
  "Moon",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
  "Pluto",
];

//step Elements
// Buttons
const nextPlanetBtn = document.getElementById("next-planet");
const previousPlanetBtn = document.getElementById("previous-planet");

// Planets
const earth = document.querySelector(".earth");

//step Functions
const getNextPlanet = () => {
  console.log("next planet");
};

const getPreviousPlanet = () => {
  console.log("previous planet");
};

const movePlanet = (event) => {
  console.log(event.target.getAttribute("data-planet"));
  if(event.target.getAttribute("data-planet") === planetList
  //TODO -> Como fazer a lista de planetas rodar?
  //TODO --- Preciso que ao clicar no planeta ative a movimentação do outro, mas rodando a array planetList

  event.target.classList.add("move-planet");
};

//step Event Listeners
nextPlanetBtn.addEventListener("click", getNextPlanet);
previousPlanetBtn.addEventListener("click", getPreviousPlanet);
earth.addEventListener("click", movePlanet);
