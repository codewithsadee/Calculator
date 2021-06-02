
function operand(number) {
  document.querySelector(".result-box").innerHTML += number;
}


var operateNumber = 0;
var operatorSyntext = "";
var operatorNumber2 = 0;

function operator(x) {
  var resultBoxTxt = document.querySelector(".result-box").innerText;
  operateNumber = Number(resultBoxTxt);
  operatorSyntext = x;
  document.querySelector(".operation").innerHTML += resultBoxTxt;
  document.querySelector(".operation").innerHTML += x;
  document.querySelector(".result-box").innerHTML = "";
}

function equal() {
  var resultBoxTxt = document.querySelector(".result-box").innerText;
  operatorNumber2 = Number(resultBoxTxt);
  statement()
}
function statement() {
  if (operatorSyntext == '+') {
    document.querySelector(".result-box").innerHTML = operateNumber + operatorNumber2;
  } else if (operatorSyntext == '-') {
    document.querySelector(".result-box").innerHTML = operateNumber - operatorNumber2;
  } else if (operatorSyntext == '*') {
    document.querySelector(".result-box").innerHTML = operateNumber * operatorNumber2;
  } else if (operatorSyntext == '/') {
    document.querySelector(".result-box").innerHTML = operateNumber / operatorNumber2;
  } else if (operatorSyntext == '%') {
    document.querySelector(".result-box").innerHTML = operateNumber % operatorNumber2;
  }

}

function clearAll() {
  document.querySelector(".result-box").innerHTML = "";
  document.querySelector(".operation").innerHTML = "";
}

console.log(array)