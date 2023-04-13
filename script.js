// 1) Faça um programa que compare o valor de entrada digitado pelo usuário nas seguintes condições: se for menor que 18 deverá imprimir a mensagem: “Você é adolescente” e aparecer a idade digitada, concatenando o valor; se for maior que 18 e menor igual a 65 deverá imprimir: “Você é jovem”, e se for acima de 65 anos deverá imprimir você é idoso. (Deverá utilizar if..else if..else)

var inputIdade = document.querySelector("#idade");

function compararIdade() {
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

