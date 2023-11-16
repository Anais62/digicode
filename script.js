// var codeSaisie = document.getElementById("code");
// const boncode = "1234";

// function press(code) {
//     codeSaisie.textContent += code;
//     if (codeSaisie.textContent.length === 4) {
//         checkCode();
//     }
// }

// function checkCode(){
//     if (codeSaisie.textContent === boncode) {
//         codeSaisie.style.backgroundColor = "#aef359";
//         setTimeout(reset, 1000);
//     }else {
//         codeSaisie.style.backgroundColor = "#e3242b";
//         setTimeout(reset, 1000);
//     }
// }

// function reset(){
//     codeSaisie.textContent="";
//     codeSaisie.style.backgroundColor="";
// }


let numero = document.querySelectorAll('.nombre');
let keybord = document.querySelector ('.main');
let textesurecran = document.querySelector ('p');
let codesecret = '1234';
let couleur = document.getElementById("code");
let tabRandom = [];
let tab = [1,2,3,4,5,6,7,8,9,"*",0,"#"]



for (let i=0;i<numero.length; i++) {
    numero[i].innerHTML = tab[i];
    numero[i].addEventListener("click", function touch(){
        console.log(numero[i].innerHTML);
        textesurecran.innerHTML+=numero[i].innerHTML;
        if (textesurecran.innerHTML.length >= 4){
            checkCode();
        } if(textesurecran.innerHTML.length > 4) {
                reset();
            }; 
        }
        )}
    



function checkCode(){
    if ( textesurecran.textContent === codesecret){
        couleur.style.backgroundColor="#aef359";
        
        
    }else {
        couleur.style.backgroundColor="#e3242b";
       
    }
}

function reset () {
    couleur.textContent="";
    couleur.style.backgroundColor="";
}

// function rand() { let temp=0
//     temp = Math.floor(Math.random() * (14 - 1) + 1);
//     if (tableau.includes(temp)===false){
//          tableau.push(temp)};
   
//    }
//     function remplirtableau() {
    
   
//         for (let i = 0; i < 13; i++) {
//                 let nombreAleatoire = rand();
//                 if (!tableau.includes(nombreAleatoire)) {
//                     tableau.push(nombreAleatoire);
//                 }
//             }
//             return tableau;
//         }
        
//         remplirtableau(6);
        
//         console.log(tableau);


    for (i=0 ; i <12; i++) {
    nbRandom = Math.floor ( Math.random() *tab.concat.length)
    tabRandom.push (tab[nbRandom])
    tab.splice(nbRandom,1)
    }