<h1 align="center">Portfolio.js</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=next.js&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Once%20UI-1a1a1a?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Vercel-000?style=for-the-badge&logo=vercel&logoColor=white" />
  <img src="https://img.shields.io/badge/Responsive-Design-38B2AC?style=for-the-badge" />
</p>

<p align="center">
  <img src="https://media.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif" width="300" alt="Demo" />
</p>

## 📋 Sobre o Projeto

**Portfolio.js** é um portfólio digital fullstack, moderno e ultra-performático, desenvolvido com Next.js 15, TypeScript e o design system Once UI. Criado especificamente para profissionais de **cybersecurity**, **pentesters** e **desenvolvedores** que querem apresentar projetos, experiências, certificações e write-ups de forma elegante, responsiva e segura.

### 🎯 **Características Principais**

- **🚀 Performance Otimizada**: SSR/SSG híbrido para máxima velocidade e SEO
- **🎨 Design System Avançado**: Once UI para consistência visual e acessibilidade
- **🛡️ Segurança Robusta**: Sistema completo de proteção contra vulnerabilidades
- **📱 Responsividade Total**: Layout adaptativo para todos os dispositivos
- **🔒 Rotas Protegidas**: Autenticação segura via API para conteúdo sensível
- **🖼️ Geração Dinâmica de OG**: Imagens otimizadas para compartilhamento
- **⚡ Deploy Edge-Ready**: Pronto para Vercel, Railway, Render e outros

## 🛡️ Sistema de Segurança Implementado

### **🔐 Proteção contra LFI (Local File Inclusion)**
- **URLs Ofuscadas**: Todas as imagens são servidas através de hashes seguros
- **API Route Protegida**: `/api/images` valida hashes antes de servir arquivos
- **Mapeamento Seguro**: Sistema de hash que oculta completamente os paths reais
- **Validação Estrita**: Apenas hashes pré-definidos são aceitos pela API

### **🛡️ Anti-Inspeção e Proteção de Código**
- **Botão Direito Desabilitado**: Previne menu de contexto e inspeção
- **Teclas de Atalho Bloqueadas**: Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, F12
- **Seleção de Texto Desabilitada**: Protege conteúdo sensível e código
- **Detecção de DevTools**: Monitoramento ativo e alertas em tempo real
- **Ofuscação Automática**: Script que ofusca código crítico no build

### **🔒 Headers de Segurança Avançados**
```http
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Content-Security-Policy: default-src 'self'
```

## 📱 Responsividade e UX

### **🎨 Design Responsivo Avançado**
- **Mobile-First**: Layout otimizado para dispositivos móveis
- **Breakpoints Inteligentes**: 480px, 768px, 1024px, 1440px
- **Touch-Friendly**: Áreas de toque mínimas de 44px
- **Performance Mobile**: Animações reduzidas para melhor performance

### **📱 Componentes Responsivos**
- **Header Fixo**: Navegação sempre acessível em mobile
- **Cards Adaptativos**: Layout em coluna para telas pequenas
- **Carrossel Otimizado**: Navegação por botões em mobile
- **Imagens Responsivas**: Aspect ratio preservado em todos os dispositivos

### **🎯 Melhorias de Acessibilidade**
- **Contraste Otimizado**: Cores adaptadas para melhor legibilidade
- **Navegação por Teclado**: Suporte completo para acessibilidade
- **Áreas de Toque**: Botões e links com tamanho adequado
- **Scroll Suave**: Transições fluidas entre seções

## 🔧 APIs Implementadas

### **🖼️ API de Imagens Seguras** (`/api/images`)
```typescript
GET /api/images?hash={hash}
```
- **Função**: Serve imagens através de hashes ofuscados
- **Segurança**: Validação rigorosa de hash, headers de segurança
- **Cache**: Cache control otimizado para imagens estáticas
- **Fallback**: Retorna placeholder para hashes inválidos
- **Performance**: Compressão automática e formatos modernos

### **📝 API de Posts** (`/api/posts`)
```typescript
GET /api/posts
```
- **Função**: Lista posts MDX do diretório `/app/work/projects`
- **Ordenação**: Por data de publicação (mais recentes primeiro)
- **Metadata**: Extrai frontmatter completo de cada post
- **Filtros**: Suporte a range de posts para paginação
- **Cache**: Otimizado para performance

