# 🚀 Project in Bio

**Project in Bio** é uma plataforma para criadores de conteúdo e profissionais que desejam centralizar seus projetos e redes sociais em um único link personalizável. Compartilhe seu portfólio, acompanhe o engajamento através de analytics de cliques e eleve sua presença online.

## ✨ Funcionalidades

- **Link Personalizado**: Crie seu próprio link customizado (projectinbio.com/seu-link)
- **Perfil de Projetos**: Organize e exiba todos os seus projetos em uma página profissional
- **Analytics de Cliques**: Acompanhe o total de visitas e o engajamento com seus projetos
- **Cards de Projetos**: Apresente seus projetos de forma visual e atrativa
- **Sistema de Planos**: 
  - Trial gratuito por 15 dias
  - Plano Mensal: R$ 9,90/mês
  - Plano Vitalício: R$ 99,90 (pagamento único)
- **Interface Responsiva**: Design moderno e intuitivo construído com Tailwind CSS

## 🛠️ Tecnologias

- **Framework**: [Next.js 16](https://nextjs.org) com App Router
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS 4
- **Ícones**: Lucide React
- **UI Components**: Componentes customizados (Button, TextInput, TextArea)

## 📂 Estrutura do Projeto

```
app/
├── (pages)/
│   ├── page.tsx                    # Landing page
│   ├── criar/page.tsx              # Criação de novo perfil
│   ├── [profileId]/
│   │   ├── page.tsx                # Página do perfil do usuário
│   │   └── upgrade/page.tsx        # Página de upgrade de plano
│   └── globals.css
├── components/
│   ├── landing-page/               # Componentes da landing page
│   │   ├── hero.tsx
│   │   ├── pricing.tsx
│   │   ├── faq.tsx
│   │   └── video-explanation.tsx
│   ├── commons/                    # Componentes reutilizáveis
│   │   ├── project-card.tsx
│   │   ├── user-card.tsx
│   │   └── total-visits.tsx
│   └── ui/                         # Componentes de UI base
│       ├── button.tsx
│       ├── text-input.tsx
│       └── text-area.tsx
└── lib/
    ├── config.ts                   # Configurações do projeto
    └── utils.ts                    # Funções utilitárias
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js 20+
- npm, yarn, pnpm ou bun

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd project-in-bio
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run start` - Inicia o servidor de produção

## 🎨 Componentes Principais

### Landing Page
- **Hero**: Seção principal com CTA para criar conta
- **VideoExplanation**: Explicação em vídeo do produto
- **Pricing**: Tabela de preços e planos
- **FAQ**: Perguntas frequentes

### Perfil do Usuário
- **UserCard**: Cartão com informações do perfil
- **ProjectCard**: Cards individuais de projetos
- **TotalVisits**: Exibição de analytics de visitas

## 🔧 Configuração

As configurações do projeto estão centralizadas em `app/lib/config.ts`, incluindo:
- Dias de trial gratuito
- URLs da API
- Outras constantes do projeto

## 📄 Licença

Este projeto é privado e proprietário.

---

Desenvolvido usando Next.js
