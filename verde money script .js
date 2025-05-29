document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const formCadastroPonto = document.getElementById('formCadastroPonto');
    const pontosColetaContainer = document.getElementById('pontosColetaContainer');
    const mensagemSemPontos = document.getElementById('mensagemSemPontos');

    const formRegistroColeta = document.getElementById('formRegistroColeta');
    const totalPontosDisplay = document.getElementById('totalPontos');
    const anoAtualSpan = document.getElementById('anoAtual');

    // Estado da aplicação (simulação de banco de dados em memória)
    let pontosCadastrados = [];
    let pontosAcumulados = 0;

    // Atualiza o ano no rodapé
    if (anoAtualSpan) {
        anoAtualSpan.textContent = new Date().getFullYear();
    }

    // --- Cadastro de Pontos de Coleta ---
    if (formCadastroPonto) {
        formCadastroPonto.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            const nomePonto = document.getElementById('nomePonto').value.trim();
            const enderecoPonto = document.getElementById('enderecoPonto').value.trim();
            const tipoMaterial = document.getElementById('tipoMaterial').value;
            const nomeResponsavel = document.getElementById('nomeResponsavel').value.trim();

            if (nomePonto && enderecoPonto && tipoMaterial && nomeResponsavel) {
                const novoPonto = {
                    id: Date.now(), // ID simples baseado no timestamp
                    nome: nomePonto,
                    endereco: enderecoPonto,
                    material: tipoMaterial,
                    responsavel: nomeResponsavel
                };

                pontosCadastrados.push(novoPonto);
                renderizarPontosColeta();
                formCadastroPonto.reset(); // Limpa o formulário
                alert('Ponto de coleta cadastrado com sucesso! (Lembre-se, os dados são temporários)');
            } else {
                alert('Por favor, preencha todos os campos do cadastro do ponto.');
            }
        });
    }

    function renderizarPontosColeta() {
        if (!pontosColetaContainer) return;

        // Limpa o container antes de renderizar (exceto a mensagem inicial)
        pontosColetaContainer.innerHTML = ''; 
        if (pontosCadastrados.length === 0) {
            pontosColetaContainer.appendChild(mensagemSemPontos);
            mensagemSemPontos.style.display = 'block';
        } else {
            if (mensagemSemPontos) mensagemSemPontos.style.display = 'none';
            
            pontosCadastrados.forEach(ponto => {
                const divPonto = document.createElement('div');
                divPonto.classList.add('ponto-coleta-item');
                divPonto.innerHTML = `
                    <h4>${ponto.nome}</h4>
                    <p><strong>Endereço:</strong> ${ponto.endereco}</p>
                    <p><strong>Material Principal:</strong> ${ponto.material}</p>
                    <p><strong>Responsável:</strong> ${ponto.responsavel}</p>
                `;
                pontosColetaContainer.appendChild(divPonto);
            });
        }
    }

    // --- Registro de Coleta e Pontuação ---
    if (formRegistroColeta) {
        formRegistroColeta.addEventListener('submit', function(event) {
            event.preventDefault();

            const materialColetado = document.getElementById('materialColetado').value.trim();
            const quantidadeColetada = parseFloat(document.getElementById('quantidadeColetada').value);

            if (materialColetado && !isNaN(quantidadeColetada) && quantidadeColetada > 0) {
                // Simulação de cálculo de pontos: 1kg = 10 pontos
                const pontosGanhos = Math.round(quantidadeColetada * 10);
                pontosAcumulados += pontosGanhos;

                if (totalPontosDisplay) {
                    totalPontosDisplay.textContent = pontosAcumulados;
                }
                
                alert(`Coleta de ${quantidadeColetada}kg de ${materialColetado} registrada! Você ganhou ${pontosGanhos} pontos.`);
                formRegistroColeta.reset();
            } else {
                alert('Por favor, preencha os dados da coleta corretamente.');
            }
        });
    }

    // Renderização inicial (caso haja dados pré-carregados ou para mostrar a mensagem)
    renderizarPontosColeta();
});