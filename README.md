<!-- Banner animado ou imagem OG -->
<p align="center">
  <img src="https://your-og-image-url.com/banner.gif" width="700" alt="Portfolio Banner" />
</p>

<h1 align="center">Portfolio</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=next.js&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Once%20UI-1a1a1a?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Vercel-000?style=for-the-badge&logo=vercel&logoColor=white" />
</p>

<p align="center">
  <img src="https://media.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif" width="300" alt="Demo" />
</p>

## Sobre o Projeto

**Portfolio.js** é um portfólio digital fullstack, moderno e ultra-performático, desenvolvido com Next.js 15, TypeScript e o design system Once UI.  
Criado para profissionais de tecnologia que querem apresentar projetos, experiências e conteúdo de forma elegante, responsiva e segura.

- **SSR/SSG híbrido** para máxima performance e SEO.
- **Design System próprio (Once UI)** para consistência visual e acessibilidade.
- **Rotas protegidas** e autenticação segura via API.
- **Geração dinâmica de imagens OG** para compartilhamento profissional.
- **Deploy pronto para edge/serverless** (Vercel, Railway, Render).


## 👉 ACESSE O PORTFÓLIO AGORA:

<p align="center">
  <a href="https://buenodevsec.com.br" target="_blank">
    <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExejJjdzMxcnd0NTJpM3hxbjBkbjVjYTBrc2s3NG1ibnlsNjZuYWx1MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/4aAnvkK3wCq6JFyu5e/giphy.gif" alt="Clique para acessar o portfólio" width="60" />
    <img src="https://img.shields.io/badge/ACESSE%20O%20PORTFÓLIO-CLIQUE%20AQUI-00C897?style=for-the-badge&logo=vercel&logoColor=white&labelColor=1A1A1A" alt="Acesse o Portfólio" />
  </a>
</p>

<h2>🚀 Tecnologias</h2>

<table>
  <tr>
    <td align="center">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" width="40" title="Next.js" /><br>
      <sub><b>Next.js 15</b></sub>
    </td>
    <td align="center">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="40" title="TypeScript" /><br>
      <sub><b>TypeScript</b></sub>
    </td>
    <td align="center">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" width="40" title="Tailwind CSS" /><br>
      <sub><b>Tailwind CSS</b></sub>
    </td>
    <td align="center">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="40" title="GitHub" /><br>
      <sub><b>GitHub</b></sub>
    </td>
    <td align="center">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" width="40" title="JavaScript" /><br>
      <sub><b>JavaScript</b></sub>
    </td>
    <td align="center">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" width="40" title="Git" /><br>
      <sub><b>Git</b></sub>
    </td>
    <td align="center">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg" width="40" title="CSS3" /><br>
      <sub><b>CSS3</b></sub>
    </td>
  </tr>
</table>

### Principais recursos do projeto

- <b>Next.js 15:</b> App Router, SSR, RSC, Edge
- <b>TypeScript:</b> tipagem forte e segura
- <b>Once UI System:</b> design system customizado
- <b>Tailwind CSS:</b> utilitários para estilização rápida e responsiva
- <b>API Routes (REST):</b> autenticação, geração de imagens OG
- <b>Geração de Imagens OG:</b> integração com <a href="https://vercel.com/docs/functions/og-image-generation" target="_blank">@vercel/og</a>
- <b>CI/CD:</b> integração contínua com GitHub Actions


## 🗂️ Estrutura do Projeto
portfolio.js/<br>
├── .github/<br>
├── .next/<br>
├── public/<br>
├── src/<br>
│   ├── app/<br>
│   ├── components/<br>
│   ├── styles/<br>
│   ├── utils/<br>
│   └── types/<br>
├── .env.example<br>
├── next.config.mjs<br>
├── package.json<br>
└── README.md<br>

## 🔒 Segurança e Autenticação

* Autenticação via senha protegendo rotas sensíveis

* Cookies httpOnly, Secure, SameSite=Strict

* API RESTful para login e verificação de sessão

* Variáveis de ambiente para segredos e tokens

## 🖼️ Geração de Imagens OG
* /api/og/generate: endpoint para criar imagens Open Graph personalizadas para cada página/post

* Layout visual consistente com o branding do portfólio

* Suporte a customização via query string (título, avatar, etc.)

## 🚀Como Rodar Localmente

# Clone o repositório

<pre>
git clone https://github.com/seu-usuario/portfolio.js.git
</pre>

# Instale as dependências

Dentro da pasta: 

<pre>npm install
ou 
yarn
</pre>

# Configure as variáveis de ambiente

Copie .env.example para .env e preencha os valores necessários.

# Rode o projeto
<pre>
npm run dev
ou
yarn dev
</pre>

# Acesse em

http://localhost:3000

## 🛠️ Scripts Disponíveis

<table>
  <thead>
    <tr>
      <th>Script</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>dev</code></td>
      <td>Inicia o servidor de desenvolvimento</td>
    </tr>
    <tr>
      <td><code>build</code></td>
      <td>Gera o build de produção</td>
    </tr>
    <tr>
      <td><code>start</code></td>
      <td>Sobe o servidor em produção</td>
    </tr>
    <tr>
      <td><code>lint</code></td>
      <td>Lint do código</td>
    </tr>
    <tr>
      <td><code>format</code></td>
      <td>Formata o código (Biom/Prettier)</td>
    </tr>
  </tbody>
</table>

## 🌐 Deploy

Deploy recomendado: Vercel, Railway, Render

Pronto para SSR, RSC e Edge Functions

CI/CD: pipelines prontos para integração contínua

## 🧩 Design System

Once UI System: componentes visuais, temas, tokens, acessibilidade e responsividade.

Fácil customização para adaptar branding e identidade visual.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

## 👨‍💻 Autor

<table>
  <tr>
    <td>
      <img src="https://avatars.githubusercontent.com/u/65098784?v=4" width="110" style="border-radius: 50%;" alt="Seu Avatar" />
    </td>
    <td style="vertical-align: middle; padding-left: 16px;">
      <strong>Leandro Gabriel</strong><br>
      <a href="https://github.com/lg-bueno">@lg-bueno</a><br>
      <a href="mailto:leandrogabriel@buenodevsec.com.br">leandrogabriel@buenodevsec.com.br</a>
    </td>
  </tr>
</table>
