/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function excuseGenerator() {
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

    function getElementArray(array) {
      let arrayResult = Math.floor(Math.random(-1) * array.length);
      return arrayResult;
    }

    return (
      who[getElementArray(who)] +
      " " +
      action[getElementArray(action)] +
      " " +
      what[getElementArray(what)] +
      " " +
      when[getElementArray(when)]
    );
  }
  document.getElementById("excusa").innerText = excuseGenerator();
  document.getElementById("botonExcusa").addEventListener("click", function() {
    document.getElementById("excusa").innerText = excuseGenerator();
  });
  console.log("Hello Rigo from the console!");
};
