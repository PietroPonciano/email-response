# Email Response

Sistema de automação de atendimento por e-mail.

A aplicação recebe e-mails, armazena as mensagens e futuramente utilizará IA para gerar respostas automáticas.

## Stack

* NestJS
* TypeScript
* TypeORM
* SQLite
* Resend
* IA via HTTP

## Funcionalidades

Atualmente:

* Cadastro de e-mails
* Geração automática de `messageId`
* Armazenamento em SQLite
* Listagem de e-mails
* Busca de e-mail por ID

Futuramente:

* Recebimento de e-mails via Resend
* Processamento automático com IA
* Geração de respostas
* Envio das respostas por e-mail

## Como executar

Instale as dependências:

```bash
npm install
```

Execute em modo de desenvolvimento:

```bash
npm run start:dev
```

A API estará disponível em:

```text
http://localhost:3000
```

## Endpoints

### Criar e-mail

```http
POST /emails
```

Exemplo:

```json
{
  "from": "cliente@email.com",
  "to": "suporte@email.com",
  "subject": "Problema com meu pedido",
  "body": "Estou com um problema no meu pedido."
}
```

O `messageId` é gerado automaticamente pelo backend.

### Listar e-mails

```http
GET /emails
```

### Buscar e-mail

```http
GET /emails/:id
```

## Banco de dados

O projeto utiliza SQLite para desenvolvimento local.

O banco é armazenado em:

```text
database/email-response.sqlite
```

## Status

🚧 Em desenvolvimento.