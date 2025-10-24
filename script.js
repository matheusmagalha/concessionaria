// Função principal para mostrar o formulário desejado
function mostrarFormulario(formId) {
    // 1. Pega todos os formulários dentro do form-wrapper
    const formularios = document.querySelectorAll('.form-wrapper form');
    
    // 2. Remove a classe 'active' de todos os formulários
    formularios.forEach(form => {
        form.classList.remove('active');
    });

    // 3. Adiciona a classe 'active' ao formulário desejado
    const formAtivo = document.getElementById(formId + '-form');
    if (formAtivo) {
        formAtivo.classList.add('active');
    }
}

// *** LÓGICA DE VALIDAÇÃO (Futuras Implementações) ***

// Exemplo: Validação do Cadastro
document.getElementById('cadastro-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    // Aqui você faria as validações, por exemplo, se as senhas são iguais
    const senha = this.querySelector('input[placeholder="Nova Senha"]').value;
    const confirmaSenha = this.querySelector('input[placeholder="Confirme a Senha"]').value;

    if (senha !== confirmaSenha) {
        alert('As senhas não coincidem!');
        return; // Para a execução
    }

    // Se tudo estiver OK, você enviaria os dados para um servidor (Back-end)
    alert('Cadastro efetuado com sucesso! (Simulação)');
    // Aqui você redirecionaria ou chamaria a função mostrarFormulario('login')
});

// Exemplo: Validação do Login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Em um projeto real, você enviaria e-mail e senha para o servidor para verificar as credenciais
    alert('Tentativa de Login... (Simulação)');
});

// Exemplo: Esqueci Senha
document.getElementById('esqueci-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Em um projeto real, você enviaria o e-mail para o servidor para enviar o link de recuperação
    alert('Link de recuperação enviado para o e-mail (Simulação)');
});

// Garante que o formulário de login inicie ativo ao carregar a página (Boa prática, embora já esteja no HTML)
document.addEventListener('DOMContentLoaded', () => {
    mostrarFormulario('login');
});