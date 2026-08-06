document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. MENU MOBILE (TOGGLE)
       ========================================================================== */
    const btnMobile = document.querySelector('.btn-mobile-menu');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-list a');

    function toggleMenu() {
        nav.classList.toggle('active');
        btnMobile.classList.toggle('active');
    }

    if (btnMobile) {
        btnMobile.addEventListener('click', toggleMenu);
    }

    // Fecha o menu ao clicar em qualquer link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    /* ==========================================================================
       2. ENVIO DO FORMULÁRIO PARA O WHATSAPP
       ========================================================================== */
    const formContato = document.getElementById('form-contato');

    if (formContato) {
        formContato.addEventListener('submit', (e) => {
            e.preventDefault();

            // Captura dos valores digitados
            const nome = document.getElementById('nome').value;
            const telefone = document.getElementById('telefone').value;
            const servico = document.getElementById('servico').value;
            const mensagem = document.getElementById('mensagem').value;

            // Formatação do texto para mensagem do WhatsApp
            const numeroEmpresa = '5584987892310'; // CTT - empresa
            let texto = `Olá! Meu nome é *${nome}*.\n`;
            texto += `Telefone: ${telefone}\n`;
            texto += `Gostaria de um orçamento para: *${servico}*\n`;
            if (mensagem) {
                texto += `Observação: ${mensagem}`;
            }

            // Encaminha o usuário para a API do WhatsApp com o texto pronto
            const urlWhatsApp = `https://wa.me/${5584987892310}?text=${encodeURIComponent(texto)}`;
            window.open(urlWhatsApp, '_blank');
        });
    }

    /* ==========================================================================
       3. SOMBRA NO HEADER AO ROLAR A PÁGINA
       ========================================================================== */
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'var(--shadow-sm)';
        }
    });
});