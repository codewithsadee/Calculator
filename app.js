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
  document.querySelector(".operate-box").innerHTML += resultBoxTxt;
  document.querySelector(".operate-box").innerHTML += x;
  document.querySelector(".result-box").innerHTML = "";
}

function equal() {
  var resultBoxTxt = document.querySelector(".result-box").innerText;
  operatorNumber2 = Number(resultBoxTxt);
  // document.querySelector(".operate-box").innerHTML = resultBoxTxt;
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

console.log(array)