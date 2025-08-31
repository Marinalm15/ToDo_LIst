# Task Board

Este projeto é um **Task Board** simples desenvolvido em **React** com **JSON Server** para simulação de backend. Ele permite adicionar, concluir, excluir e paginar tarefas.

## Funcionalidades

- Adicionar tarefas com descrição e data de criação.
- Marcar tarefas como concluídas, exibindo a data de conclusão.
- Desmarcar tarefas para voltar ao estado de "não concluídas".
- Excluir tarefas (persistente).
- Contador dinâmico de tarefas.
- Paginação com seleção do número de itens por página.
- Toasts de confirmação em ações de adicionar, concluir e excluir.

## Tecnologias Utilizadas

- [React](https://react.dev/)
- [React Hook Form](https://react-hook-form.com/)
- [Bootstrap](https://getbootstrap.com/)
- [JSON Server](https://github.com/typicode/json-server)
- [Yarn](https://yarnpkg.com/)

## Instalação e Execução

Clone o repositório:

```bash
git clone https://github.com/Marinalm15/ToDo_LIst.git

```

Instale as dependências:

```bash
npm install
npm install json-server --save-dev
```

### Rodando o backend mockado (API)

O projeto usa o **JSON Server** para simular uma API REST.  
Para iniciar a API, rode o comando abaixo:

```bash
yarn run server 
```

A API estará disponível em:  
`http://localhost:3001`

Exemplo de endpoints disponíveis:
- `GET http://localhost:3001/tasks`
- `POST http://localhost:3001/tasks`
- `PUT http://localhost:3001/tasks/:id`
- `DELETE http://localhost:3001/tasks/:id`

### Rodando o frontend

Em outra aba do terminal:

```bash
npm run dev
```

O frontend rodará em:  
`http://localhost:5173`




