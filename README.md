
# APIRest-Books

Uma API RESTful criada com Node.js, Express e TypeScript, utilizando Prisma ORM e MongoDB Atlas para armazenar e gerenciar dados de livros. Ideal para aplicações que precisam de um backend robusto e escalável para operações de CRUD.




## 🗄️💻Banco de dados

Para trabalhar com o desenvolvimento mais rápido da API, utilizei o banco de dados MongoDB Atlas, pois é uma ótima opção para gerenciar grandes volumes e diferentes tipos de dados. Ele oferece facilidade para armazenar dados na nuvem e conta com escalabilidade horizontal (sharding) e vertical (upgrade de instância), proporcionando maior estabilidade.

Em relação à segurança, o MongoDB Atlas se destaca com criptografia em repouso e em trânsito, garantindo a proteção dos dados. Além disso, possui uma interface web bastante agradável para visualizar o desempenho e monitorar o sistema.

Utilizar o MongoDB Atlas com Mongoose (Node.js) é uma excelente escolha: a conexão é simples, os dados ficam seguros e não é necessário gerenciar servidores ou manter um banco de dados local. 
 ## 🚀 Tecnologias utilizadas

- __Node.js + Express__ — Framework para criação da API

- __TypeScript — Tipagem__ estática para mais segurança no desenvolvimento

- __Prisma ORM__ — Interface moderna para comunicação com o banco de dados

- __MongoDB Atlas__ — Banco de dados NoSQL na nuvem

- __Dotenv__ — Gerenciamento de variáveis de ambiente

### 📁 Estrutura do Projeto

```bash
Books_API/
├── .idea/
├── node_modules/
├── prisma/
│ └── schema.prisma
├── src/
│ ├── controllers/
│ │ ├── delete-books-id.ts
│ │ ├── get-books-id.ts
│ │ ├── get-books.ts
│ │ ├── post-books.ts
│ │ └── put-books-id.ts
│ ├── middlewares/
│ ├── routes/
│ │ └── books.routes.ts
│ ├── services/
│ │ └── books.service.ts
│ └── server.ts
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
```

### 📦 Funcionalidades da API

- **GET** /books – Lista todos os livros

- **GET** /books/:id – Busca um livro por ID

- **POST** /books – Adiciona um novo livro

- **PUT** /books/:id – Atualiza os dados de um livro

- **DELETE** /books/:id – Remove um livro do banco de dados


## Deploy

Para fazer o deploy deste projeto, utilizei o Render, pois é uma opção bem acessível, incluindo a possibilidade de conectar com repositórios Git, o que facilita bastante a hospedagem dos projetos, principalmente das APIs.

Ele é ideal para projetos pequenos e oferece suporte a Web Services, bancos de dados, além de disponibilizar um domínio com HTTPS incluso.

O Render também realiza reinicializações automáticas conforme a demanda e possui suporte nativo a várias linguagens, como Node.js, Python, Go, Ruby, entre outras.

Com uma API em Node.js utilizando MongoDB Atlas, o Render permite fazer o deploy com facilidade, sem a necessidade de configurar servidores, NGINX ou containers manualmente.



## 🙌 Agradecimentos

Este projeto foi desenvolvido com foco em aprendizado e prática de construção de APIs modernas com tecnologias como TypeScript, Prisma e MongoDB.
Agradeço a todas as comunidades e documentações oficiais que auxiliaram no processo!
## 📄 Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.
## 🤝Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.