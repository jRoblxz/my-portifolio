# 💻 Portfólio Pessoal - João Roblez

[![Status do Projeto](https://img.shields.io/badge/Status-Online-brightgreen)](https://joaoroblez.sparklab.dev.br/)
[![Tecnologia Principal](https://img.shields.io/badge/Frontend-React%20%26%20Vite-blue)](https://react.dev/)
[![Estilização](https://img.shields.io/badge/Estilização-Tailwind%20CSS-06B6D4)](https://tailwindcss.com/)
[![API de Contato](https://img.shields.io/badge/API%20de%20Contato-PHP-777BB4)](https://www.php.net/)
[![Licença](https://img.shields.io/github/license/jRoblxz/my-portifolio)](LICENSE)

## 🌟 Sobre o Projeto

Este repositório contém o código-fonte do **Portfólio Pessoal** de **João Pedro Costa Roblez**, um estudante de Análise e Desenvolvimento de Sistemas apaixonado por criar soluções tecnológicas inovadoras.

O portfólio foi desenvolvido com o objetivo de apresentar de forma profissional e moderna as habilidades, experiências e projetos de João, servindo como um cartão de visitas digital completo para recrutadores e colaboradores.

## ✨ Demonstração

O projeto está atualmente em produção e pode ser acessado através do link:

> **[Acessar Portfólio de João Roblez](https://joaoroblez.sparklab.dev.br/)**

## 🚀 Funcionalidades Principais

O portfólio é estruturado para oferecer uma experiência completa e informativa:

*   **Design Moderno e Responsivo**: Interface escura e profissional, adaptável a qualquer dispositivo (Desktop, Tablet e Mobile).
*   **Navegação Intuitiva**: Seções claras para Início, Sobre, Skills, Experiência, Recomendações e Projetos.
*   **Detalhes de Experiência**: Apresentação detalhada da trajetória profissional e acadêmica.
*   **Formulário de Contato**: Um sistema simples de API em PHP para permitir que visitantes entrem em contato diretamente com o autor.
*   **Internacionalização (i18n)**: Estrutura preparada para suportar múltiplos idiomas.

## 🛠️ Tecnologias Utilizadas

O projeto utiliza uma arquitetura moderna e eficiente, dividida em Frontend e uma API simples para o formulário de contato.

| Categoria | Tecnologia | Descrição |
| :--- | :--- | :--- |
| **Frontend** | **React** | Biblioteca JavaScript para construção da interface do usuário. |
| | **Vite** | Ferramenta de build rápida para desenvolvimento frontend. |
| | **TypeScript** | Adiciona tipagem estática ao JavaScript para maior robustez. |
| **Estilização** | **Tailwind CSS** | Framework CSS *utility-first* para estilização rápida e customizável. |
| | **Framer Motion** | Biblioteca para animações fluidas e de alto desempenho. |
| | **MUI (Material UI)** | Componentes e ícones para complementar o design. |
| **Backend (API)** | **PHP** | Utilizado para o *script* simples de manipulação do formulário de contato. |

## 📂 Estrutura do Projeto

O repositório segue uma estrutura de *monorepo* simplificada, organizando o código em dois diretórios principais:

```
my-portifolio/
├── Portifolio-Api/         # Contém o script PHP para o formulário de contato.
│   ├── contact.php
│   └── ...
└── my-portifolio/          # Contém o código-fonte principal do Frontend (React/Vite).
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   └── ...
    ├── package.json
    └── ...
```

## ⚙️ Como Executar Localmente

Siga os passos abaixo para configurar e rodar o projeto em sua máquina local.

### Pré-requisitos

Certifique-se de ter instalado:

*   **Node.js** (versão 18+)
*   **pnpm** (gerenciador de pacotes recomendado)
*   Um ambiente **PHP** (para testar a API de contato, opcional)

### 1. Instalação

Clone o repositório e navegue até o diretório do frontend:

```bash
git clone https://github.com/jRoblxz/my-portifolio.git
cd my-portifolio/my-portifolio
```

Instale as dependências do projeto:

```bash
pnpm install
```

### 2. Execução

Inicie o servidor de desenvolvimento:

```bash
pnpm run dev
```

O portfólio estará acessível em `http://localhost:5173` (ou porta similar, conforme o output do Vite).

## ✍️ Autor

**João Pedro Costa Roblez**
*   **GitHub**: [jRoblxz](https://github.com/jRoblxz)
*   **LinkedIn**: [João Roblez](https://www.linkedin.com/in/joao-roblez/)

## 📄 Licença

Este projeto está licenciado sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
