Aqui está o ficheiro **`README.md`** completo e profissional, elaborado especificamente para o projeto da **Lavagens Silva** com a assinatura da **bluewolf.digital**.

O ficheiro inclui a visão geral do projeto, stack de tecnologias, arquitetura de ficheiros, instruções de uso local, guia passo a passo de publicação na **Vercel** e configuração do **domínio no Registro.br**.

[file-tag: code-generated-file-0-1786024643676749951]

---

### Conteúdo do `README.md` (para copiar diretamente se preferir):

```markdown
# 🧼 Lavagens Silva — Site Institucional & Landing Page de Alta Conversão

> Landing Page moderna, elegante, ultra responsiva e otimizada para conversão de orçamentos via WhatsApp para a empresa **Lavagens Silva** (Especialistas em Lavagem e Higienização de Estofados).

Desenvolvido com foco em alta performance, acessibilidade (WCAG), código semântico e SEO por **[bluewolf.digital](https://bluewolf.digital)**.

---

## 📌 Índice

- [Visão Geral](#-visão-geral)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Instalação e Uso Local](#-instalação-e-uso-local)
- [Como Publicar na Vercel](#-como-publicar-na-vercel)
- [Como Configurar o Domínio Personalizado (.com.br)](#-como-configurar-o-domínio-personalizado-combr)
- [Atribuição e Créditos](#-atribuição-e-créditos)

---

## 🎯 Visão Geral

O site institucional da **Lavagens Silva** foi projetado para transmitir **confiança, higiene, profissionalismo e segurança**. Toda a jornada do usuário foi desenhada para guiar o visitante por um funil de conversão direto para o WhatsApp do atendimento.

### 👥 Perfil do Cliente & Objetivos:
- **Público-alvo:** Proprietários de residências, veículos e escritórios que necessitam de higienização de sofás, colchões, poltronas, tapetes e interiores automotivos.
- **Objetivo principal:** Geração imediata de orçamentos via mensagem formatada no WhatsApp.

---

## ✨ Funcionalidades

1. **Hero Section de Impacto:** Chamada de ação limpa com botões de conversão e imagem destacada.
2. **Navegação Sticky (Menu Fixo):** Cabeçalho inteligente que se fixa no topo ao rolar a página.
3. **Menu Mobile Interativo:** Navegação fluida em celulares e tablets via JavaScript Vanilla.
4. **Catálogo de Serviços:** Cards elegantes detalhando cada tipo de higienização prestada.
5. **Galeria de Resultados (Proporção 4:5):** Layout em grid padronizado para exibição dos trabalhos realizados.
6. **Secção de Benefícios & Passo a Passo:** Esclarece a logística do atendimento ao domicílio.
7. **Perguntas Frequentes (FAQ Accordion):** Utilização da tag semântica HTML5 `<details>` para respostas rápidas sem pesar a página.
8. **Envio Dinâmico para WhatsApp:** Formulário interativo que recolhe os dados do cliente e constrói um link `wa.me` com texto formatado automaticamente.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído **100% com tecnologia web nativa (Vanilla)**, garantindo tempo de carregamento ultrarrápido, sem dependência de frameworks pesados:

- **HTML5 Semântico:** Estruturação orientada a SEO e acessibilidade.
- **CSS3 Moderno:**
  - Variáveis CSS (Custom Properties)
  - Layouts bidimensionais com **CSS Grid** e **Flexbox**
  - Efeitos de hover e animações suaves (`transition`, `transform`)
  - Responsividade via Media Queries
  - Proporção visual travada com `aspect-ratio: 4 / 5` na galeria
- **JavaScript (ES6+):**
  - Manipulação do DOM sem bibliotecas externas
  - Construção dinâmica de URLs com `encodeURIComponent()`
- **Google Fonts:** Tipografia moderna `Poppins`.

---

## 📂 Estrutura do Projeto

```text
lavagens-silva/
│
├── index.html            # Estrutura HTML5 semântica e acessível
├── css/
│   ├── style.css         # Estilos globais, variáveis, grid e componentes
│   └── responsive.css    # Regras de adaptação para dispositivos móveis
├── js/
│   └── main.js           # Menu mobile, scroll handler e integração com WhatsApp
└── assets/
    └── img/              # Imagens dos serviços e fotos de resultados