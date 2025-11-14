function get(id) {
  const el = document.getElementById(id);
  if (!el) {
    console.warn('Elemento não encontrado:', id);
  }
  return el;
}





const inputNome = get("nome");
const btnEnviar = get("enviar");
const mensagem = get("mensagem");

if (btnEnviar && inputNome && mensagem) {
  btnEnviar.addEventListener("click", function () {
    const nome = inputNome.value.trim();
    if (nome === "") {
      mensagem.textContent = "Por favor, digite um nome.";
      mensagem.style.color = "red";
      return;
    }
    mensagem.textContent = "Bem-vindo, " + nome + "!";
    mensagem.style.color = "blue";
  });
}



const parTexto = get("texto");
const botaoMudar = get("botao");

if (botaoMudar && parTexto) {
  botaoMudar.addEventListener("click", function () {
    parTexto.textContent = "Texto alterado com sucesso!";
    parTexto.classList.add("destaque");
  });
}

const area = get("area");
const btnNovo = get("novo");

if (btnNovo && area) {
  btnNovo.addEventListener("click", function () {
    const novo = document.createElement("p");
    novo.textContent = "Item adicionado em " + new Date().toLocaleTimeString();
    area.appendChild(novo);
  });
}

const btnMudar = get("mudar");
const paragrafos = document.querySelectorAll(".item"); 

if (btnMudar) {
  btnMudar.addEventListener("click", function () {
    if (!paragrafos || paragrafos.length === 0) {
      console.warn("Nenhum parágrafo com a classe .item foi encontrado.");
      return;
    }
    paragrafos.forEach(function (p, i) {
      p.textContent = "Parágrafo " + (i + 1) + " — texto atualizado!";
    });
  });
}
console.log("script.js carregado e inicializado");
