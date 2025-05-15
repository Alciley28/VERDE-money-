# Verde Money - Plataforma de Gestão de Resíduos Sólidos

## Descrição

O Verde Money é uma plataforma web desenvolvida para otimizar a gestão de resíduos sólidos, conectando catadores, empresas e comerciantes nas cidades de Corumbá, Ladário e áreas de fronteira com a Bolívia (Puerto Quijarro e Puerto Suarez). A plataforma utiliza tecnologias como JavaScript, Python e SQL para oferecer funcionalidades como geolocalização de pontos de coleta, sistema de pontuação com recompensas monetárias e relatórios de produtividade. O objetivo principal é reduzir os impactos ambientais, promover a inclusão social e otimizar a economia circular.

[**Visite o Repositório no GitHub**](https://github.com/Alciley007/Projeto-Verde-money)

[**Experimente a Aplicação Online**](#) <!-- Substituir pelo link do projeto hospedado -->

---

## Tecnologias Utilizadas

* **Frontend:** HTML, CSS, JavaScript (Bootstrap e Leaflet.js)
* **Backend:** Python (Django) com REST API
* **Banco de Dados:** MySQL

---

## Funcionalidades

* Geolocalização de pontos de coleta
* Sistema de pontuação com recompensas monetárias
* Relatórios de produtividade
* Interface responsiva e adaptável a diferentes dispositivos
* Formulários de cadastro e login

---

## Instalação e Execução

Para rodar o projeto Verde Money localmente, siga os passos:

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/Alciley007/Projeto-Verde-money.git
    cd Projeto-Verde-money
    ```

2. **Configurar o banco de dados MySQL:**

    * Crie um banco de dados com o nome `verdemoney`.
    * Configure as credenciais do banco de dados no arquivo de configurações do Django (`settings.py`).

3. **Criar um ambiente virtual (recomendado):**

    ```bash
    python -m venv venv
    source venv/bin/activate  # No Linux/macOS
    venv\Scripts\activate  # No Windows
    ```

4. **Instalar as dependências do Python:**

    ```bash
    pip install -r requirements.txt
    ```

5. **Aplicar as migrações do Django:**

    ```bash
    python manage.py migrate
    ```

6. **Criar um superusuário (opcional):**

    ```bash
    python manage.py createsuperuser
    ```

7. **Rodar o servidor de desenvolvimento:**

    ```bash
    python manage.py runserver
    ```

    O site estará disponível em `http://localhost:8000/`.

---

## Cronograma do Projeto

### 1. Pesquisa (Concluída)
- Pesquisa quantitativa e qualitativa com 30 participantes: 23 catadores, 5 comerciantes e 2 empresários.
- Pesquisa de mercado e viabilidade do negócio.

### 2. Desenvolvimento (Em Andamento - Previsão de Conclusão: Junho)
- Modelagem do projeto.
- Monetização do sistema.
- Parcerias e ajustes técnicos (teste piloto do site, setor jurídico, tecnológico e trabalhista).

### 3. Implantação (Previsão: Julho)
- Implantação do sistema e criação do site oficial "Verde Money".

---

## Próximos Passos

- Expansão para aplicativo Verde Money (a depender da demanda).
- Expansão territorial de curto prazo: Corumbá, Ladário e cidades bolivianas (Puerto Quijarro e Puerto Suarez).
- Expansão tecnológica com novas funcionalidades, como sistema de crédito de carbono zero e cashback.

---

## Contribuição

Contribuições são bem-vindas! Se você tiver alguma sugestão de melhoria ou encontrar algum problema, por favor, abra uma issue ou envie um pull request.

---

## Contato

- **Email:** alciley39@gmail.com
- **Telefone:** +55 67 98219-7046


