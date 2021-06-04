var claculator = {
  resultBox: document.querySelector(".result-box"),
  operation: document.querySelector(".operation"),
}


function operand(number) {
  claculator.resultBox.innerHTML += number;
}


var operateNumber = 0;
var operatorSyntext = "";
var operatorNumber2 = 0;

function operator(x) {
  var resultBoxTxt = document.querySelector(".result-box").innerText;
  operateNumber = Number(resultBoxTxt);
  operatorSyntext = x;
  claculator.operation.innerHTML += resultBoxTxt + x;
  // claculator.operation.innerHTML += x;
  claculator.resultBox.innerHTML = "";
}

function equal() {
  var resultBoxTxt = document.querySelector(".result-box").innerText;
  operatorNumber2 = Number(resultBoxTxt);
  statement()
}
function statement() {
  if (operatorSyntext == '+') {
    claculator.resultBox.innerHTML = operateNumber + operatorNumber2;
  } else if (operatorSyntext == '-') {
    claculator.resultBox.innerHTML = operateNumber - operatorNumber2;
  } else if (operatorSyntext == '*') {
    claculator.resultBox.innerHTML = operateNumber * operatorNumber2;
  } else if (operatorSyntext == '/') {
    claculator.resultBox.innerHTML = operateNumber / operatorNumber2;
  } else if (operatorSyntext == '%') {
    claculator.resultBox.innerHTML = operateNumber % operatorNumber2;
  }

}

function clearAll() {
  claculator.resultBox.innerHTML = "";
  claculator.operation.innerHTML = "";
}

console.log(array)