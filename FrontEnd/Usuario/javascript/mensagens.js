// Simulação de inscrição (o curso selecionado é salvo no localStorage)
function novaInscricao() {
    const cursoSelecionado = "Programação Web"; // Exemplo: curso selecionado no momento da inscrição
    localStorage.setItem("cursoSelecionado", cursoSelecionado);
    alert("Curso selecionado: " + cursoSelecionado);
}

// Preenche o nome do curso na mensagem pendente
document.addEventListener("DOMContentLoaded", function () {
    const cursoSelecionado = localStorage.getItem("cursoSelecionado") || "não definido";
    const cursoSpan = document.getElementById("curso");
    cursoSpan.textContent = cursoSelecionado;
});

// Define as mensagens padrão
const mensagemPendente = {
    status: "pendente",
    texto: 'Pendente: A sua matrícula para o curso de "Programação Web" está em progresso. Após confirmarmos o pagamento, iremos atualizar o estado da matrícula.'
};
const mensagemConcluida = {
    status: "concluido",
    texto: 'Concluído: A sua matrícula para o curso de "Programação Web" foi confirmada com sucesso. Bem-vindo(a)!'
};

// Adiciona evento ao botão "Atualizar"
document.getElementById("btnAtualizar").addEventListener("click", function () {
    const mensagensContainer = document.getElementById("mensagensContainer");

    // Verifica se a mensagem já foi atualizada para "concluída"
    if (mensagensContainer.firstChild.className === "concluido") {
        alert("A mensagem já foi atualizada para 'Concluído'.");
        return;
    }

    // Atualiza a mensagem para "concluída"
    mensagensContainer.innerHTML = ""; // Limpa as mensagens existentes
    const div = document.createElement("div");
    div.className = "concluido";
    div.textContent = mensagemConcluida.texto;
    mensagensContainer.appendChild(div);
});

// Função para enviar mensagem
document.getElementById("btnEnviar").addEventListener("click", function () {
    const mensagem = document.getElementById("campoMensagem").value;

    if (mensagem.trim() === "") {
        alert("Por favor, digite uma mensagem.");
        return;
    }

    // Simula envio da mensagem
    alert("Mensagem enviada: " + mensagem);

    // Limpa o campo de texto
    document.getElementById("campoMensagem").value = "";
});
