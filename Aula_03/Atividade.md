# Atividade Prática – MongoDB: Antes e Depois

## 📚 Objetivo

Praticar os principais comandos do MongoDB analisando o estado da coleção **antes** e produzindo o estado **depois** por meio de operações no banco de dados.

## 🛒 Cenário

Foi criado um banco de dados chamado `store` e uma coleção chamada `customers`, representando os clientes de uma loja online.

### Banco de dados

```javascript
use store
```

### Criação da coleção

```javascript
db.createCollection("customers")
```

A coleção foi criada com sucesso.

---

# 📌 Dados iniciais

Foram inseridos cinco clientes utilizando `insertMany()`:

```javascript
db.customers.insertMany([
    {
        name: "Ana",
        age: 25,
        city: "Salvador",
        active: true,
        points: 120
    },
    {
        name: "Bruno",
        age: 32,
        city: "Feira de Santana",
        active: true,
        points: 300
    },
    {
        name: "Carlos",
        age: 28,
        city: "Salvador",
        active: false,
        points: 80
    },
    {
        name: "Daniela",
        age: 40,
        city: "São Paulo",
        active: true,
        points: 500
    },
    {
        name: "Eduarda",
        age: 22,
        city: "Rio de Janeiro",
        active: false,
        points: 50
    }
])
```

A inserção retornou `acknowledged: true` e cinco `insertedIds`, confirmando a criação dos cinco documentos.

---

# 🔎 Exercício 1 – Consulta

## Antes

Todos os documentos da coleção.

## Comando

Para buscar somente os clientes que moram em Salvador e mostrar apenas `name` e `city`:

```javascript
db.customers.find(
    { city: "Salvador" },
    { name: 1, city: 1, _id: 0 }
)
```

## Resultado esperado

```javascript
[
    {
        name: "Ana",
        city: "Salvador"
    },
    {
        name: "Carlos",
        city: "Salvador"
    }
]
```

### Observação

Inicialmente foi utilizado um array diretamente dentro do `find()`, o que gerou erro. O filtro do `find()` deve ser um objeto.

---

# ✏️ Exercício 2 – Atualização

## Antes

```javascript
{
    name: "Carlos",
    active: false
}
```

## Comando

```javascript
db.customers.updateOne(
    { name: "Carlos" },
    { $set: { active: true } }
)
```

## Depois

```javascript
{
    name: "Carlos",
    active: true
}
```

O comando foi executado com sucesso, retornando `matchedCount: 1` e `modifiedCount: 1`.

---

# 🔄 Exercício 3 – Atualizar vários documentos

## Antes

Clientes cuja cidade é Salvador.

## Comando

```javascript
db.customers.updateMany(
    { city: "Salvador" },
    { $set: { state: "BA" } }
)
```

## Depois

Todos os clientes de Salvador passam a possuir:

```javascript
state: "BA"
```

O comando atualizou dois documentos.

---

# ➕ Exercício 4 – Incremento

## Antes

```javascript
{
    name: "Ana",
    points: 120
}
```

## Comando

Utilizando o operador `$inc`:

```javascript
db.customers.updateOne(
    { name: "Ana" },
    { $inc: { points: 50 } }
)
```

## Depois

```javascript
{
    name: "Ana",
    points: 170
}
```

O operador `$inc` é utilizado para incrementar um valor numérico.

---

# 👤 Exercício 5 – Inserção

## Antes

A coleção possui cinco documentos.

## Comando

```javascript
db.customers.insertOne({
    name: "Fernando",
    age: 29,
    city: "Recife",
    active: true,
    points: 90
})
```

## Depois

A coleção passa a possuir o cliente:

```javascript
{
    name: "Fernando",
    age: 29,
    city: "Recife",
    active: true,
    points: 90
}
```

A inserção foi realizada com sucesso.

---

# 🗑️ Exercício 6 – Remoção

## Antes

```javascript
{
    name: "Eduarda"
}
```

## Comando

```javascript
db.customers.deleteOne({
    name: "Eduarda"
})
```

## Depois

O documento de Eduarda deixa de existir na coleção.

A operação retornou `deletedCount: 1`, confirmando a remoção.

---

# ⭐ Exercício 7 – Criar um novo campo

## Antes

```javascript
{
    name: "Daniela"
}
```

## Comando

```javascript
db.customers.updateOne(
    { name: "Daniela" },
    { $set: { vip: true } }
)
```

## Depois

```javascript
{
    name: "Daniela",
    vip: true
}
```

A operação foi realizada com sucesso.

---

# ❌ Exercício 8 – Remover um campo

## Antes

```javascript
{
    name: "Bruno",
    points: 300
}
```

## Comando

Utilizando `$unset`:

```javascript
db.customers.updateOne(
    { name: "Bruno" },
    { $unset: { points: "" } }
)
```

## Depois

```javascript
{
    name: "Bruno"
}
```

