let textEn = document.getElementById("t1");
let textUn = document.getElementById("t2");
let btnEn = document.getElementById("crypt");
let btnUn = document.getElementById("uncrypt");
let btnCls = document.getElementById("clear");
let btnCopy = document.getElementById("copy");
let btnPaste = document.getElementById("paste");
let modal = document.getElementById("meuModal");
let fecharModal = document.getElementsByClassName("close")[0];

function encryptar() {
  let text = textEn.value;
  if (/^[a-z]+$/.test(text)) {
    text = text.replaceAll("a", "ty0u%y02");
    text = text.replaceAll("e", "i%uj0hb0");
    text = text.replaceAll("i", "n0hg0r%w");
    text = text.replaceAll("o", "pe%0dfw0");
    text = text.replaceAll("u", "qg0wy%0u");
  } else {
    console.log("somente letras minusculas");
    modal.style.display = "block";
    fecharModal.onclick = () => {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }

  textUn.innerHTML = text;
}

function desencryptar() {
  let text = textEn.value;
  text = text.replaceAll("ty0qg0wy%0u%y02", "a");
  text = text.replaceAll("n0hg0r%w%qg0wy%0uj0hb0", "e");
  text = text.replaceAll("n0hg0r%w", "i");
  text = text.replaceAll("pe%0dfw0", "o");
  text = text.replaceAll("qg0wy%0u", "u");
  console.log(text);

  textUn.innerHTML = text;
}

function clear() {
  textEn.value = " ";
  textUn.value = " ";
  location.reload();
}

function copy() {
  textCopy = textUn.value;
  navigator.clipboard.writeText(textCopy).then(() => {
    alert("Texto copiado!");
  });

  location.reload();

  console.log("copiar");
}
function paste() {
  navigator.clipboard.readText().then((text) => {
    textEn.value = text;
  });

  console.log("colar");
}

btnEn.addEventListener("click", encryptar);
btnUn.addEventListener("click", desencryptar);
btnCls.addEventListener("click", clear);
btnCopy.addEventListener("click", copy);
btnPaste.addEventListener("click", paste);