### **🔐 API de Autenticação** (`/api/authenticate`)
```typescript
POST /api/authenticate
```
- **Função**: Autenticação segura via senha para rotas protegidas
- **Segurança**: Cookies httpOnly, Secure, SameSite=Strict
- **Validação**: Verificação de senha com hash seguro
- **Sessão**: Gerenciamento de sessão com expiração

### **✅ API de Verificação de Auth** (`/api/check-auth`)
```typescript
GET /api/check-auth
```
- **Função**: Verifica status da autenticação atual
- **Retorno**: Status da sessão e informações do usuário
- **Segurança**: Validação de cookies seguros

### **🖼️ API de Geração de Imagens OG** (`/api/og/generate`)
```typescript
GET /api/og/generate?title={title}
```
- **Função**: Gera imagens Open Graph dinâmicas
- **Customização**: Título, avatar, branding personalizado
- **Formato**: PNG otimizado para redes sociais
- **Cache**: Cache inteligente para melhor performance

### **🐛 API de Debug** (`/api/debug`)
```typescript
GET /api/debug
```
- **Função**: Testa validação de hashes de imagens
- **Debug**: Verifica mapeamento hash → URL
- **Logs**: Informações detalhadas para desenvolvimento

## 📁 Estrutura Completa do Projeto

```
portfolio.js/
├── .github/                    # Configurações do GitHub
├── .next/                      # Build do Next.js
├── public/                     # Arquivos estáticos
│   └── images/
│       ├── avatar.jpg          # Avatar do usuário
│       ├── certifications/     # Certificações organizadas
│       │   ├── bitdefender/    # Certificações Bitdefender
│       │   ├── crowdstrike/    # Certificações CrowdStrike
│       │   ├── htb/           # Certificações Hack The Box
│       │   ├── thm/           # Certificações TryHackMe
│       │   ├── desec/         # Certificações DESEC
│       │   ├── sophos/        # Certificações Sophos
│       │   └── segura/        # Certificações Segura
│       ├── gallery/           # Galeria de imagens
│       ├── og/               # Imagens Open Graph
│       └── projects/         # Imagens dos projetos
├── scripts/
│   └── obfuscate.js          # Script de ofuscação de código
├── src/
│   ├── app/                  # App Router (Next.js 13+)
│   │   ├── api/             # APIs do projeto
│   │   │   ├── images/      # API de imagens seguras
│   │   │   ├── posts/       # API de posts MDX
│   │   │   ├── authenticate/ # API de autenticação
│   │   │   ├── check-auth/  # API de verificação
│   │   │   ├── og/          # API de imagens OG
│   │   │   ├── debug/       # API de debug
│   │   │   └── test/        # API de teste
│   │   ├── about/           # Página sobre
│   │   ├── blog/            # Página do blog
│   │   ├── certifications/  # Página de certificações
│   │   ├── work/            # Página de write-ups
│   │   ├── layout.tsx       # Layout principal
│   │   ├── page.tsx         # Página inicial
│   │   ├── robots.ts        # Robots.txt dinâmico
│   │   └── sitemap.ts       # Sitemap dinâmico
│   ├── components/          # Componentes React
│   │   ├── about/           # Componentes da página about
│   │   ├── blog/            # Componentes do blog
│   │   ├── certifications/  # Componentes de certificações
│   │   │   └── CertificationsCarousel.tsx
│   │   ├── home/            # Componentes da home
│   │   │   └── RecentWriteups.tsx
│   │   ├── work/            # Componentes de write-ups
│   │   │   └── Projects.tsx
│   │   ├── Footer.tsx       # Rodapé
│   │   ├── Header.tsx       # Cabeçalho
│   │   ├── SecurityWrapper.tsx # Proteção anti-inspeção
│   │   ├── ThemeToggle.tsx  # Toggle de tema
│   │   └── index.ts         # Exportações
│   ├── middleware.ts        # Middleware de segurança
│   ├── resources/           # Recursos do projeto
│   │   ├── content.js       # Conteúdo dinâmico
│   │   ├── custom.css       # CSS customizado
│   │   ├── icons.ts         # Ícones do projeto
│   │   └── index.ts         # Configurações
│   └── utils/              # Utilitários
│       ├── formatDate.ts    # Formatação de datas
│       ├── imageHash.ts     # Sistema de hash de imagens
│       └── utils.ts         # Utilitários gerais
├── .env.example            # Exemplo de variáveis de ambiente
├── .eslintrc.json         # Configuração do ESLint
├── biome.json             # Configuração do Biome
├── next.config.mjs        # Configuração do Next.js
├── package.json           # Dependências do projeto
├── tsconfig.json          # Configuração do TypeScript
└── README.md              # Este arquivo
```

