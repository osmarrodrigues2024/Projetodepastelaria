document.getElementById('formulario-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio automático

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    alert(`Obrigado, ${nome}! Recebemos sua mensagem: "${mensagem}". Entraremos em contato pelo e-mail: ${email}.`);
    
    // Limpar campos após envio
    document.getElementById('formulario-contato').reset();
});
