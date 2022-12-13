//ejercicio 1--------------------------------------
let nombre="Abraham";
nombre = nombre.toUpperCase();
let letra = "";
let n= nombre.length;
let contFinal = 0;


    for (let i = 0; i <= n; i++) {
        console.log(nombre.charAt(i));
        let contTemp = 1;
        for (let cont = i+1; cont < nombre.length; cont++) {
            if (nombre.charAt(i) == nombre.charAt(cont))
                contTemp++;
        } 
        if (contTemp>contFinal){
            contFinal=contTemp;
            letra = nombre.charAt(i);
        }
    }
console.log(letra, contFinal);

//Ejercicio 2-----------------------------------------
function reves(str) {
    let nuevaStr = "";
    for (let index = str.length-1; index >= 0; index--) {
        nuevaStr += str.charAt(index);
    }
    return nuevaStr;
}

//Ejercicio 3------------------------------------------------
function esPalindromo(str) {
    str = str.toLowerCase();
    str = str.replaceAll(" ","");
    if (reves(str)==str)
        return true;
    return false;
}


//VALIDACIONES------------------------------------------------
let btnEnviar = document.getElementById("btnEnviar");
    
    btnEnviar.addEventListener("click", function (event) {
    event.preventDefault();
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let exampleFormControlInput1 = document.getElementById("exampleFormControlInput1");
    let exampleFormControlTextarea1 = document.getElementById("exampleFormControlTextarea1");
    let alertError = document.getElementById("alertError");
    exampleFormControlTextarea1.value = exampleFormControlTextarea1.value.trim();
    alertError.style.display="none";
    alertError.innerHTML ="";
    // console.log("[" +
    //     exampleFormControlTextarea1.value.replaceAll("  ", "") + "]");

    //     console.log(exampleFormControlTextarea1.value.replaceAll("  ","").length);

    if (exampleFormControlTextarea1.value.trim().replaceAll("  ","").length < 20) {
        alertError.innerHTML = `El mensaje debe contener 20 caracteres o más`;
        alertError.style.display="block";
        exampleFormControlTextarea1.focus();
        exampleFormControlTextarea1.select();
    }

   if ( exampleFormControlInput1.value.match(emailRegex) == null) {
        alertError.style.display="block";
        alertError.innerHTML+= "<br/> El correo electrónico no es válido.";
   }

})