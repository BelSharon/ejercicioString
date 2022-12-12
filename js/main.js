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

//