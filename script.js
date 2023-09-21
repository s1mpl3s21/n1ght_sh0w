const registros = [];
const nomeInput = document.getElementById('nomeInput');
const registrosDiv = document.getElementById('registros');
const obrigadoText = document.getElementById('obrigadoText');
const botaoRegistrar = document.querySelector('button');

function registrarNome() {
    const nome = nomeInput.value;
    if (nome.trim() !== '') {
        registros.push(nome);
        nomeInput.value = '';

        // Atualiza a lista de registros
        exibirRegistros();

        // Exibe a tela de obrigado
        exibirObrigado();

        // Desabilita a caixa de texto e o botão após o registro
        nomeInput.disabled = true;
        botaoRegistrar.disabled = true;
    }
}

function exibirRegistros() {
    registrosDiv.innerHTML = '<strong>Registros:</strong><br>' + registros.join('<br>');
}

function exibirObrigado() {
    obrigadoText.style.display = 'block';
}
