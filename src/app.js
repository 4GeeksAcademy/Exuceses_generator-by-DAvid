/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  function generarExcusa() {
    let who = ["mi novio", "Pablo", "Pabluchi", "mi amor"];
    let action = [
      "ha apetecido",
      "quiere que le cocine",
      "me ha sugerido para comer",
      "le gustaría comer"
    ];
    let what = [
      "pechuga de pavo al curry rojo",
      "calamares en su tinta",
      "ragout de pato a la naranja",
      "unos callos con garbanzos"
    ];
    let when = [
      "Esta tarde",
      "Hoy",
      "Cuando nos hemos despertado",
      "Durante el desayuno",
      "Cuando nos hemos visto"
    ];

    let sujeto = who[Math.floor(Math.random() * who.length)];
    let accion = action[Math.floor(Math.random() * action.length)];
    let que = what[Math.floor(Math.random() * what.length)];
    let cuando = when[Math.floor(Math.random() * when.length)];

    return `${cuando} ${sujeto} ${accion} ${que} .`;
  }

  document.getElementById("excusa").innerText = generarExcusa();
  document.getElementById("botonExcusa").addEventListener("click", function() {
    document.getElementById("excusa").innerText = generarExcusa();
  });
  console.log("Hello Rigo from the console!");
};
