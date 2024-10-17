let digitadoPeloUsuario = prompt("Seu ano de nascimento:");
let anoAtual = 2024; 
let idade = anoAtual - digitadoPeloUsuario; 

document.getElementById("resultado").innerText = "Sua idade é: " + idade;

//if (idade > 80) {
//  document.getElementById("resultado").innerText = "Não me leva a mal, MAS TUDO ISSO?";
//}if else (idade < 0){
//  document.getElementById("resultado").innerText = "Temos aqui um novo BAIJAMIN BUTTON: " + idade + "anos de idade é para poucos";
//}else{
//  document.getElementById("resultado").innerText - "Sua idade é"
//}
