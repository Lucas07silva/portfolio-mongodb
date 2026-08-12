# Aula 02 — CRUD no MongoDB

## 👨‍🏫 Professor

**Prof. Jefté Goes**

---

## 📚 Introdução

A segunda aula aborda o conceito de **CRUD** no MongoDB e revisa a estrutura utilizada para armazenar dados: **Databases, Collections e Documents**.

Também foram aprofundados os conceitos relacionados à estrutura de documentos **JSON**, especialmente **fields, properties, keys e values**.

---

# 🗄️ Databases, Collections e Documents

O MongoDB organiza os dados seguindo uma estrutura hierárquica:

```text
Database
└── Collection
    └── Document
        ├── Field
        └── Value
```

### Database

Um **Database** é responsável por agrupar as collections relacionadas a uma determinada aplicação ou contexto.

Exemplo:

```javascript
use escola
```

Nesse caso, `escola` representa o banco de dados que será utilizado.

---

### Collection

Uma **Collection** é um agrupamento de documentos.

Ela possui uma função semelhante às tabelas dos bancos de dados relacionais, porém trabalha com documentos em vez de linhas.

Exemplo:

```javascript
db.createCollection("alunos")
```

A collection `alunos` poderá armazenar diversos documentos referentes aos alunos.

---

### Document

Um **Document** é o registro armazenado dentro de uma collection.

Exemplo:

```json
{
    "nome": "Jefté",
    "idade": 35,
    "professor": true
}
```

Cada documento pode possuir uma estrutura flexível, não sendo obrigatório que todos os documentos tenham exatamente os mesmos campos.

---

# 📄 JSON

O JSON é um formato utilizado para representar informações de maneira estruturada.

Exemplo:

```json
{
    "nome": "Jefté",
    "idade": 35,
    "professor": true
}
```

Nesse documento, `nome`, `idade` e `professor` são campos.

---

## 🔑 Fields, Properties, Keys e Values

Um campo de um documento JSON pode ser chamado de **field** ou **property**.

Por exemplo:

```json
"nome": "Jefté"
```

Nesse caso:

* `nome` → **field / property / key**
* `"Jefté"` → **value**

A chave e o valor são separados por dois pontos:

```text
key : value
```

Quando existem vários campos, eles são separados por vírgulas:

```json
{
    "nome": "Jefté",
    "idade": 35,
    "professor": true
}
```

---

# 🔢 Tipos de Values

Os valores de um documento podem possuir diferentes tipos.

### String

Representa textos:

```json
{
    "nome": "Jefté"
}
```

### Number

Representa números:

```json
{
    "idade": 35
}
```

### Boolean

Representa valores verdadeiro ou falso:

```json
{
    "professor": true
}
```

Os valores booleanos podem ser:

```text
true
false
```

### Array

Permite armazenar uma lista de valores:

```json
{
    "disciplinas": [
        "Banco de Dados",
        "Programação",
        "Engenharia de Software"
    ]
}
```

### Object

Também é possível armazenar outro documento dentro do documento principal:

```json
{
    "nome": "Jefté",
    "endereco": {
        "cidade": "Feira de Santana",
        "estado": "Bahia"
    }
}
```

Nesse exemplo, `endereco` é um objeto que possui seus próprios campos.

---

# 🔄 CRUD

CRUD é um acrônimo utilizado para representar as quatro operações básicas de manipulação de dados:

| Operação | Significado | MongoDB             |
| -------- | ----------- | ------------------- |
| **C**    | Create      | Criar/inserir dados |
| **R**    | Read        | Consultar dados     |
| **U**    | Update      | Atualizar dados     |
| **D**    | Delete      | Excluir dados       |

Essas operações formam a base da manipulação de documentos no MongoDB.

---

# ➕ Create — Inserção

A operação **Create** é utilizada para inserir documentos em uma collection.

### Inserir um documento

```javascript
db.alunos.insertOne({
    nome: "Lucas",
    idade: 21,
    curso: "Sistemas de Informação"
})
```

Também é possível inserir vários documentos:

```javascript
db.alunos.insertMany([
    {
        nome: "Lucas",
        idade: 21
    },
    {
        nome: "Maria",
        idade: 20
    }
])
```

---

# 🔎 Read — Consulta

A operação **Read** permite consultar os documentos armazenados.

Para consultar todos os documentos:

```javascript
db.alunos.find()
```

Também podemos procurar documentos utilizando filtros:

```javascript
db.alunos.find({
    idade: 21
})
```

Nesse caso, serão retornados os documentos que possuem `idade` igual a `21`.

---

# ✏️ Update — Atualização

A operação **Update** permite modificar informações existentes.

Exemplo:

```javascript
db.alunos.updateOne(
    { nome: "Lucas" },
    { $set: { idade: 22 } }
)
```

Nesse exemplo, o MongoDB procura um aluno chamado `Lucas` e altera seu campo `idade` para `22`.

---

# 🗑️ Delete — Exclusão

A operação **Delete** permite remover documentos.

Exemplo:

```javascript
db.alunos.deleteOne({
    nome: "Lucas"
})
```

Esse comando remove um documento que possua o nome `Lucas`.

---

# 🧪 Atividade em Sala

Como atividade prática, foram utilizados os conceitos apresentados durante a aula para trabalhar com documentos no MongoDB.

Exemplo de criação do banco e collection:

```javascript
use escola

db.createCollection("alunos")
```

Inserção de documentos:

```javascript
db.alunos.insertMany([
    {
        nome: "Lucas",
        idade: 21,
        curso: "Sistemas de Informação"
    },
    {
        nome: "Maria",
        idade: 20,
        curso: "Sistemas de Informação"
    }
])
```

Consulta:

```javascript
db.alunos.find()
```

Atualização:

```javascript
db.alunos.updateOne(
    { nome: "Lucas" },
    { $set: { idade: 22 } }
)
```

Exclusão:

```javascript
db.alunos.deleteOne({
    nome: "Maria"
})
```

---

# 📌 Resumo da Aula

Nesta aula foram aprofundados os conceitos de **Databases, Collections e Documents**, além da estrutura dos documentos JSON.

Também foram estudados os conceitos de **fields, properties, keys e values**, incluindo diferentes tipos de valores, como strings, números, booleanos, arrays e objetos.

O principal conteúdo da aula foi o conceito de **CRUD**, que representa as quatro operações fundamentais para manipulação de dados:

```text
CREATE → Inserir
READ   → Consultar
UPDATE → Atualizar
DELETE → Excluir
```

Essas operações são fundamentais para desenvolver aplicações que utilizam MongoDB como banco de dados.

---

## 🎯 Aprendizados

Ao final da aula, foi possível:

* Compreender a estrutura de Databases, Collections e Documents;
* Entender a estrutura de documentos JSON;
* Identificar fields e properties;
* Diferenciar keys e values;
* Trabalhar com diferentes tipos de valores;
* Compreender o conceito de CRUD;
* Inserir documentos utilizando `insertOne()` e `insertMany()`;
* Consultar documentos utilizando `find()`;
* Atualizar documentos utilizando `updateOne()`;
* Excluir documentos utilizando `deleteOne()`;
* Praticar operações básicas de manipulação de dados no MongoDB.
