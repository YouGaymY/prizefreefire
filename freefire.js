// Exibir mensagem por 5 segundos ao carregar o site
window.addEventListener('load', () => {
    const mensagem = document.getElementById('mensagem-boas-vindas');
    mensagem.style.display = 'block';

    // Ocultar mensagem após 5 segundos
    setTimeout(() => {
        mensagem.style.display = 'none';
    }, 3000);
});

// Função para voltar ao topo da página
function voltarAoTopo() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Animação suave
    });
}

// Função para redirecionar para a página de pagamento com os dados do produto
function redirecionarParaPagamento(nomeProduto, precoProduto, botao) {
    // Obtém a URL de destino a partir do botão clicado
    const urlDestino = botao.getAttribute('data-url');

    // Cria a URL com os parâmetros (nome e preço do produto)
    const url = `${urlDestino}?produto=${encodeURIComponent(nomeProduto)}&preco=${encodeURIComponent(precoProduto)}`;
    
    // Redireciona para a página de pagamento
    window.location.href = url;
}