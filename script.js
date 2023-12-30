let parrafo = "Let's eat, Grandma!";
function cifrar (frc, clv){

    let result='';
    let abcL = "abcdefghijklmnopqrstuvwxyz";
    let abcU = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    for(let ltr of frc){
     
        if(abcL.includes(ltr)){
           result += abcL[(abcL.indexOf(ltr)+clv)%abcL.length];   
        }else if(abcU.includes(ltr)){
            result += abcU[(abcU.indexOf(ltr)+clv)%abcU.length];
        }else{

            result+=ltr;
        }
    }

    return result;
}
console.log(cifrar(parrafo,21));


// function descifrar (frc, clv){
//     let result='';
//     let abc = "abcdefghijklmnopqrstuvwxyz";
   
//     for(let i =0; i<frc.length; i++){
//         ltr = frc[i].toLowerCase();
//         if(ltr === ' '){
//             ltr = ' ';
//         }else{
//             ltr = abc[abcCifrado.indexOf(ltr)];
//         }
//         result+=ltr;
//     }
//     return result;
// }
// console.log(descifrar(parrafo,3));

