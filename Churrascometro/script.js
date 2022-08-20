//Carner - 400gr por pessoa + 6hrs =650gr
//Cerveja - 1200ml por pessoa + 6hrs =2000ml
//Refrigerante - 1000ml por pessoa + 6hrs 1500ml

//Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;


    let qntTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qntTotalCerveja = cervejaPP(duracao) * adultos;
    let qntTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);


    resultado.innerHTML = `<h4 class="result-info">Você vai precisar de:</h4>`
    resultado.innerHTML += `
        <div class="result-block">
            <img src="./IMG/carne.svg"/>
              <p>${qntTotalCarne / 1000} Kg de Carne</p>
              </div>
    `
    resultado.innerHTML += `
    <div class="result-block">
    <img src="./IMG/cerveja.svg"/>
      <p>${Math.ceil(qntTotalCerveja / 355)} latas de Cerveja</p>
   </div>
  `
    resultado.innerHTML += `
    <div class="result-block">
    <img src="./IMG/refri.svg"/>
      <p>${Math.ceil(qntTotalBebidas / 2000)} garrafas de Bebidas</p>
   </div>
       
  `

}

function carnePP(duracao) {

    if (duracao >= 4) {
        return 650;
    } else {
        return 400;
    }
}
function cervejaPP(duracao) {

    if (duracao >= 4) {
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasPP(duracao) {

    if (duracao >= 4) {
        return 1500;
    } else {
        return 1000;
    }
}