O campo `points` foi removido com sucesso.

---

# 📊 Exercício 9 – Ordenação

## Antes

Todos os documentos.

## Comando

Para ordenar pela idade em ordem decrescente:

```javascript
db.customers.find().sort({ age: -1 })
```

## Resultado

A ordem apresentada foi:

1. Daniela – 40 anos
2. Bruno – 32 anos
3. Fernando – 29 anos
4. Carlos – 28 anos
5. Ana – 25 anos

O comando foi executado no MongoDB utilizando `sort({ age: -1 })`.

---

# 🔍 Exercício 10 – Filtro com múltiplas condições

## Antes

Todos os documentos.

## Comando

```javascript
db.customers.find(
    {
        active: true,
        age: { $gt: 30 }
    },
    {
        name: 1,
        _id: 0
    }
)
```

## Resultado

```javascript
[
    {
        name: "Bruno"
    },
    {
        name: "Daniela"
    }
]
```

O resultado corresponde aos clientes ativos com idade superior a 30 anos.

---

# 🏆 Desafio

## 1. Mostrar apenas os nomes dos clientes

```javascript
db.customers.find(
    {},
    { name: 1, _id: 0 }
)
```

---

## 2. Contar quantos clientes existem

```javascript
db.customers.countDocuments()
```

---

## 3. Contar apenas os clientes ativos

```javascript
db.customers.countDocuments({
    active: true
})
```

---

## 4. Mostrar o cliente com maior pontuação

```javascript
db.customers.find().sort({
    points: -1
}).limit(1)
```

---

## 5. Mostrar o cliente com menor idade

```javascript
db.customers.find().sort({
    age: 1
}).limit(1)
```

---

## 6. Mostrar apenas clientes com pontuação entre 100 e 400

```javascript
db.customers.find({
    points: {
        $gte: 100,
        $lte: 400
    }
})
```

---

## 7. Mostrar apenas clientes das cidades de Salvador ou São Paulo

```javascript
db.customers.find({
    city: {
        $in: ["Salvador", "São Paulo"]
    }
})
```

---

## 8. Mostrar todos os clientes ordenados por nome

```javascript
db.customers.find().sort({
    name: 1
})
```

---

## 9. Mostrar apenas os três primeiros clientes

```javascript
db.customers.find().limit(3)
```

---

## 10. Mostrar apenas os clientes inativos

```javascript
db.customers.find({
    active: false
})
```

---

# 📝 Comandos principais utilizados

| Operação                    | Comando              |
| --------------------------- | -------------------- |
| Selecionar banco            | `use store`          |
| Criar coleção               | `createCollection()` |
| Inserir vários documentos   | `insertMany()`       |
| Inserir documento           | `insertOne()`        |
| Consultar                   | `find()`             |
| Atualizar um documento      | `updateOne()`        |
| Atualizar vários documentos | `updateMany()`       |
| Incrementar valor           | `$inc`               |
| Adicionar/alterar campo     | `$set`               |
| Remover campo               | `$unset`             |
| Remover documento           | `deleteOne()`        |
| Ordenar                     | `sort()`             |
| Limitar resultados          | `limit()`            |
| Contar documentos           | `countDocuments()`   |

# ⚠️ Erros encontrados durante a atividade

Durante a execução dos comandos foram encontrados alguns erros de sintaxe e digitação, que foram corrigidos durante a atividade.

### Criação da coleção

Foi utilizado inicialmente:

```javascript
db.create.Collection("customers")
```

O correto é:

```javascript
db.createCollection("customers")
```

### Nome da coleção

Em algumas tentativas foi utilizado:

```javascript
db.costumers
```

Porém, o nome correto da coleção é:

```javascript
db.customers
```

Por isso, algumas operações retornaram `matchedCount: 0`.

### Operador `$set`

Foi utilizado inicialmente:

```javascript
$et
```

O operador correto é:

```javascript
$set
```

### Ordenação por idade

Foi utilizado:

```javascript
sort({ idade: -1 })
```

Porém, o campo existente nos documentos é `age`.

O correto é:

```javascript
sort({ age: -1 })
```

### Atualização da pontuação

Foi tentado utilizar `replaceOne()` com `$set`, porém `replaceOne()` não deve receber operadores de atualização dessa forma.

Para atualizar o campo, foi utilizado:

```javascript
db.customers.updateOne(
    { name: "Ana" },
    { $set: { points: 170 } }
)
```

A atualização foi realizada com sucesso.

---

# ✅ Conclusão

A atividade permitiu praticar operações fundamentais do MongoDB, incluindo consultas, filtros, projeções, inserções, atualizações, remoções, ordenação, contagem e utilização de operadores como `$set`, `$inc`, `$unset`, `$gt`, `$gte`, `$lte` e `$in`.

Também foi possível identificar e corrigir erros de sintaxe e de nomenclatura durante a execução dos comandos no `mongosh`.
