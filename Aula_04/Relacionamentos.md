# 🔗 Relacionamentos no MongoDB

No MongoDB, os relacionamentos entre dados podem ser representados principalmente de duas formas:

* **Embarcado (Embedded)** → os dados relacionados ficam dentro do mesmo documento.
* **Por referência (Referenced)** → os dados relacionados ficam em documentos separados e são associados por meio de um identificador, como `ObjectId`.

Os exemplos abaixo apresentam três tipos de relacionamento:

1. **One-to-One (1:1)** → um para um
2. **One-to-Many (1:N)** → um para muitos
3. **Many-to-Many (N:N)** → muitos para muitos

---

# 1️⃣ One-to-One — Um para Um

No relacionamento **one-to-one**, um documento está relacionado a apenas um outro documento.

## 📦 Embarcado

No modelo embarcado, as informações relacionadas ficam dentro do próprio documento.

### Exemplo

```javascript
db.patients.insertOne({
    name: "Jefté",
    age: 35,
    diseaseSummary: {
        diseases: [
            "cold",
            "broken leg"
        ]
    }
})
```

### Estrutura

```text
patients
└── Jefté
    ├── name
    ├── age
    └── diseaseSummary
        └── diseases
```

Nesse exemplo, `diseaseSummary` está dentro do documento de `patients`.

---

## 🔗 Por referência

No modelo por referência, as informações ficam em documentos separados.

### Pessoa

```javascript
db.persons.insertOne({
    name: "Jefté",
    age: 35,
    salary: 3000
})
```

### Carro

```javascript
db.cars.insertOne({
    model: "BMW",
    price: 40000,
    owner: ObjectId("6aa9e2cee9c288ce1241317e")
})
```

O campo `owner` utiliza um `ObjectId` para fazer referência ao documento da pessoa.

### Estrutura

```text
persons
└── Jefté
    ├── name
    ├── age
    └── salary

cars
└── BMW
    ├── model
    ├── price
    └── owner → ObjectId
```

---

# 2️⃣ One-to-Many — Um para Muitos

No relacionamento **one-to-many**, um documento pode estar relacionado a vários outros documentos.

## 📦 Embarcado

Os documentos relacionados podem ser armazenados dentro de um array no documento principal.

### Exemplo

```javascript
db.questionThreads.insertOne({
    creator: "Jefté",
    question: "How does that work?",
    answers: [
        {
            text: "Like that."
        },
        {
            text: "Thanks!"
        }
    ]
})
```

### Estrutura

```text
questionThreads
└── Thread
    ├── creator
    ├── question
    └── answers
        ├── "Like that."
        └── "Thanks!"
```

Nesse caso, uma pergunta possui várias respostas dentro do mesmo documento.

---

## 🔗 Por referência

Nesse modelo, os documentos relacionados ficam separados.

### Cidade

```javascript
db.cities.insertOne({
    name: "New York City",
    coordinates: {
        lat: 21,
        lng: 55
    }
})
```

### Cidadãos

```javascript
db.citizens.insertMany([
    {
        name: "Jefté Goes",
        cityId: ObjectId("5b98d6b44d01c52e1637a99f")
    },
    {
        name: "Brenno Salvador",
        cityId: ObjectId("5b98d6b44d01c52e1637a99f")
    }
])
```

Nesse exemplo, vários cidadãos podem utilizar o mesmo `cityId`.

### Estrutura

```text
cities
└── New York City
    ├── name
    └── coordinates

citizens
├── Jefté Goes
│   └── cityId → ObjectId
│
└── Brenno Salvador
    └── cityId → ObjectId
```

Assim, uma cidade pode estar relacionada a vários cidadãos.

---

# 3️⃣ Many-to-Many — Muitos para Muitos

No relacionamento **many-to-many**, vários documentos podem estar relacionados a vários outros documentos.

## 📦 Embarcado

Um exemplo apresentado nos slides utiliza um cliente que possui uma lista de pedidos.

### Cliente

```javascript
db.customers.insertOne({
    name: "Jefté",
    age: 35
})
```

### Adicionando pedidos

```javascript
db.customers.updateOne(
    {},
    {
        $set: {
            orders: [
                {
                    title: "A Book",
                    price: 12.99,
                    quantity: 2
                }
            ]
        }
    }
)
```

### Estrutura

```text
customers
└── Jefté
    ├── name
    ├── age
    └── orders
        └── A Book
            ├── price
            └── quantity
```

Os pedidos ficam armazenados dentro do documento do cliente.

---

## 🔗 Por referência

No modelo por referência, os documentos ficam separados e são relacionados utilizando `ObjectId`.

### Autores

```javascript
db.authors.insertMany([
    {
        name: "Jorge Amado",
        age: 78,
        address: {
            street: "Bahia"
        }
    },
    {
        name: "Graciliano Ramos",
        age: 55,
        address: {
            stree: "Rio de Janeiro"
        }
    }
])
```

### Livros

```javascript
db.books.updateOne(
    {},
    {
        $set: {
            authors: [
                ObjectId("5b98d9e44d01c52e1637a9a6"),
                ObjectId("5b98d9e44d01c52e1637a9a7")
            ]
        }
    }
)
```

### Estrutura

```text
authors
├── Jorge Amado
│   └── ObjectId
│
└── Graciliano Ramos
    └── ObjectId

books
└── Livro
    └── authors
        ├── ObjectId → Jorge Amado
        └── ObjectId → Graciliano Ramos
```

Nesse modelo, um livro pode possuir vários autores por meio de referências.

---

# 📊 Resumo dos relacionamentos

| Relacionamento         | Embarcado                                | Por referência                                             |
| ---------------------- | ---------------------------------------- | ---------------------------------------------------------- |
| **One-to-One (1:1)**   | Dados relacionados dentro do documento   | `ObjectId` apontando para outro documento                  |
| **One-to-Many (1:N)**  | Array com vários dados relacionados      | Vários documentos podem referenciar o mesmo `ObjectId`     |
| **Many-to-Many (N:N)** | Array contendo vários dados relacionados | Array de `ObjectId` fazendo referência a outros documentos |

---

# 🧠 Conceito principal

A diferença fundamental entre os dois modelos é:

### 📦 Embarcado

```text
Documento
└── Dados relacionados
```

Os dados ficam juntos no mesmo documento.

### 🔗 Por referência

```text
Documento A
└── ObjectId → Documento B
```

Os dados ficam separados e são relacionados por meio de uma referência.

---

# 🚀 Visão geral

```text
                    RELACIONAMENTOS
                         │
          ┌──────────────┼──────────────┐
          │              │              │
       1 : 1           1 : N           N : N
     One-to-One      One-to-Many    Many-to-Many
          │              │              │
       ┌──┴──┐        ┌──┴──┐        ┌──┴──┐
       │     │        │     │        │     │
    Embed  Ref     Embed  Ref     Embed  Ref
```

> **Em resumo:** no MongoDB, relacionamentos podem ser representados armazenando os dados diretamente dentro de um documento (**embarcado**) ou mantendo documentos separados e conectando-os através de referências (**por referência**).
