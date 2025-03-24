## 👋  Bem-vindo(a)

API REST modelo.

### 💻 Tecnologias Utilizadas

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![NodeJS](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/docs/latest/api/)
![Static Badge](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Static Badge](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=whit)
![Static Badge](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)
![Static Badge](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white)
![Static Badge](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)


- Typescript, Node js, Express e TypeORM para a construção da API.
- PostgreSQL para o banco de dados.
- Docker para containerização.
- Swagger para documentação.
- Jest para os testes unitários.

##

### 🚀 Como executar a aplicação
> _**Atenção**, Este projeto é executado dentro do Docker, certifique-se de ter instalado em sua máquina!_

1. Clone este repositório.
2. No terminal execute o comando, para subir as imagens necessárias:
```
docker compose up
```
3. A aplicação estará disponível no enderepo `localhost:3000` verifique a documentação das rotas disponíveis no link `localhost:3000/api-docs`.

##

###  ☑ Como editar a aplicação

1. Clone este repositório.
2. Execute o comando para instalar as dependencias:
```
npm install
```
3. Para executar a aplicação em modo de desenvolvedor execute o comando:
```
npm run dev
```

**Opcional** 
- caso queira inserir dados dummy no banco para testar execute o comando:
```
npm run seed
```
- Para testar a aplicação você pode utilizar algum software externo como Postman, Insominia, etc.
- Outra opção é utilizar o Vs code, instalar a extensão **REST Client** e executar os comandos localizados no arquivo `test.rest`.

##

###   Scripts
**build:** Compila o código TypeScript para JavaScript e gera os arquivos na pasta dist.
```
npm run build
```
**dev:** Inicia a aplicação em modo de desenvolvimento, recompilando automaticamente sempre que houver alterações no código. Usa ts-node-dev e carrega as variáveis do .env.
```
npm run dev
```
**seed:** Executa os scripts de seed para popular o banco de dados com dados iniciais.
```
npm run seed
```
**test:** Executa os testes usando jest e gera um relatório de cobertura de testes.
```
npm run test
```
**start:** Compila o código e inicia a aplicação em modo de produção.
```
npm run start
```
**docker-build:** Reconstrói as imagens Docker sem usar o cache. Ideal para quando há alterações no Dockerfile ou nas dependências (package.json).
```
npm run docker-build
```
**docker:** Sobe os containers Docker e, em seguida, limpa as imagens dangling (não utilizadas) para liberar espaço.
```
npm run docker
```
**docker-rebuild:** Combina os scripts docker-build e docker. Primeiro, reconstrói as imagens sem cache, depois sobe os containers e limpa as imagens dangling.
```
npm run docker-rebuild
```
...