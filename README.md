# Projeto_WebCompleto
Projeto_final_Web_Completo Repositório criado para o desenvolvimento do Projeto Final que envolve backend e frontend, no treinamento de Web Completo da plataforma Udemy
# backend
## knex
knex init -> Para criar o arquivi knexfile.js, responsável pelas informações do Banco de dados no Postgree

## Migrations 
knex migrate:make create_table_users;
knex migrate:make create_table_categories;
knex migrate:make create_table_articles;

knex migrate:latest -> para obter a última versão das migrates.
knex migrate:rollback -> para realizar o drop das tabelas.

# frontend

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

