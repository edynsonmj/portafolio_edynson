//logica para realizar las validaciones de los input
import { valida } from "./validaciones.js";

//se obtiene del DOM, todos los elementos del tipo de clase apropiado.
//el selector input no me sirve, por que textarea no es un input.
const inputs = document.querySelectorAll(".contacto__input");

//recorro el array
inputs.forEach((input) => {
    //por cada input, se lanza un listener con el evento blur = quitar foco
    input.addEventListener("blur", (input) => {
        //si el foco del input se ha quitado, ir a validar.
        valida(input.target);
    });
});