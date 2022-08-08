function start() {
  var buttonCalculateIMC = document.querySelector("#button-calculate-imc");
  // O addEventListener tem dois parametros: o primeiro é o tipo e o segundo é o que faz quando executar
  // No segundo parametro colocamos o nome da função sem os ()
  buttonCalculateIMC.addEventListener("click", handleButtonClick);

  var inputWeight = document.querySelector("#input-weight");
  var inputHeight = document.querySelector("#input-height");

  inputWeight.addEventListener("input", handleButtonClick);
  inputHeight.addEventListener("input", handleButtonClick);

  handleButtonClick();
}

function calculateIMC(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  var inputWeight = document.querySelector("#input-weight");
  var inputHeight = document.querySelector("#input-height");
  var imcResult = document.querySelector("#imc-result");
  var imcResultText = document.querySelector("#imc-result-text");

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calculateIMC(weight, height);
  var formattedIMC = imc.toFixed(2).replace(".", ",");

  if (isNaN(imc) || imc == Infinity || imc == 0) {
    imcResult.textContent = "Insira um valor válido";
    imcResultText.textContent = faixasImc(imc);
    return;
  } else {
    imcResult.textContent = formattedIMC;
    imcResultText.textContent = faixasImc(imc);
  }
}

function faixasImc(imc) {
  var imcText;
  switch (true) {
    case imc >= 16 && imc <= 16.999:
      imcText = "Muito abaixo do peso";
      break;

    case imc >= 17 && imc <= 18.499:
      imcText = "Abaixo do peso";
      break;

    case imc >= 18.5 && imc <= 24.999:
      imcText = "Peso normal";
      break;

    case imc >= 25 && imc <= 29.999:
      imcText = "Acima do peso";
      break;

    case imc >= 30 && imc <= 34.999:
      imcText = "Obesidade grau I";
      break;

    case imc >= 35 && imc <= 40:
      imcText = "Obesidade grau II";
      break;

    case imc > 40:
      imcText = "Obesidade grau III";
      break;

    default:
      imcText = "Valor inválido";
  }
  return imcText;
}

start();
