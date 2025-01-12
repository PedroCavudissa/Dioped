 // Simula mensagens vindas de um "servidor"
 const mensagensSimuladas = [
    { status: 'pendente', texto: 'Pendente: A sua matrícula para o curso de "Biologia" está em análise.' },
    { status: 'concluido', texto: 'Concluído: A sua matrícula para o curso de "Química" foi confirmada!' },
];

// Função para atualizar mensagens
document.getElementById("btnAtualizar").addEventListener("click", function () {
    const mensagensContainer = document.getElementById("mensagensContainer");

    // Remove mensagens existentes
    mensagensContainer.innerHTML = "";

    // Adiciona mensagens simuladas
    mensagensSimuladas.forEach(msg => {
        const div = document.createElement("div");
        div.className = msg.status === "pendente" ? "pendente" : "concluido";
        div.textContent = msg.texto;
        mensagensContainer.appendChild(div);
    });

    alert("Mensagens atualizadas!");
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