// Exibir o formulário e ocultar o perfil
function mostrarFormulario() {
    const containerPerfil = document.getElementById('containerPerfil');
    const formularioEdicao = document.getElementById('formularioEdicao');

    containerPerfil.style.display = 'none'; // Ocultar o perfil
    formularioEdicao.style.display = 'block'; // Mostrar o formulário
}

// Ocultar o formulário e exibir o perfil
function fecharFormulario() {
    const containerPerfil = document.getElementById('containerPerfil');
    const formularioEdicao = document.getElementById('formularioEdicao');

    formularioEdicao.style.display = 'none'; // Ocultar o formulário
    containerPerfil.style.display = 'block'; // Mostrar o perfil
}


function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}