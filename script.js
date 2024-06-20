function posNeg() {
  var userInput = document.getElementById("userInput").value;
  if (userInput > 0) {
    alert(`O numero ${userInput} é positivo.`);
  } else if (userInput < 0) {
    alert(`O numero ${userInput} é negativo.`);
  } else if (userInput != "/^X$/") {
    alert("Por favor digite um número!");
  } else {
    alert(`O numero digitado é zero!`);
  }
}
