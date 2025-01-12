

function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}


    //novo

   // Função para carregar os dados do localStorage ao iniciar
function carregarDados() {
    const nome = localStorage.getItem('nome') || 'Pedro';
    const email = localStorage.getItem('email') || 'Cavudissa';

    document.getElementById('perfilNome').textContent = nome;
    document.getElementById('perfilEmail').textContent = email;
}

// Função para abrir o formulário e preencher os campos com os dados atuais
function mostrarFormulario() {
    document.getElementById('containerPerfil').style.display = 'none';
    document.getElementById('formularioEdicao').style.display = 'block';

    // Preenche os inputs com os dados atuais
    document.getElementById('inputNome').value = document.getElementById('perfilNome').textContent;
    document.getElementById('inputEmail').value = document.getElementById('perfilEmail').textContent;
}

// Função para salvar os dados
function salvarDados() {
    // Obtém os novos valores
    const novoNome = document.getElementById('inputNome').value;
    const novoEmail = document.getElementById('inputEmail').value;

    // Verifica se os campos foram preenchidos
    if (novoNome.trim() === '' || novoEmail.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return false; // Impede o envio do formulário
    }

    // Atualiza os dados no perfil
    document.getElementById('perfilNome').textContent = novoNome;
    document.getElementById('perfilEmail').textContent = novoEmail;

    // Salva os novos valores no localStorage
    localStorage.setItem('nome', novoNome);
    localStorage.setItem('email', novoEmail);

    // Fecha o formulário e exibe o perfil
    fecharFormulario();

    return false; // Impede o reload da página
}

// Função para fechar o formulário e voltar para o perfil
function fecharFormulario() {
    document.getElementById('formularioEdicao').style.display = 'none';
    document.getElementById('containerPerfil').style.display = 'block';
}

// Carrega os dados ao iniciar a página
carregarDados();
