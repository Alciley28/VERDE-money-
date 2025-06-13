import pytest

# Simulando uma função de cadastro
def cadastrar_usuario(email, senha, confirmacao, usuarios_existentes):
    if email in usuarios_existentes:
        return "Erro: e-mail já cadastrado."
    if senha != confirmacao:
        return "Erro: as senhas não coincidem."
    if not email or not senha:
        return "Erro: campos obrigatórios não preenchidos."
    usuarios_existentes.add(email)
    return "Cadastro realizado com sucesso!"

# Cenário 1: Cadastro com dados válidos
def test_cadastro_valido():
    usuarios = set()
    resultado = cadastrar_usuario("teste@verdemoney.com", "Senha123!", "Senha123!", usuarios)
    assert resultado == "Cadastro realizado com sucesso!"

# Cenário 2: Cadastro com senhas diferentes
def test_senhas_diferentes():
    usuarios = set()
    resultado = cadastrar_usuario("teste2@verdemoney.com", "Senha123!", "SenhaErrada!", usuarios)
    assert resultado == "Erro: as senhas não coincidem."

# Cenário 3: Cadastro com e-mail já cadastrado
def test_email_duplicado():
    usuarios = {"teste@verdemoney.com"}
    resultado = cadastrar_usuario("teste@verdemoney.com", "Senha123!", "Senha123!", usuarios)
    assert resultado == "Erro: e-mail já cadastrado."

# Cenário 4: Campos obrigatórios vazios
def test_campos_vazios():
    usuarios = set()
    resultado = cadastrar_usuario("", "", "", usuarios)
    assert resultado == "Erro: campos obrigatórios não preenchidos."
