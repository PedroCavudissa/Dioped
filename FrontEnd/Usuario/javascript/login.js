  // Usuário simulado
  let user = {
    email: "usuario@exemplo.com",
    senha: "123456"
};


// Função para simular o login
document.getElementById("login").addEventListener("click", function () {
    const inputEmail = document.getElementById("email").value.trim();
    const inputSenha = document.getElementById("password").value.trim();

    // Verifica se os campos estão preenchidos
    if (!inputEmail || !inputSenha) {
        exibirFeedback("Por favor, preencha todos os campos.");
        return;
    }

    // Verifica as credenciais
    if (inputEmail === user.email && inputSenha === user.senha) {
        exibirFeedback("Login realizado com sucesso!", false);
        alert("Bem-vindo!");
    } else {
        exibirFeedback("Email ou senha inválidos. Tente novamente.");
    }
});