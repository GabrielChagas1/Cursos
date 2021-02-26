# 1° Comando

* yarn init -y
* criação do arquivo package.json
* -y serve para o yarn criar o arquivo com apenas as informações que ele tem

# 2º Comando

* instalando as dependências.
* yarn add express => micro framework para criar rotas, middleware, servidor.
* yarn add @types/express -D => para usar o typescript com o express eu preciso add essa biblioteca.
* yarn add typescript -D => adicionando o typescript ao nosso projeto.
* yarn tsc --init => inicializando o typescript no nosso projeto.
* yarn add ts-node-dev -D => comando para converter o código em typescript em tempo de execução

# 3º Comando - BD

* instalando bibliotecas

* yarn add typeorm reflect-metadata => framework para fazer o mapeamento objeto-relacional da nossa base de dados

* yarn add sqlite3 => banco de dados que vamos usar no projeto, mas poderia ser qualquer outro.

*beekeeper -> ide para o banco de dados.

* uuid -> yarn add uuid -> biblioteca usada para controlar os ids das tabelas
 
* types do uuid -> yarn add @types/uuid

*yarn add test

* yarn add supertest e yarn add @types/supertest

*Para quem estiver no Windows e está tendo problemas para definir a variável NODE_ENV no script "test", segue os seguintes passos:

**- Instale o pacote cross-env (https://www.npmjs.com/package/cross-env) para lidar com as variáveis ambiente, o comando é: yarn add cross-env -D ou npm install cross-env -D
**- Altere o script "test" no arquivo package.json para o seguinte: "test": "cross-env NODE_ENV=test jest"


* yarn add nodemailer && yarn add @types/nodemailer -> https://ethereal.email/

* yarn add handlebars -> criar template do e-mail