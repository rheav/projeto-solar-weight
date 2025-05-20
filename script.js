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
  console.log(planetList.indexOf(event.target.getAttribute("data-planet")));
  //TODO -> Como fazer a lista de planetas rodar?
  //TODO --- Preciso que ao clicar no planeta ative a movimentação do outro, mas rodando a array planetList

  event.target.classList.add("move-planet");
  console.log(
    planetList[planetList.indexOf(event.target.getAttribute("data-planet")) + 1]
  );

  document.querySelector(["data-planet"]=planetList[planetList.indexOf(event.target.getAttribute("data-planet")) + 1]) // Quero puxar o proximo elemento aqui
};

//step Event Listeners
nextPlanetBtn.addEventListener("click", getNextPlanet);
previousPlanetBtn.addEventListener("click", getPreviousPlanet);
earth.addEventListener("click", movePlanet);
