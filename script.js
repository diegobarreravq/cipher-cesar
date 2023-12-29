let parrafo = "hO,lA!123";
function cifrar (frace, clave){
    let letra, resultado='';
    let puntuacion = "',;.:!¡";

    let numeros = "0123456789";
    let numerosCifrados = numeros.slice(clave);
    numerosCifrados+= numeros.slice(0,clave);

    let alfabeto = "abcdefghijklmnopqrstuvwxyz";
    let alfabetoCifrado = alfabeto.slice(clave);
    alfabetoCifrado += alfabeto.slice(0,clave);
    
    for(let i =0; i<frace.length; i++){
        letra = frace[i];

        if(numeros.includes(letra)){
            letra = numerosCifrados[numeros.indexOf(letra)];
        }else if(puntuacion.includes(letra)){
            letra = puntuacion[puntuacion.indexOf(letra)];
        }else if(letra === letra.toUpperCase()){
            letra = letra.toLowerCase();
            letra = alfabetoCifrado[alfabeto.indexOf(letra)];
            letra=letra.toUpperCase();
        }else{
            letra = alfabetoCifrado[alfabeto.indexOf(letra)];
        }
        resultado+=letra;
    }
    return resultado;
}
console.log(cifrar(parrafo,3));

function descifrar (frace, clave){
    let letra, resultado='';
    let alfabeto = "abcdefghijklmnopqrstuvwxyz";
    let alfabetoCifrado = alfabeto.slice(clave);
    alfabetoCifrado += alfabeto.slice(0,clave);
    
    for(let i =0; i<frace.length; i++){
        letra = frace[i].toLowerCase();
        if(letra === ' '){
            letra = ' ';
        }else{
            letra = alfabeto[alfabetoCifrado.indexOf(letra)];
        }
        resultado+=letra;
    }
    return resultado;
}
// console.log(descifrar(parrafo,3));

