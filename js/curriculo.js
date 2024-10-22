window.onload = function() {
  document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    
      // Captura os dados inseridos
      const nome = document.getElementById("nome").value;
      const sobrenome = document.getElementById("sobrenome").value;
      const telefone = document.getElementById("telefone").value;
      const email = document.getElementById("email").value;
      const mensagem = document.getElementById("mensagem").value;
      const lingua = document.getElementById("lingua").value;
      const prototipo = document.getElementById("protótipo").value.split('\\').pop(); // Extrai o nome do arquivo
      const linguagens = Array.from(document.getElementById("linguagens").selectedOptions).map(option => option.value);
      const banco_dados = document.querySelector('input[name="banco_dados"]:checked').value;
      const turno = document.getElementById("turno").value;
      const horario = document.getElementById("horario").value;
      const data = document.getElementById("data").value;
    
      // Monta o conteúdo a ser exibido
      const dadosHTML = `
        <div class="container-sm">
        <h3 class="text-center">Dados do Formulário:</h3>
        <p><strong>Nome:</strong> ${nome} ${sobrenome}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${mensagem}</p>
        <p><strong>Língua Aplicada:</strong> ${lingua}</p>
        <p><strong>Protótipo:</strong> ${prototipo}</p>
        <p><strong>Linguagens Preferidas:</strong> ${linguagens.join(', ')}</p>
        <p><strong>Banco de Dados:</strong> ${banco_dados}</p>
        <p><strong>Turno para Reuniões:</strong> ${turno}</p>
        <p><strong>Horário Sugerido:</strong> ${horario}</p>
        <p><strong>Data Prevista de Entrega:</strong> ${data}</p>
        </div>
      `;
    
      // Exibe os dados na seção do formulário
      const dadosFormulario = document.getElementById("dadosFormulario");
      dadosFormulario.innerHTML = dadosHTML;
      dadosFormulario.style.display = "block"; // Exibe a div com os dados
    
      // Oculta o formulário
      document.getElementById("form-container").style.display = "none";
  });
}

// Limpar o formulário
document.getElementById("limpar").addEventListener("click", function() {
  document.getElementById("formulario").reset();
});
