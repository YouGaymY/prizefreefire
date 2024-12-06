window.addEventListener('load', () => {
    // Recupera os parâmetros da URL
    const urlParams = new URLSearchParams(window.location.search);
    const produtoNome = urlParams.get('produto');
    const produtoPreco = urlParams.get('preco');

    // Exibe os dados na página de pagamento
    document.getElementById('produto-nome').innerText = produtoNome;
    document.getElementById('produto-preco').innerText = produtoPreco;
});

// Função para copiar a chave Pix para a área de transferência
function copiarChavePix() {
    // Obtém o elemento da chave Pix
    const chavePix = document.getElementById('chave-pix').innerText;
    
    // Cria um campo temporário para copiar o texto
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = chavePix;
    tempInput.select();
    document.execCommand('copy');
    
    // Remove o campo temporário
    document.body.removeChild(tempInput);
    
    // Feedback para o usuário (pode ser uma notificação ou mudança de texto)
    alert('Chave Pix copiada para a área de transferência!');
}