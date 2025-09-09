# 📋 Instruções de Instalação

## Passo a Passo para Executar o Portfólio

### 1. Instalar Dependências

Execute o seguinte comando na raiz do projeto:

```bash
npm install
```

### 2. Executar o Projeto

```bash
npm start
```

O projeto será aberto automaticamente em `http://localhost:3000`

### 3. Personalizar o Portfólio

#### Alterar Nome e Informações Pessoais

1. **Nome e Título**: Edite o arquivo `src/i18n/i18n.ts`
   - Procure por `name: 'Seu Nome'` e `title: 'Desenvolvedor Full Stack'`
   - Altere para suas informações

2. **Projetos**: Edite `src/components/Sections/Projects.tsx`
   - Modifique o array `projects` com seus projetos reais
   - Adicione URLs reais para `liveUrl` e `githubUrl`

3. **Habilidades**: Edite `src/components/Sections/Skills.tsx`
   - Ajuste o array `skillCategories` com suas habilidades
   - Modifique os níveis de proficiência (0-100)

4. **Informações de Contato**: Edite `src/components/Sections/Contact.tsx`
   - Atualize email, telefone e localização
   - Configure o formulário para enviar para seu email

5. **Links Sociais**: Edite `src/components/Layout/Footer.tsx`
   - Adicione seus links do GitHub, LinkedIn, etc.

#### Adicionar Sua Foto

1. Coloque sua foto na pasta `public/`
2. Edite `src/components/Sections/Hero.tsx`
3. Substitua o emoji por uma tag `<img>` apontando para sua foto

#### Personalizar Cores

Edite `src/components/Layout/GlobalStyles.tsx`:
- Modifique as variáveis CSS para suas cores preferidas
- Ajuste os gradientes em `--accent-gradient`

### 4. Deploy

#### Netlify (Recomendado)
1. Conecte seu repositório GitHub ao Netlify
2. Configure:
   - Build command: `npm run build`
   - Publish directory: `build`
3. Deploy automático a cada push

#### Vercel
1. Conecte seu repositório ao Vercel
2. Deploy automático

#### GitHub Pages
1. Execute `npm run build`
2. Configure GitHub Pages para servir a pasta `build`

### 5. Estrutura de Arquivos Importantes

```
src/
├── components/
│   ├── Layout/          # Header, Footer, Layout
│   └── Sections/        # Hero, About, Projects, Skills, Contact
├── contexts/            # Theme e Language contexts
├── i18n/               # Traduções (PT, EN, ES)
└── App.tsx             # Componente principal
```

### 6. Recursos Disponíveis

- ✅ Tema Dark/Light
- ✅ 3 Idiomas (PT, EN, ES)
- ✅ Design Responsivo
- ✅ Animações Suaves
- ✅ Formulário de Contato
- ✅ Seção de Projetos
- ✅ Seção de Habilidades
- ✅ Navegação Suave

### 7. Próximos Passos

1. Personalize todas as informações
2. Adicione suas imagens
3. Configure o formulário de contato
4. Teste em diferentes dispositivos
5. Faça o deploy
6. Compartilhe seu portfólio!

---

**Dica**: Comece personalizando o arquivo `src/i18n/i18n.ts` com suas informações básicas, depois vá ajustando os outros componentes conforme necessário.
