# 📚 API Node.js - Gerenciamento de Cursos

Uma API RESTful moderna construída com Node.js, Fastify e PostgreSQL para gerenciamento de cursos e eventos.

## 🚀 Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **TypeScript** - Tipagem estática
- **Fastify** - Framework web rápido e eficiente
- **PostgreSQL 17** - Banco de dados relacional
- **Drizzle ORM** - ORM moderno para TypeScript
- **Zod** - Validação de schemas
- **Docker** - Containerização
- **Swagger/OpenAPI** - Documentação da API

## 📁 Estrutura do Projeto

```
nodejs-api-event/
├── src/
│   ├── database/          # Configurações do banco de dados
│   ├── routes/            # Rotas da API
│   │   ├── create-couse.ts
│   │   ├── get-courses.ts
│   │   └── get-course-by-id.ts
│   └── server.ts          # Configuração principal do servidor
├── docker-compose.yml     # Configuração do Docker
├── package.json
├── tsconfig.json
├── client.http           # Testes das rotas HTTP
└── README.md
```

## 🛠️ Pré-requisitos

- **Node.js** (versão 18 ou superior)
- **Docker** e **Docker Compose**
- **Git**

## 🚀 Instalação e Execução

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd nodejs-api-event
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/node-api-event"
NODE_ENV="development"
```

### 4. Inicie o banco de dados com Docker

```bash
docker-compose up -d
```

### 5. Execute as migrações do banco

```bash
npm run db:generate
npm run db:migrate
```

### 6. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

O servidor estará rodando em `http://localhost:3333`

## 📚 Documentação da API

Com o servidor rodando, acesse:

- **Documentação Swagger**: `http://localhost:3333/docs`
- **API Base**: `http://localhost:3333`

## 🔗 Endpoints Disponíveis

### Cursos

| Método | Endpoint       | Descrição             |
| ------ | -------------- | --------------------- |
| `GET`  | `/courses`     | Lista todos os cursos |
| `GET`  | `/courses/:id` | Busca curso por ID    |
| `POST` | `/courses`     | Cria um novo curso    |

### Exemplo de uso

#### Criar um curso

```http
POST http://localhost:3333/courses
Content-Type: application/json

{
  "title": "Curso de Node.js"
}
```

#### Listar cursos

```http
GET http://localhost:3333/courses
```

#### Buscar curso por ID

```http
GET http://localhost:3333/courses/{course-id}
```

## 🗄️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev              # Inicia servidor em modo desenvolvimento

# Banco de dados
npm run db:generate      # Gera migrations do Drizzle
npm run db:migrate       # Executa migrations
npm run db:studio        # Abre Drizzle Studio (interface visual)
```

## 🐳 Docker

### Serviços configurados:

- **PostgreSQL 17**: Banco de dados principal
  - Porta: `5432`
  - Usuário: `postgres`
  - Senha: `postgres`
  - Database: `node-api-event`

### Comandos úteis:

```bash
# Iniciar serviços
docker-compose up -d

# Parar serviços
docker-compose down

# Ver logs
docker-compose logs -f

# Resetar volumes (apaga dados)
docker-compose down -v
```

## 🧪 Testando a API

Use o arquivo `client.http` incluído no projeto para testar as rotas, ou utilize ferramentas como:

- **REST Client** (extensão do VS Code)
- **Postman**
- **Insomnia**
- **curl**

## 🛡️ Validação de Dados

A API utiliza **Zod** para validação de schemas, garantindo:

- Tipagem forte em TypeScript
- Validação automática de entrada
- Documentação automática no Swagger
- Mensagens de erro claras

## 📊 Monitoramento

- **Logs estruturados** com Pino
- **Documentação automática** com Swagger
- **Validação de tipos** em tempo de execução

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença ISC. Veja o arquivo `package.json` para mais detalhes.

## 🆘 Suporte

Se você encontrar algum problema ou tiver dúvidas:

1. Verifique se todos os serviços estão rodando
2. Confira os logs do Docker: `docker-compose logs`
3. Valide as variáveis de ambiente
4. Certifique-se de que as migrations foram executadas

---

⭐ **Dica**: Use `npm run db:studio` para visualizar e gerenciar os dados do banco através de uma interface web amigável!
