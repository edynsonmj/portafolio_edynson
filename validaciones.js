//core para la validacion, obtiene un input target
export function valida(input){
    //obtengo el tipo de input, sale de la instruccion en html data-tipo="untipo"
    const tipoInput = input.dataset.tipo;
    //validity puede verificar del input si ha cumplido con las condiciones o no
    if(input.validity.valid){
        input.parentElement.classList.remove("error__input")
        input.parentElement.querySelector(".error__input").innerHTML = ""
        
    }else{
        input.parentElement.classList.add("error__input")
        input.parentElement.querySelector(".error__input").innerHTML = mostrarError(tipoInput,input)
    }
}

const tipoErrores = [
    "valueMissing",
    "typeMismatch",
];

const mensajeErrorPersonalizado = {
    //cada elemento debe coincidir con data-tipo del html =
    //para cada error que se quiere validar y es expuesto en el html, se define un mensaje.
    nombre: {
        valueMissing: "No has escrito tu nombre, no lo olvides!"
    },
    correo:{
        valueMissing: "No has escrito tu correo, no lo olvides!",
        typeMismatch: "El correo no es valido"
    },
    asunto:{
        valueMissing: "No has especificado el asunto, no lo olvides!"
    },
    mensaje:{
        valueMissing: "Nos has escrito un mensaje, no lo olvides!"
    },
}

function mostrarError(tipoInput, input){
    let mensaje = "";
    //buscar si coinciden los tipos de errores definidos, con el tipo de error que se ha generado en validity
    tipoErrores.forEach( error => {
        if(input.validity[error]){
            //tipo de input -> el del atributo data-type, error -> el que se ha generado
            mensaje = mensajeErrorPersonalizado[tipoInput][error]
        }
    })
    return mensaje;
}