🚀 Projeto Backend
Este projeto faz parte da avaliação dos conteúdos de Backend do curso de Desenvolvimento Web Full Stack oferecido pela Geração Tech


Passos para Instalação
1.Clone o repositório:

git clone https://github.com/elamaguiar/digital-projeto-api.git
cd digital-projeto-api

2.Instale as dependências:

npm install

3.Informe os dados da conexao do mysql local dentro do arquivo .env.CONFIG

4.Crie um banco de dados, segue comando a baixo:

node src/database/createDatabase.js

5.sincroniuze o banco de dados para criar as tabelas do banco com o seguinte comando:

node src/config/syncforce.js

Rodando no Servidor
Para iniciar o servidor execute:

npm start



Rotas da API
Autenticação
POST /v1/user/token - Gera um token JWT para autenticação.

⚠️ O Token será necessário em todas as rotas POST - PUT - DELETE.

Categorias
GET /v1/category - Lista todas as categorias.
POST /v1/category - Cria uma nova categoria.
PUT /v1/category/:id - Atualiza uma categoria existente.
DELETE /v1/category/:id - Remove uma categoria.

Produtos
GET /v1/product - Lista todos os produtos.
POST /v1/product - Cria um novo produto.
PUT /v1/product/:id - Atualiza um produto existente.
DELETE /v1/product/:id - Remove um produto.

Usuários
GET /v1/user - Lista todos os usuários.
POST /v1/user - Cria um novo usuário.
PUT /v1/user/:id - Atualiza um usuário existente.
DELETE /v1/user/:id - Remove um usuário.