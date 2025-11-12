/* ======================================================= */
/* 🛠️ SCRIPT DE INTERAÇÕES (MOLDAVEL EM PORTUGUÊS)        */
/* ======================================================= */

document.addEventListener('DOMContentLoaded', () => {
    
    /* 1. VARIÁVEIS DE ELEMENTOS DO DOM (Document Object Model) */
    const linksMenu = document.querySelectorAll('.nav-link.link-menu-habbo'); 
    
    // VARIÁVEIS DO NOVO FORMULÁRIO DE UPLOAD/SUPORTE
    const formularioSuporte = document.getElementById('formularioUploadSuporte'); // NOVO ID
    const mensagemFeedback = document.getElementById('mensagemFeedbackUpload');     // NOVO ID

    /* 2. FUNÇÃO PARA ATUALIZAR O MENU ATIVO (Scrollspy Manual) */
    function atualizarMenuAtivo() {
        const posicaoScroll = window.scrollY;
        
        linksMenu.forEach(link => {
            const idSecao = link.getAttribute('href').substring(1); 
            const secao = document.getElementById(idSecao);
            
            if (secao) {
                if (posicaoScroll >= secao.offsetTop - 100 && posicaoScroll < secao.offsetTop + secao.offsetHeight - 100) {
                    link.classList.add('ativo');
                } else {
                    link.classList.remove('ativo');
                }
            }
        });
    }

    /* 3. ADICIONA EVENTOS */

    window.addEventListener('scroll', atualizarMenuAtivo);
    atualizarMenuAtivo(); 

    // Evento de Submit do Formulário de Suporte/Upload
    if (formularioSuporte) {
        formularioSuporte.addEventListener('submit', function(evento) {
            evento.preventDefault(); 
            
            // Simulação: Aqui o JavaScript enviaria os dados (incluindo os arquivos) para um servidor
            const arquivos = document.getElementById('uploadImagens').files;
            console.log(`Dados do formulário e ${arquivos.length} arquivos prontos para envio.`);
            
            // Lógica de Feedback
            formularioSuporte.reset(); // Limpa o formulário
            mensagemFeedback.classList.remove('d-none'); // Exibe a mensagem de sucesso
            
            // Esconde a mensagem de sucesso após 5 segundos
            setTimeout(() => {
                mensagemFeedback.classList.add('d-none');
            }, 5000); 
        });
    }

    /* 4. ANIMAÇÃO DE SCROLL SUAVE (Permanece a mesma) */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const destino = document.querySelector(this.getAttribute('href'));
            
            if (destino) {
                window.scrollTo({
                    top: destino.offsetTop - 55, 
                    behavior: 'smooth'
                });
            }
        });
    });
});