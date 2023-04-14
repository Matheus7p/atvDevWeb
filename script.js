// 1) Faça um programa que compare o valor de entrada digitado pelo usuário nas seguintes condições: se for menor que 18 deverá imprimir a mensagem: “Você é adolescente” e aparecer a idade digitada, concatenando o valor; se for maior que 18 e menor igual a 65 deverá imprimir: “Você é jovem”, e se for acima de 65 anos deverá imprimir você é idoso. (Deverá utilizar if..else if..else)

function compararIdade() {
  var inputIdade = document.querySelector("#idade");
  var idade = inputIdade.value;

  if (idade < 18) {
    document.getElementById("divCompare").innerHTML = "Você é Adolescente<br>Você tem <span>" + idade + "</span> Anos";
  } else if (idade >= 18 && idade <= 65) {
    document.getElementById("divCompare").innerHTML = "Você é Jovem<br>Você tem <span>" + idade + "</span> Anos";
  } else {
    document.getElementById("divCompare").innerHTML = "Você é Idoso<br>Você tem <span>" + idade + "</span> Anos";
  }
}


// 2) Com laço “For” você deverá fazer a seguinte condição: quando o contador chegar ao número digitado pelo usuário deverá imprimir uma mensagem: “Você tem essa idade: “ + idade (deve concatenar). Caso não chegar a essa idade deverá imprimir: “Dados não encontrado!”


function contadorIdade() {
    var inputIdadeContador = document.querySelector("#idadeContador")
    var idadeCont = inputIdadeContador.value;

    for(let i = 1; i<= 100; i++){
        if(i == idadeCont){
            document.getElementById("divIdadeContador").innerHTML = "Você tem essa idade <span>" + i + "</span>"

            break;
        }
        
        if(i == 100){
            document.getElementById("divIdadeContador").innerHTML = "Dados não encontrado"
        }
    }
}

// 3) Utilizando o laço “While” utilize a mesma lógica com do laço “For”.

function contadorIdade2() {
    var inputIdadeContador2 = document.querySelector("#idadeContador2")
    var idadeCont2 = inputIdadeContador2.value;
    cont = 0

    let encontrouIdade = false;

    while(idadeCont2 >= cont){
      if(cont == idadeCont2){
        document.getElementById("divIdadeContador2").innerHTML = "Você tem essa idade <span>" + idadeCont2 + "</span>"
        encontrouIdade = true;
            break;
      }
      cont++
    }
    if(!encontrouIdade){
      document.getElementById("divIdadeContador2").innerHTML = "Dados não encontrado"
    }
}



// 4) Explique a diferença do laço “do...while” e do “while”.

// os laços "do...while" e "while" são usados para a repetição de um determinado 
// bloco de código enquanto uma condição for verdadeira. a diferença entre eles 
// é que no "do..while" o bloco de código será executado pelo menos 1x mesmo se a
// condição for falsa em contrapartida no "while" se a condição incial for falsa
// o bloco de código não é executado

// 5) Com laço “Switch case” faça a seguinte lógica: Com a entrada de dados do usuário caso for 1, deve imprimir: “Gosto de anime Naruto”, caso 2: “One Punch é muito bom”, caso 3: “A série Supernatural é muito boa”, caso 4: “Vikings com Ragnar era o melhor”, caso nenhuma das opções: você assiste algo que não está na lista
function escolhaAnime() {
    var numAnime = parseInt(document.querySelector("#Anime").value);


  switch(numAnime) {
      case 1:
        document.getElementById("divEscolhaAnime").innerHTML = "Você Gosta de <span>Naruto</span>"
          break
      case 2:
        document.getElementById("divEscolhaAnime").innerHTML = "Você Gosta de <span>One Piece</span>"
          break
      case 3:
        document.getElementById("divEscolhaAnime").innerHTML = "Você Gosta de <span>Jujutsu Kaisen</span>"
          break
      case 4:
        document.getElementById("divEscolhaAnime").innerHTML = "Você Gosta de <span>Vinland Saga</span>"
          break
      default:
          alert('Você assiste algo que não está na lista')
  }
}

// 6) Utilize uma função de sobreposição (override): Faça 4 funções com: soma, subtração, divisão, multiplicação;
const valor1 = document.getElementById('valor1');
const valor2 = document.getElementById('valor2');
const resultado = document.getElementById('divResultado');

document.getElementById('btnSoma').addEventListener('click', () => {
  const v1 = Number(valor1.value);
  const v2 = Number(valor2.value);
  resultado.textContent = soma(v1, v2);
});

document.getElementById('btnSubtracao').addEventListener('click', () => {
  const v1 = Number(valor1.value);
  const v2 = Number(valor2.value);
  resultado.textContent = subtracao(v1, v2);
});

document.getElementById('btnMultiplicacao').addEventListener('click', () => {
  const v1 = Number(valor1.value);
  const v2 = Number(valor2.value);
  resultado.textContent = multiplicacao(v1, v2);
});

document.getElementById('btnDivisao').addEventListener('click', () => {
  const v1 = Number(valor1.value);
  const v2 = Number(valor2.value);
  resultado.textContent = divisao(v1, v2);
});

function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  return a / b;
}
