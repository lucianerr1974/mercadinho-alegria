// Funcionalidades simples do site para o projeto escolar.

const campoBusca = document.querySelector("#busca");
if (campoBusca) {
  const produtos = document.querySelectorAll(".produto");
  const contador = document.querySelector("#contador");
  const semResultados = document.querySelector("#sem-resultados");

  campoBusca.addEventListener("input", () => {
    const termo = campoBusca.value.toLowerCase().trim();
    let encontrados = 0;

    produtos.forEach((produto) => {
      const nome = produto.dataset.nome.toLowerCase();
      const aparece = nome.includes(termo);
      produto.hidden = !aparece;
      if (aparece) encontrados++;
    });

    contador.textContent = encontrados + (encontrados === 1 ? " produto" : " produtos");
    semResultados.hidden = encontrados !== 0;
  });
}

const formulario = document.querySelector("#form-cadastro");
if (formulario) {
  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = document.querySelector("#nome").value.trim();
    const mensagem = document.querySelector("#mensagem-cadastro");

    if (nome.length < 3) {
      mensagem.textContent = "Por favor, informe seu nome completo.";
      mensagem.className = "mensagem-form erro";
      return;
    }

    mensagem.textContent = `Cadastro de demonstração preenchido com sucesso, ${nome}! Os dados não foram enviados nem salvos.`;
    mensagem.className = "mensagem-form sucesso";
    formulario.reset();
  });
}
