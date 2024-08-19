
# 🚀 Projeto Backend

Este projeto faz parte da avaliação dos conteúdos de Backend do curso de Desenvolvimento Web Full Stack oferecido pela Geração Tech.

## Passos para Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/elamaguiar/digital-projeto-api.git
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure o banco de dados:**
   - Informe os dados da conexão do MySQL local dentro do arquivo `.env.CONFIG`.

4. **Crie o banco de dados:**
   ```bash
   node src/database/createDatabase.js
   ```

5. **Sincronize o banco de dados para criar as tabelas:**
   ```bash
   node src/config/syncforce.js
   ```

## Rodando no Servidor

Para iniciar o servidor, execute:

```bash
npm start
```

## Rotas da API

### Autenticação

- **POST** `/v1/user/token` - Gera um token JWT para autenticação.

⚠️ *O Token será necessário em todas as rotas `POST`, `PUT`, e `DELETE`.*

### Categorias

- **GET** `/v1/category` - Lista todas as categorias.
- **POST** `/v1/category` - Cria uma nova categoria.
- **PUT** `/v1/category/:id` - Atualiza uma categoria existente.
- **DELETE** `/v1/category/:id` - Remove uma categoria.

### Produtos

- **GET** `/v1/product` - Lista todos os produtos.
- **POST** `/v1/product` - Cria um novo produto.
- **PUT** `/v1/product/:id` - Atualiza um produto existente.
- **DELETE** `/v1/product/:id` - Remove um produto.

### Usuários

- **GET** `/v1/user` - Lista todos os usuários.
- **POST** `/v1/user` - Cria um novo usuário.
- **PUT** `/v1/user/:id` - Atualiza um usuário existente.
- **DELETE** `/v1/user/:id` - Remove um usuário.
