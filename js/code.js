let input1 = document.querySelector('#input-1');
let btnStart = document.querySelector('#boton-start');
let part1app = document.querySelector('.part-1-app');
let part2app = document.querySelector('.part-2-app');
let name = document.querySelector('.name');


let btnpensar = document.querySelector('#btn-pensar');
let part3app = document.querySelector('.part-3-app');


let botondar = document.querySelector('#boton-dar');
let part4app = document.querySelector('.part-4-app');

let loquedoy = document.querySelector('.loquedoy');

let btnLoquedoy = document.querySelector('#btnLoquedoy');

btnStart.addEventListener("click",(e)=>{
    e.preventDefault();
    if(input1.value == ""){
        alert("aun no se cual es tu nombre");
    }else{
        part2app.style.display = "grid";
        part1app.style.display = "none";
        name.innerHTML = `${"Welcome"}<br>${input1.value}`;
    }
});

btnpensar.addEventListener("click",()=>{
    part3app.style.display = "block";
    part2app.style.display = "none";
});

botondar.addEventListener("click",function(){
    part4app.style.display = "grid";
    part3app.style.display = "none";
    let dar = [2,4,6,8,12,10,14,16,18,20,26,28];
    let result = Math.floor(Math.random() * dar.length);
    loquedoy.innerHTML = dar[result];

    btnLoquedoy.addEventListener("click",()=>{
        let part5app = document.querySelector('.part-5-app');
        
        part4app.style.display = "none";
        part5app.style.display = "grid";

    });


    let quitarMitad = document.querySelector('#quitarMitad');
    let part6app = document.querySelector('.part-6-app');
    let part5app = document.querySelector('.part-5-app');
    let NumeroQuepiensas = document.querySelector('.Numero-Quepiensas');


    quitarMitad.addEventListener("click",()=>{
    part6app.style.display = "grid";
    part5app.style.display = "none";
   
    
})   

let devolver = document.querySelector('#devolver');

devolver.addEventListener("click",()=>{
    let resultadoFinal = document.querySelector(".resultadoFinal");
    resultadoFinal.style.display = "grid";
    part6app.style.display = "none";
    let LastResut = dar[result] / 2;
    NumeroQuepiensas.innerHTML =  `${"El numero que estas"}<br>${ "pensando es:"}<br>${LastResut}`;

})

let volvercomienzo = document.querySelector("#volver-comienzo");
volvercomienzo.addEventListener("click",()=>{
    let input1 = document.querySelector('#input-1');
    let resultadoFinal = document.querySelector(".resultadoFinal");
    part1app.style.display = "grid";
    resultadoFinal.style.display = "none";
    input1.value = "";
})

});


