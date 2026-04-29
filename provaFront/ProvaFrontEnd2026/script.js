function clicarCard(numero) {
  alert("Você clicou no Card " + numero);
}

function enviar() {
  const nome = document.getElementById("nome").value;
  const mensagem = document.getElementById("mensagem");

  if (nome.trim() === "") {
      mensagem.textContent = "Digite um nome!";
      mensagem.style.color = "red";
  } else {
      mensagem.textContent = "Olá, " + nome + "!";
      mensagem.style.color = "green";
  }
}