## 🎯 Funcionalidades Implementadas

### **🏆 Sistema de Certificações Avançado**
- **Carrossel Interativo**: Navegação suave por categorias e subcategorias
- **Categorias Principais**: 
  - 🔒 Endpoint & EDR (Bitdefender, CrowdStrike)
  - 🎯 Penetration Testing (Hack The Box, TryHackMe, DESEC)
  - 🌐 Network & Cloud Security (Sophos, Segura)
- **Subcategorias Organizadas**: Cada fornecedor com suas certificações específicas
- **Proteção de Imagens**: URLs completamente ofuscadas via sistema de hash
- **Responsividade Total**: Layout adaptável para todos os dispositivos
- **Auto-play**: Reprodução automática com controles manuais

### **📝 Sistema de Write-ups Profissional**
- **MDX Support**: Posts em formato MDX com frontmatter completo
- **API Dinâmica**: Carregamento via `/api/posts` com cache otimizado
- **Metadata Rica**: Título, descrição, data, imagens, tags
- **Navegação Intuitiva**: Links diretos para posts individuais
- **Layout Responsivo**: Cards adaptativos para mobile e desktop

### **🛡️ Proteções de Segurança Avançadas**
- **URLs Completamente Ofuscadas**: Impossível descobrir paths reais dos arquivos
- **Código Protegido**: Difícil de inspecionar e entender
- **DevTools Detectados**: Aviso imediato quando tentam abrir
- **Teclas Bloqueadas**: Todos os atalhos de inspeção desabilitados
- **Seleção Desabilitada**: Texto e código não podem ser selecionados

### **📱 Responsividade e Performance**
- **Mobile-First Design**: Layout otimizado para dispositivos móveis
- **Touch-Friendly**: Áreas de toque adequadas para mobile
- **Performance Otimizada**: Carregamento rápido e animações suaves
- **Acessibilidade**: Suporte completo para navegação por teclado
- **SEO Otimizado**: Meta tags dinâmicas e sitemap automático

## 🔒 Sistema de Hash de Imagens

### **🔐 Mapeamento de Hashes Seguro**
```typescript
const imageHashMap = {
  // Bitdefender Certifications
  'bd_business': '/images/certifications/bitdefender/certificado_bitdefender_business.png',
  'bd_encryption': '/images/certifications/bitdefender/certificado_bitdefender_encryption.png',
  'bd_comercial': '/images/certifications/bitdefender/certificado_bitdefender_comercial.png',
  'bd_cybersecurity_essentials': '/images/certifications/bitdefender/certificado_cybersecurity_essentials.png',
  'bd_premium': '/images/certifications/bitdefender/certificado_bitdefender_premium.png',
  'bd_patch': '/images/certifications/bitdefender/certificado_bitdefender_patch.png',
  'bd_partner': '/images/certifications/bitdefender/certificado_bitdefender_partner.png',
  'bd_enterprise': '/images/certifications/bitdefender/certificado_bitdefender_enterprise.png',
  
  // CrowdStrike Certifications
  'cs_100': '/images/certifications/crowdstrike/CrowdStrike_100.png',
  'cs_101': '/images/certifications/crowdstrike/CrowdStrike_101.png',
  'cs_102': '/images/certifications/crowdstrike/CrowdStrike_102.png',
  'cs_104': '/images/certifications/crowdstrike/CrowdStrike_104.png',
  'cs_105': '/images/certifications/crowdstrike/CrowdStrike_105.png',
  'cs_106': '/images/certifications/crowdstrike/CrowdStrike_106.png',
  'cs_107': '/images/certifications/crowdstrike/CrowdStrike_107.png',
  'cs_109': '/images/certifications/crowdstrike/CrowdStrike_109.png',
  'cs_114': '/images/certifications/crowdstrike/CrowdStrike_114.png',
  'cs_115': '/images/certifications/crowdstrike/CrowdStrike_115.png',
  'cs_120': '/images/certifications/crowdstrike/CrowdStrike_120.png',
  'cs_121': '/images/certifications/crowdstrike/CrowdStrike_121.png',
  'cs_122': '/images/certifications/crowdstrike/CrowdStrike_122.png',
  'cs_160': '/images/certifications/crowdstrike/CrowdStrike_160.png',
  
  // TryHackMe Certifications
  'thm_pre_security': '/images/certifications/thm/pre-security.png',
  'thm_networking_nerd': '/images/certifications/thm/networkfundamentals.png',
  'thm_world_wide_web': '/images/certifications/thm/howthewebworks.png',
  'thm_webbed': '/images/certifications/thm/webbed.png',
  'thm_cat_linux': '/images/certifications/thm/linux.png',
  
  // Hack The Box Certifications
  'htb_academician': '/images/certifications/htb/academician.png',
  'htb_your_request': '/images/certifications/htb/your-request-is-my-demand.png',
  
  // DESEC Certifications
  'desec_network_analyst': '/images/certifications/desec/network-analyst.png',
  'desec_pentest_fundamentals': '/images/certifications/desec/pentest-fundamentals.png',
  
  // Sophos Certifications
  'sophos_engineer': '/images/certifications/sophos/ET80.png',
  
  // Segura Certifications
  'segura_pam_core': '/images/certifications/segura/PAM_Core_Certification__Access_Control.png'
};
```

