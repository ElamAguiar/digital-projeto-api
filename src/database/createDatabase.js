import mysql from 'mysql2/promise';
import env from "../../";

env.config()
// Função assíncrona para criar o banco de dados
async function createDatabase() {
    try {
        // Crie uma conexão com o MySQL
        const connection = await mysql.createConnection({
          host: 'localhost',
          user: process.env.USERNAME_DB,                // substitua pelo seu usuário do MySQL
          password: process.env.PASSWORD_DB,            // substitua pela sua senha do MySQL
          port: process.env.PORT_DB,                     // substitua pela porta do MySQL
        });

        console.log('Conectado ao MySQL!');

        // Nome do banco de dados que você deseja criar
        const databaseName = process.env.DATABASE_DB;

        // Crie o banco de dados
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${databaseName}\`;`);
        
        console.log(`Banco de dados "${databaseName}" criado ou já existe.`);
        
        // Feche a conexão
        await connection.end();
    } catch (err) {
        console.error('Erro ao criar o banco de dados:', err.message);
    }
}

// Chame a função para criar o banco de dados
createDatabase();