// Aguarda o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Rolagem Suave para os Links do Menu
    const linksMenu = document.querySelectorAll('nav a, .btn');

    linksMenu.forEach(link => {
        link.addEventListener('click', (evento) => {
            evento.preventDefault(); // Evita o comportamento padrão de pulo
            
            const idAlvo = link.getAttribute('href');
            const secaoAlvo = document.querySelector(idAlvo);

            if (secaoAlvo) {
                secaoAlvo.scrollIntoView({
                    behavior: 'smooth', // Define a animação suave
                    block: 'start'      // Alinha o topo da seção com o topo da tela
                });
            }
        });
    });

    // 2. Manipulação do Formulário de Contato (Simulação de Envio)
    const formulario = document.querySelector('#contato form');

    if (formulario) {
        formulario.addEventListener('submit', (evento) => {
            evento.preventDefault(); // Impede o recarregamento da página

            // Coleta os dados digitados
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();

            // Validação simples extra (além do 'required' do HTML)
            if (nome && email && mensagem) {
                // Exibe uma mensagem de sucesso para o usuário
                alert(`Obrigado pelo contato, ${nome}! Sua mensagem sobre o AgroFuturo foi simulada com sucesso.`);
                
                // Limpa os campos do formulário após o envio
                formulario.reset();
            } else {
                alert('Por favor, preencha todos os campos obrigatórios.');
            }
        });
    }
});
