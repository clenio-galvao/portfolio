# 🚀 Portfólio Pessoal

Um portfólio moderno e responsivo criado com React, TypeScript e Styled Components. Inclui suporte a múltiplos idiomas (Português, Inglês, Espanhol) e tema dark/light.

## ✨ Características

- 🎨 **Design Moderno**: Interface limpa e profissional com gradientes e animações suaves
- 📱 **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- 🌙 **Tema Dark/Light**: Alternância entre temas com persistência no localStorage
- 🌍 **Multilíngue**: Suporte a Português, Inglês e Espanhol
- ⚡ **Performance**: Otimizado com React 18 e TypeScript
- 🎭 **Animações**: Transições suaves com Framer Motion
- 📧 **Formulário de Contato**: Sistema de contato funcional
- 🎯 **SEO Friendly**: Meta tags e estrutura otimizada

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca principal
- **TypeScript** - Tipagem estática
- **Styled Components** - CSS-in-JS
- **Framer Motion** - Animações
- **React Router DOM** - Roteamento
- **React i18next** - Internacionalização
- **React Icons** - Ícones

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd portfolio-pessoal
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Execute o projeto:
```bash
npm start
# ou
yarn start
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Layout/
│   │   ├── Header.tsx
│   │   ├── Header.styles.ts
│   │   ├── Footer.tsx
│   │   ├── Footer.styles.ts
│   │   ├── Layout.tsx
│   │   └── GlobalStyles.tsx
│   └── Sections/
│       ├── Hero.tsx
│       ├── Hero.styles.ts
│       ├── About.tsx
│       ├── About.styles.ts
│       ├── Projects.tsx
│       ├── Projects.styles.ts
│       ├── Skills.tsx
│       ├── Skills.styles.ts
│       ├── Contact.tsx
│       └── Contact.styles.ts
├── contexts/
│   ├── ThemeContext.tsx
│   └── LanguageContext.tsx
├── i18n/
│   └── i18n.ts
├── App.tsx
├── index.tsx
└── index.css
```

## 🎨 Personalização

### Alterando Informações Pessoais

1. **Nome e Título**: Edite o arquivo `src/i18n/i18n.ts`
2. **Projetos**: Modifique o array `projects` em `src/components/Sections/Projects.tsx`
3. **Habilidades**: Ajuste o array `skillCategories` em `src/components/Sections/Skills.tsx`
4. **Informações de Contato**: Atualize em `src/components/Sections/Contact.tsx` e `src/components/Layout/Footer.tsx`

### Adicionando Novos Idiomas

1. Adicione o novo idioma no arquivo `src/i18n/i18n.ts`
2. Inclua as traduções no objeto `resources`
3. Adicione a opção no seletor de idiomas em `src/components/Layout/Header.tsx`

### Modificando Cores e Temas

Edite as variáveis CSS em `src/components/Layout/GlobalStyles.tsx`:

```css
:root {
  --accent-primary: #3b82f6;
  --accent-secondary: #8b5cf6;
  /* ... outras variáveis */
}
```

### Adicionando Novas Seções

1. Crie o componente da seção em `src/components/Sections/`
2. Adicione os estilos correspondentes
3. Inclua a seção no `src/components/Layout/Layout.tsx`
4. Adicione o link de navegação no Header

## 📱 Responsividade

O portfólio é totalmente responsivo com breakpoints:
- **Desktop**: > 768px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🌍 Internacionalização

O projeto suporta 3 idiomas:
- **Português (pt)** - Padrão
- **Inglês (en)**
- **Espanhol (es)**

Para adicionar novos idiomas, siga as instruções na seção de personalização.

## 🎭 Animações

As animações são implementadas com Framer Motion:
- **Entrada de elementos**: Fade in com movimento vertical
- **Hover effects**: Transformações suaves
- **Scroll animations**: Elementos aparecem conforme o scroll
- **Loading states**: Transições de carregamento

## 📧 Formulário de Contato

O formulário de contato inclui:
- Validação de campos obrigatórios
- Estados de loading e feedback
- Integração com EmailJS para envio real de emails

### Configuração do EmailJS

1. **Configure as credenciais**:
   ```bash
   cp src/config/emailjs.example.ts src/config/emailjs.ts
   ```

2. **Edite o arquivo `src/config/emailjs.ts`** com suas credenciais do EmailJS

3. **Siga as instruções detalhadas** no arquivo `EMAILJS_SETUP.md`

### Estrutura de Arquivos de Configuração

```
src/config/
├── emailjs.example.ts    # Arquivo de exemplo (commitado)
└── emailjs.ts           # Suas credenciais (ignorado pelo git)
```

**⚠️ Importante**: O arquivo `emailjs.ts` contém credenciais sensíveis e está no `.gitignore` para segurança.

## 🚀 Deploy

### Netlify
1. Conecte seu repositório ao Netlify
2. Configure o build command: `npm run build`
3. Configure o publish directory: `build`

### Vercel
1. Conecte seu repositório ao Vercel
2. O Vercel detectará automaticamente as configurações

### GitHub Pages
1. Execute `npm run build`
2. Configure o GitHub Pages para servir a pasta `build`

## 📝 Scripts Disponíveis

- `npm start` - Executa o projeto em modo desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm test` - Executa os testes
- `npm run eject` - Ejecta as configurações do Create React App

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

Seu Nome - [@seuusuario](https://github.com/seuusuario) - seuemail@exemplo.com

Link do Projeto: [https://github.com/seuusuario/portfolio-pessoal](https://github.com/seuusuario/portfolio-pessoal)

---

⭐ Se este projeto te ajudou, considere dar uma estrela!
