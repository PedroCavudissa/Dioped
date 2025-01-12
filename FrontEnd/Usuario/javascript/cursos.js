 // Simulação de dados de matrícula
 let estudante = {
    matriculado: true,
    curso: "Programação Web",
    periodo: "Manhã"
};

// Inicializar a interface
window.onload = function() {
    if (estudante.matriculado) {
        document.getElementById("matriculaConcluida").classList.remove("hidden");
        document.getElementById("cursoDetalhes").innerText = `${estudante.curso} | ${estudante.periodo}`;
    } else {
        document.getElementById("semMatricula").classList.remove("hidden");
    }
};

// Mostrar formulário de nova inscrição
function novaInscricao() {
    document.getElementById("matriculaConcluida").classList.add("hidden");
    document.getElementById("semMatricula").classList.add("hidden");
    document.getElementById("formNovaInscricao").classList.remove("hidden");
}

// Cancelar inscrição
function cancelar() {
    document.getElementById("formNovaInscricao").classList.add("hidden");
    if (estudante.matriculado) {
        document.getElementById("matriculaConcluida").classList.remove("hidden");
    } else {
        document.getElementById("semMatricula").classList.remove("hidden");
    }
}

// Confirmar inscrição
function confirmar() {
    const cursoSelecionado = document.getElementById("curso").value;
    const periodoSelecionado = document.getElementById("periodo").value;

    if (!cursoSelecionado || !periodoSelecionado) {
        alert("Por favor, selecione o curso e o período.");
        return;
    }

    // Atualizar os dados do estudante
    estudante.matriculado = true;
    estudante.curso = cursoSelecionado;
    estudante.periodo = periodoSelecionado;

    // Atualizar interface
    cancelar();
}

// Calcular o total a pagar
function calcularTotal() {
    const curso = document.getElementById("curso");
    const preco = curso.options[curso.selectedIndex].dataset.preco || 0;
    document.getElementById("totalPagar").value = `${preco}kz`;
}

function toggleMenu() {
const menu = document.getElementById('menu');
if (menu.style.display === 'block') {
menu.style.display = 'none';
} else {
menu.style.display = 'block';
}
}