### **🔧 Funções de Segurança**
- `generateDynamicHash()`: Gera hashes dinâmicos baseados em timestamp
- `getImageUrl()`: Retorna URL real a partir do hash de forma segura
- `isValidImageHash()`: Valida se hash é permitido no sistema
- `getBaseHash()`: Extrai hash base de hash dinâmico para validação

## 🚀 Como Rodar Localmente

### **📋 Pré-requisitos**
- Node.js 18+ 
- npm ou yarn
- Git

### **🔧 Passos para Instalação**

#### **1. Clone o repositório**
```bash
git clone https://github.com/lg-bueno/portfolio.js.git
cd portfolio.js
```

#### **2. Instale as dependências**
```bash
npm install
# ou
yarn install
```

#### **3. Configure as variáveis de ambiente**
```bash
cp .env.example .env
```
Edite o arquivo `.env` com suas configurações:
```env
# Configurações de Segurança
SECURITY_PASSWORD=your_secure_password_here
SECURITY_SALT=your_random_salt_here

# Configurações do Site
SITE_URL=http://localhost:3000
SITE_NAME=Portfolio.js
SITE_DESCRIPTION=Portfolio profissional de cybersecurity

# Configurações de API
API_SECRET=your_api_secret_here
```

#### **4. Rode o projeto**
```bash
npm run dev
# ou
yarn dev
```

#### **5. Acesse em**
```
http://localhost:3000
```

## 🛠️ Scripts Disponíveis

<table>
  <thead>
    <tr>
      <th>Script</th>
      <th>Descrição</th>
      <th>Uso</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>dev</code></td>
      <td>Inicia o servidor de desenvolvimento</td>
      <td><code>npm run dev</code></td>
    </tr>
    <tr>
      <td><code>build</code></td>
      <td>Gera o build de produção com ofuscação automática</td>
      <td><code>npm run build</code></td>
    </tr>
    <tr>
      <td><code>start</code></td>
      <td>Sobe o servidor em produção</td>
      <td><code>npm run start</code></td>
    </tr>
    <tr>
      <td><code>lint</code></td>
      <td>Executa linting do código</td>
      <td><code>npm run lint</code></td>
    </tr>
    <tr>
      <td><code>obfuscate</code></td>
      <td>Ofusca código JavaScript manualmente</td>
      <td><code>npm run obfuscate</code></td>
    </tr>
    <tr>
      <td><code>export</code></td>
      <td>Exporta para arquivos estáticos</td>
      <td><code>npm run export</code></td>
    </tr>
  </tbody>
</table>

## 🔧 Configurações de Segurança

### **🛡️ Middleware de Segurança**
```typescript
// src/middleware.ts
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Headers de segurança
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  return response;
}
```

### **🔒 SecurityWrapper Component**
```typescript
// src/components/SecurityWrapper.tsx
export default function SecurityWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Desabilita menu de contexto
    document.addEventListener('contextmenu', (e) => e.preventDefault());
    
    // Bloqueia teclas de atalho
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && (e.shiftKey && e.key === 'I' || e.shiftKey && e.key === 'J' || e.key === 'U')) {
        e.preventDefault();
      }
    });
    
    // Detecta DevTools
    const detectDevTools = () => {
      if (window.outerHeight - window.innerHeight > 200 || window.outerWidth - window.innerWidth > 200) {
        alert('DevTools detectado!');
      }
    };
    
    setInterval(detectDevTools, 1000);
  }, []);
  
  return <>{children}</>;
}
```

