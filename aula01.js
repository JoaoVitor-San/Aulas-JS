let digitadoPeloUsuario = prompt("Seu ano de nascimento:");
let anoAtual = 2024; 
let idade = anoAtual - digitadoPeloUsuario; 

document.getElementById("resultado").innerText = "Sua idade é: " + idade;
