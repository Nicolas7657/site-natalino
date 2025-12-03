document.getElementById('cartinha-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nome = document.getElementById('nome').value.trim();
    const cartinha = document.getElementById('cartinha').value.trim();
    const mensagemEnvio = document.getElementById('mensagem-envio');
  
    if (nome && cartinha) {
      mensagemEnvio.textContent = `Obrigado, ${nome}! Sua cartinha para o Papai Noel foi enviada com sucesso 🎅🎁`;
      mensagemEnvio.style.color = 'green';
      this.reset();
    } else {
      mensagemEnvio.textContent = 'Por favor, preencha todos os campos antes de enviar.';
      mensagemEnvio.style.color = 'red';
    }
  });
  