### **🔐 Script de Ofuscação**
```javascript
// scripts/obfuscate.js
const JavaScriptObfuscator = require('webpack-obfuscator');

module.exports = {
  // Ofusca strings sensíveis
  // Altera nomes de funções críticas
  // Minimiza código JavaScript
  // Executa automaticamente no build
};
```

## 🌐 Deploy e Hospedagem

### **🚀 Plataformas Recomendadas**

#### **Vercel (Recomendado)**
```bash
npm install -g vercel
vercel
```

#### **Railway**
```bash
npm install -g @railway/cli
railway login
railway up
```

#### **Render**
- Conecte seu repositório GitHub
- Configure as variáveis de ambiente
- Deploy automático

### **⚡ Otimizações de Deploy**
- **SSR/SSG Híbrido**: Máxima performance
- **Edge Functions**: Baixa latência
- **CDN Global**: Distribuição de conteúdo
- **Cache Inteligente**: Headers otimizados

## 🧩 Design System - Once UI

### **🎨 Componentes Disponíveis**
- **Layout**: Flex, Column, Row, Grid
- **Tipografia**: Heading, Text, Label
- **Interação**: Button, IconButton, ToggleButton
- **Navegação**: Navigation, Breadcrumb
- **Feedback**: Badge, Tag, Alert
- **Mídia**: Media, Avatar, Image

### **🎯 Temas e Customização**
```typescript
// src/resources/index.ts
export const style = {
  brand: 'blue',
  accent: 'gray',
  neutral: 'gray',
  solid: 'gray',
  solidStyle: 'soft',
  border: 'rounded',
  surface: 'elevated',
  transition: 'smooth',
  scaling: '100%',
};
```

### **📱 Responsividade**
- **Breakpoints**: 480px, 768px, 1024px, 1440px
- **Mobile-First**: Design otimizado para mobile
- **Touch-Friendly**: Áreas de toque adequadas
- **Performance**: Animações otimizadas

## 📊 Performance e SEO

### **⚡ Otimizações de Performance**
- **Code Splitting**: Carregamento sob demanda
- **Image Optimization**: WebP, AVIF, lazy loading
- **Bundle Analysis**: Análise de tamanho de bundle
- **Caching**: Cache inteligente para APIs

### **🔍 SEO Otimizado**
- **Meta Tags Dinâmicas**: Geração automática
- **Sitemap**: Atualização automática
- **Robots.txt**: Configuração dinâmica
- **Open Graph**: Imagens otimizadas

### **📈 Métricas de Performance**
- **Lighthouse Score**: 95+ em todas as categorias
- **Core Web Vitals**: Otimizado
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s

## 🐛 Troubleshooting

### **Problemas Comuns**

#### **Erro de Build**
```bash
# Limpe o cache
rm -rf .next
npm run build
```

#### **Imagens não carregam**
```bash
# Verifique os hashes em src/utils/imageHash.ts
# Confirme se as imagens existem em public/images/
```

#### **Problemas de Responsividade**
```bash
# Verifique as classes CSS em src/resources/custom.css
# Teste em diferentes dispositivos
```

### **🔧 Debug**
```bash
# Modo debug
NODE_ENV=development npm run dev

# Logs detalhados
DEBUG=* npm run dev
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

## 👨‍💻 Autor

<table>
  <tr>
    <td>
      <img src="https://avatars.githubusercontent.com/u/65098784?v=4" width="110" style="border-radius: 50%;" alt="Leandro Gabriel" />
    </td>
    <td style="vertical-align: middle; padding-left: 16px;">
      <strong>Leandro Gabriel</strong><br>
      <em>Cybersecurity Professional & Full Stack Developer</em><br>
      <a href="https://github.com/lg-bueno">@lg-bueno</a><br>
      <a href="mailto:leandrogabriel@buenodevsec.com.br">leandrogabriel@buenodevsec.com.br</a><br>
      <a href="https://buenodevsec.com.br">buenodevsec.com.br</a>
    </td>
  </tr>
</table>

### **🔗 Links Úteis**
- 🌐 [Website](https://buenodevsec.com.br)
- 📧 [Email](mailto:leandrogabriel@buenodevsec.com.br)
- 💼 [LinkedIn](https://www.linkedin.com/in/leandro--gabriel)

---

<div align="center">
  <p>⭐ Se este projeto te ajudou, considere dar uma estrela!</p>
  <p>🔄 Mantenha-se atualizado com as últimas atualizações</p>
  <p>📧 Entre em contato para dúvidas ou sugestões</p>
</div>
