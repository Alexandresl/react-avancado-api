# React Avançado - Willian Justen

## Seção 3: Módulo 2: Iniciando com Strapi

### 34. Strapi por debaixo dos panos

[Site oficial do Strapi](https://strapi.io/)

[Repositório do Strapi](https://github.com/strapi/strapi)

[Site do Buffet.js](https://buffetjs.io/)

[Roadmap do Strapi](https://portal.productboard.com/strapi/1-roadmap/tabs/2-under-consideration)

[Site oficial do koajs](https://koajs.com/)

[Site oficial do Lerna](https://lerna.js.org/)

[Knex (SQL Query Builder)](http://knexjs.org/)

### 35. Requisitos para o Strapi

[Documentação oficial do Strapi](https://strapi.io/documentation/developer-docs/latest/getting-started/installation.html)

[Como instalar com a CLI](https://strapi.io/documentation/developer-docs/latest/installation/cli.html)

[Como instalar com o Docker](https://strapi.io/documentation/developer-docs/latest/installation/docker.html)

[Site oficial do PostgreSQL](https://www.postgresql.org/download/)

[Instalar bancos no WSL 2](https://docs.microsoft.com/pt-br/windows/wsl/tutorials/wsl-database)

[Site oficial do Docker](https://www.docker.com/get-started)

### 36. Comandos do PostgreSQL

[Instalando PostgreSQL no Windows](https://docs.microsoft.com/pt-br/windows/wsl/tutorials/wsl-database)

[Comandos do PostgreSQL](https://harshityadav95.medium.com/postgresql-in-windows-subsystem-for-linux-wsl-6dc751ac1ff3)

* Comandos do PostgreSQL (em um terminal Linux):
    * Testar a instalação: ```psql --version```
    * Para rodar o postgres: ```sudo service postgresql start```
    * Para verificar se está rodando: ```sudo service postgresql status```
    * Para pausar o serviço: ```sudo service postgresql stop```
    * Criar um usuário: ```sudo -u postgres createuser nome-do-user```
    * Criar o banco de dados: ```sudo -u postgres createdb nome-do-banco```
    * Acessar a interface do Postgre: ```sudo -u postgres psql```
    * Listar usuários: ```\du```
    * Listar database: ```\l```

    * Alterar senha do usuário (logado no psql): ```alter user <nome-do-user> with encrypted password '<senha>';```
    * Dar os privilégios para o usuário no db: ```grant all privileges on database <nome-do-banco> TO <nome-do-user>;```

    * Sair da interface do Postgre: ```\q```

### 37. Iniciando o Strapi local

[iniciando utilizando a cli e o postgreSQL local](https://strapi.io/documentation/developer-docs/latest/installation/cli.html)

* Comando para instalar o Strpi: ```npm create strapi-app api```

### 38. Iniciando o Strapi com o Docker (opcional)

[Site oficial do Docker](https://www.docker.com/get-started)

[Instalando o Docker no Linux](https://docs.docker.com/engine/install/ubuntu/)

[Instalando o Docker no WSL2](https://docs.docker.com/docker-for-windows/wsl/)

[Imagem do Strapi Docker no Github](https://github.com/strapi/strapi-docker)

[Imagem do Strapi no Docker Hub](https://hub.docker.com/r/strapi/strapi)

### 39. Apresentação do projeto da Landing Page

[Repositório da Landing Page](https://github.com/React-Avancado/landing-page)

[Site oficial do Heroku](https://www.heroku.com/)

[Site oficial do netlify](https://www.netlify.com/)

[Playlist sobre o Netlify](https://www.youtube.com/watch?v=a1cIjP1bueM&list=PLlAbYrWSYTiMGMxQf9JSoZUU1rgVpGPth)

### 40. Apresentação do CMS do Strapi

[Repositório da Landing Page api](https://github.com/React-Avancado/landing-page-api)

### 41. Arquivos iniciais do Strapi

[Repositório da Landing Page](https://github.com/React-Avancado/landing-page)

### 42. Fields do Strapi

## Seção 4: Módulo 2 (extra): Criando estrutura de dados para o CMS da Landing Page

### 43. Criando logo e component de Header

[Código feito na aula](https://github.com/React-Avancado/landing-page-api/commit/7eea942dc0aaec2c3ed712d2cddc8fd026a3a314)

### 44. Criando Section About Project - Rich Text

[Código feito na aula](https://github.com/React-Avancado/landing-page-api/commit/f5d650bea40a41404dc15739f9b7b63b608e6019#diff-6891f1497d37c36624800d9ce838c3a9)

### 45. Criando Section Tech - Repeteble Component

[Código feito na aula](https://github.com/React-Avancado/landing-page-api/commit/f5d650bea40a41404dc15739f9b7b63b608e6019#diff-a9bb481b3cd5be590cbf4aa6a45395d6)

### 46. Criando Section Concepts

[Código feito na aula](https://github.com/React-Avancado/landing-page-api/commit/3f023ed1905faf3b47108be91162e394ab0cd810)

### 47. Criando Section Modules

[Código feito na aula](https://github.com/React-Avancado/landing-page-api/commit/33c76444eb48cd6114b9f04e609ff3c8b105bd2e)

### 48. Criando Agenda e Pricing Box - reutilizando componente já criado

[Código feito na aula](https://github.com/React-Avancado/landing-page-api/commit/d496dc28ca1c824c1deff3fadb93177695dcc71a)

### 49. Criando Collection Type para Authors

[Código feito na aula](https://github.com/React-Avancado/landing-page-api/commit/73e6eb738267838a501c5f661a2a4840b38ea7f2)

### 50. Adicionando campo faltante em Authors

[Código feito na aula](https://github.com/React-Avancado/landing-page-api/commit/bce92d8a6db8393d9068a38ba055cff871cfde66)

### 51. Criando relations (has many)

[código feito na aula](https://github.com/React-Avancado/landing-page-api/commit/f9fedef24c66613eb4eca18075ec1ab102ab2d78)

### 52. Criando Section Reviews

[Código feito na aula](https://github.com/React-Avancado/landing-page-api/commit/6e752e9eb05ee7a00885d8e7a1f085d01ed573fd)

### 53. Criando Section FAQ

[Código feito na aula](https://github.com/React-Avancado/landing-page-api/commit/239a9f0975f1d2f405f730a898daa1426bc54064)

### 54. Atualizando Strapi para 3.0.6

[Release do Strapi 3.0.6](https://github.com/strapi/strapi/releases/tag/v3.0.6)

[Migration Guides do Strapi](https://strapi.io/documentation/developer-docs/latest/migration-guide/)

[Código feito na aula](https://github.com/React-Avancado/landing-page-api/commit/69b8df08541b41b1cc549605c8f557586a947cca)

### 55. Adicionando um plugin customizado (CKEditor)

[Plugin do CKEditor5](https://github.com/Roslovets-Inc/strapi-plugin-ckeditor5)

* Comando para instalar o CKEditor: ```npm i strapi-plugin-ckeditor5@1.4.0```

* Comando para refazer o build: ```npm run build --clean```

### 56. Importando e Exportando dados no PostgreSQL

[Documentação do pg_dump](https://www.postgresql.org/docs/current/app-pgdump.html)

[Documentação do psql](https://www.postgresql.org/docs/current/app-psql.html)

[Zip com uploads e dump](https://github.com/React-Avancado/landing-page-api/blob/master/data.zip)

* Comando para copiar o sql de um arquivo: ```psql -h 127.0.0.1 -U strapi -d strapi -W < strapi.sql```
* Comando para criar uma cópia do banco: ```pg_dump -c --if-exists --exclude-table=strapi_administrator -h 127.0.0.1 -U strapi -W > strapi2.sql```

### 57. Permissões para rotas de Rest API

## Seção 5: Módulo 2 (extra): Introdução ao GraphQL

### 58. Transformando API em GraphQL

* Instalação realizada através do Marketplace - Plugins da administração do strapi

### 59. Criando primeiras queries do GraphQL

[Site oficial do GraphQL](https://graphql.org/)

[Acesse o GraphQL via Localhost](http://localhost:1337/graphql)

[Documentação de fields do GraphQL](https://graphql.org/learn/queries/#fields)

* Exemplos de query:

```graphql
# Query nomeada que pega dados do authors
query GET_AUTHORS{
  authors{
    name
    role
    description
  }
}

# Query anônima
{
  landingPage {
    logo {
      alternativeText
      url
    }
  }
}
```

### 60. Escrevendo Queries parametrizadas com variáveis

[Documentação do GraphQL - Arguments](https://graphql.org/learn/queries/#arguments)

```graphql
# Buscando dados de um autor por id na query
{
  author(id: 4){
    id
    name
    role
    description
  }
}

# Buscando dados de um autor por id com variáveis
query GET_AUTHOR($id: ID!){
  author(id: $id){
    id
    name
    role
    description
  }
}
# Em query variables
{
  "id": 4
}
```

## 61. Utilizando Fragments no GraphQL

[Documentação do GraphQL - Fragments](https://graphql.org/learn/queries/#fragments)

```graphql
# Fragment com uma estrutura que se repete
fragment imageData on UploadFile {
  alternativeText
  url
}

# Fragments (logo e header) que separa da query principal seções para facilitar
fragment logo on LandingPage {
  logo {
    ...imageData
  }
}

fragment header on LandingPage {
  header {
    title
    description
    button {
      label
      url
    }
    image {
      ...imageData
    }
  }
}

# Query principal
query GET_LANDING_PAGE {
  landingPage {
    ...logo
    ...header
  }
}

```

###  62. Aliases no GraphQL

[Documentação do GraphQL - Alias](https://graphql.org/learn/queries/#aliases)

```graphql
# No exemplo created_at irá retornar na query como CreatedAt
query GET_LANDING_PAGE {
  landingPage {
    createdAt: created_at
    ...logo
    ...header
  }
}
```

### 63. Criando primeira mutation para atualizar dados (updateAuthor)

```graphql
mutation UPDATE_AUTHOR {
  updateAuthor(input: {where: {id: 8}, data: {role: "advisor"}}) {
    author {
      id
      name
      role
    }
  }
}
```

### 64. Criando mutations parametrizadas

```graphql
mutation UPDATE_AUTHOR($id: ID!, $data: editAuthorInput) {
  updateAuthor(input: { where: { id: $id }, data: $data }) {
    author {
      id
      name
      role
    }
  }
}
# Valores passados pelas query variables
{
  "id": 8,
  "data": {
    "name": "Velna"
  }
}
```

### 65. Criando primeira mutation para criar dados (createAuthor)

```gql
mutation CREATE_AUTHOR {
  createAuthor(
    input: {
      data: {
        name: "Novo instrutor"
        role: "Instrutor"
        description: "blablablabla"
      }
    }
  ) {
    author {
      id
      name
      role
    }
  }
}
```


### 66. Deletando dados com mutation

```gql
mutation DELETE_AUTHOR {
  deleteAuthor(input: {where: {id: 9}}) {
    author{
      name
    }
  }
}
```

## Seção 6: Módulo 2 (extra): Trabalhando com GraphQL no Frontend

### 67. Vendo o código da Landing Page e clonando o projeto

[Repositório da LandingPage](https://github.com/React-Avancado/landing-page)

### 68. Criando o GraphQLClient

[Repositório do GraphQL-Request](https://github.com/prisma-labs/graphql-request)

[Código feito na aula](https://github.com/React-Avancado/landing-page/commit/cd936d765ade2dc62e3e0760d2f83e585c25a2e1)

* Comando para instalação do graphQL-Request: ```npm add graphql-request@3.4.0 graphql@15.5.0```

### 69. Criando a primeira query no Frontend

[Código feito na aula](https://github.com/React-Avancado/landing-page/commit/8f21b37f7001f800484bdc5a9584ac7f6257d287)

### 70. Fazendo o fetch dos primeiros dados (Data Fetchint - getStaticProps)

[Documentação do NextJS - Data Fetching](https://nextjs.org/docs/basic-features/data-fetching)

[Código feito na aula](https://github.com/React-Avancado/landing-page/commit/0521a03220957dd7f77507331e19f911fead6759)

### 71. Criando Types para a API e mostrando primeiros dados em tela

[Código feito na aula](https://github.com/React-Avancado/landing-page/commit/f0c6be1b279225e1684ceadba4c5d9900717fa8d)

### 72. Criando variáveis de ambiente

[Documentação do NextJS - Envirenment Variables](https://nextjs.org/docs/basic-features/environment-variables)

[Código feito na aula](https://github.com/React-Avancado/landing-page/commit/872af24952cdcd9e108b4149d2dde4ad940babaa)

### 73. Tornando o header dinâmico

[Código feito na aula](https://github.com/React-Avancado/landing-page/commit/4060206fbe7c196989d381483f3a73ab698ccd45)

### 74. Tornando a SectionAboutProject dinâmico

[Código feito na aula](https://github.com/React-Avancado/landing-page/commit/a61748309986c59ab22e0e0f8c5503dda034cfed)

* Código para fazer com que o React interprete dados com código HTML:
```jsx
<S.Text dangerouslySetInnerHTML={{ __html: description }} />
```

### 75. Tornando o SectionTech dinâmico

[Código feito na aula](https://github.com/React-Avancado/landing-page/commit/d94b3da98cbefc5bdbb566aa66bd48b870cf0075)

### 76. Tornando o SectionConcepts dinâmico

[Código feito na aula](https://github.com/React-Avancado/landing-page/commit/f2f018031b85cc1daf5500d706d7476338890314)

### 77. Tornando o SectionModules dinâmico

[Código da aula](https://github.com/React-Avancado/landing-page/commit/391962f9c002edd342f7eb6ee89510602f993dbc)

### 78. Tornando o SectionAgenda dinâmico

### 79. Tornando o PricingBox dinâmico

[Código da aula](https://github.com/React-Avancado/landing-page/commit/fb46143613785472ffd9e18cff8308d02c75f864)

### 80. Tornando o SectionAboutUs dinâmico

[Código da aula](https://github.com/React-Avancado/landing-page/commit/81d7ec2a2d80a5468f12b1c5aa4510929c7c4df4)

### 81. Tornando o SectionReviews dinâmico

[Código da aula](https://github.com/React-Avancado/landing-page/commit/5b96873bf829f0897c2b65be5afc98be559f14f1)

### 82. Tornando o SectionFaq dinâmico

[Código da aula](https://github.com/React-Avancado/landing-page/commit/7675312ef473710d172a05147ecfff173297e7fb)
