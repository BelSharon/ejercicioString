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

//Ejercicio 3 Nos ayuda a saber si una palabra es un palíndromo.
function esPalindromo(str) {
    str = str.toLowerCase();
    str = str.replaceAll(" ","");
    if (reves(str)==str)
        return true;
    return false;
}