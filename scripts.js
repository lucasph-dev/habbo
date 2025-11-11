/* ======================================================= */
/* 🛠️ SCRIPT DE INTERAÇÕES (MOLDAVEL EM PORTUGUÊS)        */
/* ======================================================= */

document.addEventListener('DOMContentLoaded', () => {
    
    /* 1. VARIÁVEIS DE ELEMENTOS DO DOM (Document Object Model) */
    const linksMenu = document.querySelectorAll('.nav-link.link-menu-habbo'); // Seleciona todos os links do menu
    const formulario = document.getElementById('formularioSugestao');         // Seleciona o formulário na seção Scripts
    const mensagemFeedback = document.getElementById('mensagemFeedback');     // Seleciona a div de feedback

    /* 2. FUNÇÃO PARA ATUALIZAR O MENU ATIVO (Scrollspy Manual) */
    // O Bootstrap 5 já tem Scrollspy, mas esta função complementa a navegação suave.
    function atualizarMenuAtivo() {
        // Encontra a posição de scroll atual
        const posicaoScroll = window.scrollY;
        
        // Percorre todos os links para verificar qual seção está visível
        linksMenu.forEach(link => {
            const idSecao = link.getAttribute('href').substring(1); // Pega o ID da seção (ex: '#inicio' -> 'inicio')
            const secao = document.getElementById(idSecao);
            
            if (secao) {
                // Checa se o topo da seção está na área de visualização (com margem de 100px)
                if (posicaoScroll >= secao.offsetTop - 100 && posicaoScroll < secao.offsetTop + secao.offsetHeight - 100) {
                    // Adiciona a classe 'ativo' se a seção estiver visível
                    link.classList.add('ativo');
                } else {
                    // Remove a classe 'ativo' se a seção não estiver visível
                    link.classList.remove('ativo');
                }
            }
        });
    }

    /* 3. ADICIONA EVENTOS */

    // Evento de Scroll: Atualiza o menu ativo quando o usuário rola a página
    window.addEventListener('scroll', atualizarMenuAtivo);
    
    // Chama a função uma vez ao carregar para definir a seção inicial
    atualizarMenuAtivo(); 

    // Evento de Submit do Formulário
    if (formulario) {
        formulario.addEventListener('submit', function(evento) {
            evento.preventDefault(); // Impede o envio padrão do formulário (que recarregaria a página)

            // Simulação de envio de dados (Aqui você enviaria os dados para um servidor real)
            console.log("Dados do formulário coletados. (Simulação de envio)");
            
            // Lógica de Feedback
            formulario.reset(); // Limpa o formulário
            mensagemFeedback.classList.remove('d-none'); // Exibe a mensagem de sucesso
            
            // Esconde a mensagem de sucesso após 5 segundos
            setTimeout(() => {
                mensagemFeedback.classList.add('d-none');
            }, 5000); 
        });
    }

    /* 4. ANIMAÇÃO DE SCROLL SUAVE (Melhora a navegação para IDs) */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Pega o elemento destino
            const destino = document.querySelector(this.getAttribute('href'));
            
            if (destino) {
                // Rola suavemente para o destino
                window.scrollTo({
                    top: destino.offsetTop - 55, // 55px para compensar o navbar fixo
                    behavior: 'smooth'
                });
            }
        });
    });
});