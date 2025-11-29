# GitHub – Aplicação Web de Receitas (CookHub)

Projeto desenvolvido utilizando **TypeScript + React** no frontend e **Node.js + Fastify + TypeScript** no backend.  
O objetivo do sistema é permitir que usuários pesquisem receitas, naveguem por categorias, criem contas, façam login e salvem seus pratos favoritos.

---

## 📚 **Sumário**
- Descrição Geral
- Funcionalidades
- Tecnologias Utilizadas
- Estrutura do Projeto
- Instalação e Uso
- Rotas da API
- Integrantes

---

# 🧾 **Descrição Geral**
O **GitHub (CookHub)** é uma plataforma culinária criada no contexto acadêmico da disciplina de Framework com TypeScript e React.  
Ele permite que usuários encontrem receitas de maneira rápida através de pesquisa, filtros por categorias e uma experiência completa de autenticação.

As telas do projeto incluem:

- Página Inicial com receitas populares e recomendadas
- Listagem de Categorias e receitas específicas
- Login e Registro de Usuário
- Página de Contatos com redes sociais
- Página Sobre Nós com apresentação da equipe
- Sistema de Favoritos do usuário autenticado

---

# ⭐ **Funcionalidades**

### 🔍 **Frontend (CookHub Web)**
- Pesquisar receitas pelo nome  
- Listar categorias: Frango, Carne, Sobremesas, Vegana, Bebidas, etc.  
- Visualizar receitas populares e recentes  
- Criar conta, realizar login e logout  
- Adicionar/Remover receitas aos favoritos  
- Página “Sobre nós”  
- Página de contatos  
- Footer global com links de navegação  

### 🖥️ **Backend (API REST com Fastify + TS)**
- CRUD de receitas  
- Autenticação JWT (login, registro, persistência)  
- Middleware de verificação de usuário autenticado  
- Rotas protegidas para favoritos  
- Seeds para povoamento inicial do banco  
- Models totalmente tipados com TypeScript  
- Controllers organizados por domínio  

---

# 🛠️ **Tecnologias Utilizadas**

### **Frontend**
- React  
- TypeScript  
- React Router DOM  
- Axios  
- CSS  
- Vite  

### **Backend**
- Node.js  
- Fastify  
- TypeScript  
- Prisma ou Sequelize  
- JWT  
- bcrypt  
- MySQL  

---

# 📁 **Estrutura do Projeto**

### **Frontend**
```
src/
 ├── components/
 ├── pages/
 ├── services/
 ├── assets/
 └── styles/
```

### **Backend**
```
src/
 ├── config/
 ├── controllers/
 ├── middlewares/
 ├── models/
 ├── routes/
 ├── services/
 ├── seed/
 └── server.ts
```

---

# 🚀 **Instalação e Uso**

## 📌 1. Clonar o Repositório
```bash
git clone https://github.com/seu-usuario/GitHub.git
cd GitHub
```

## 📌 2. Instalar Dependências

### Frontend
```bash
cd frontend
npm install
```

### Backend
```bash
cd backend
npm install
```

## 📌 3. Configurar Banco de Dados
- Criar arquivo `.env`
- Configurar credenciais
- Executar seeds (se existir):
```bash
npm run seed
```

## 📌 4. Executar Backend
```bash
npm run dev
```

## 📌 5. Executar Frontend
```bash
npm run dev
```

Acesse em:

👉 **http://localhost:5173**

---

# 🔌 **Rotas da API**

### **Autenticação**
| Método | Rota | Descrição |
|--------|------|-----------|
| POST | `/auth/register` | Cria usuário |
| POST | `/auth/login` | Login |
| GET | `/auth/me` | Mantém sessão ativa |

### **Receitas**
| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/recipes` | Lista receitas |
| GET | `/recipes/:id` | Detalhes |
| GET | `/recipes/category/:cat` | Categoria |

### **Favoritos**
| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/favorites` | Lista favoritos |
| POST | `/favorites/add/:id` | Adiciona |
| DELETE | `/favorites/remove/:id` | Remove |

---

# 👥 **Integrantes**
- Álefe William – 01548485  
- Eduardo da Silva – 0185646  
- João Victor Rodrigues – 01848069  
- José Raimundo – 01747158  
