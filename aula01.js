function verificarMultiplo() {

  let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
  let valor2 = parseFloat(prompt("Digite o segundo valor:"));


  if (valor1 % valor2 === 0) {
      alert(`${valor1} é múltiplo de ${valor2}`);
  } else {
      alert(`${valor1} não é múltiplo de ${valor2}`);
  }
}

verificarMultiplo();
